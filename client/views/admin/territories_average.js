var formSubmission;

Template.territoriesAverage.rendered = function(){

  $('form').submit(function(e){
    e.preventDefault();
    formSubmission = $('form[name="graphOptionsForm"]').serializeObject();
    console.log(formSubmission);
  });

  var convertToDateObject = function(date){
    dateObject = new Date(date);
    return dateObject;
  };

  var getMonth = function(date){
    return convertToDateObject(date).getMonth();
  };

  var getYear = function(date){
    return convertToDateObject(date).getFullYear();
  };

  var createXAxisLabels = function(startDate, endDate, interval){
    var categories = [];
    var startingMonth = getMonth(startDate);
    var startingYear = getYear(startDate);
    var endingMonth = getMonth(endDate);
    var endingYear = getYear(endDate);
    var monthNames = [ "January", "February", "March", 
                      "April", "May", "June",
                      "July", "August", "September", 
                      "October", "November", "December" ];

    if (interval === "Month"){
      for( var month = startingMonth, year = startingYear; month <= endingMonth || year < endingYear; month++){
        // console.log("month is: " + month);
        // console.log("year is: " + year);
        if(month === 12){
          month = -1;
          year++;
        } else {
          categories.push(monthNames[month] + " - " + year);
        };
      };
      var xAxis = {
        title: {
          text: interval
        },
        categories: categories
      };
    };

    if (interval === "Year"){
      for( var year = startingYear; year <= endingYear; year++){
        // console.log("year is: " + year);
        categories.push(year);
      };
      var xAxis = {
        title: {
          text: interval
        },
        categories: categories
      };
    };


    console.log(xAxis);
    return xAxis;
  };

  createXAxisLabels(formSubmission.startDate, formSubmission.endDate, formSubmission.interval);

  var calculateAverage = function(arrayOfNumbers){
    var sum = 0;
    for(var i = 0; i < arrayOfNumbers.length; i++){
      sum += arrayOfNumbers[i];
    }
    console.log("The sum is " + sum);
    console.log("The array length is " + arrayOfNumbers.length);
    if( arrayOfNumbers.length === 0){
      return 0;
    } else {
      return average = sum / arrayOfNumbers.length;
    };
  };

  var calculateArrayAverages = function(array){
    var testAverages = [];
    for (var i = 0; i < array.length; i++){
      testAverages.push(calculateAverage(array[i]));
    };
    return testAverages;
  };

  var calculateTestAverages = function(testResults, startDate, endDate, interval){

    var testAverages;
    var arrayOfNumbers = [];
    var arrayOfAverages = [];
    var monthAverage = 0;
    var intermediaryArray = [];

    if( interval == "Month" ){
      startingMonth = getMonth(startDate); // 3
      endingMonth = getMonth(endDate); // 6
      maxArrayIndex = endingMonth - startingMonth; //3

      for (var i = 0; i <= maxArrayIndex; i++){
        intermediaryArray[i] = [];  //Initialize the empty array here based on the size
      };

      for (var month = startingMonth,i=0; month <= endingMonth; month++,i++){
      //Simply update the value of i when you update the value of month. 
      //You don't have to enclose the whole thing into the loop that initialises intermediaryArray

        for (var testNumber = 0; testNumber < testResults.length; testNumber++){
          if ( getMonth(testResults[testNumber].dateCreated) == month ){
            intermediaryArray[i].push(testResults[testNumber].score);
          };
        };
      };
    };

    console.log(intermediaryArray);
    return calculateArrayAverages(intermediaryArray);

  };


  $(function () {
    $('#container').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: 'Territory Average Comparison'
      },
      subtitle: {
          text: '#'
      },
      xAxis: {
          title: {
            text: "Month"
          },
          categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
          ]
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Percentage'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [{
          name: 'Asia',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

      }, {
          name: 'North America',
          data: function(){
            var name = Territories.find({name: 'North America'}).fetch();
            value = [];
            for(var key in name){
              value[0] = name[key].territory_result.territory_average_percent;
              return value;
            }
          }
      }, {
          name: 'Europe',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

      }, {
          name: 'Africa',
          data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

      }]
    });
  });

  getTerritoryId = function(territoryName){
    return Territories.find({name: territoryName}, {fields: {_id: 1}}).fetch()[0]._id;
  }

  createSeries = function(seriesNames, startDate, endDate, interval){
    var series = [];
    var start = new Date(startDate);
    var end = new Date(endDate);

    for(var i = 0; i < seriesNames.length; i++){
      var seriesNamesId = getTerritoryId(seriesNames[i]);
      var seriesNamesResults = Tests.find({territoryId: seriesNamesId, dateCreated: {$gte: start, $lt: end}}).fetch();
    }
  };
  createSeries(["Asia", "Europe", "Africa", "North America"], "01/20/2014", "08/10/2014", "Month");



// allTestResults = Tests.find({ }, {fields: {dateCreated: 1, territoryId: 1, 'test_result.test_score_total': 1, 'test_result.test_max_total': 1}}).fetch();
// console.log(allTestResults);

// getTerritoryId = function (territoryName){
//   return Territories.find({name: territoryName}, {fields: {_id: 1}}).fetch()[0]._id;
// }

// getTerritoryTestResults = function(allTestResults, territoryName, testMonthNum){
//   var territoryId = getTerritoryId(territoryName);
//   var territoryScoreTotal = 0;
//   var territoryMaxTotal = 0;
//   for (var i = 0; i < allTestResults.length; i++){
//     if(allTestResults[i].territoryId === territoryId && allTestResults[i].dateCreated.getMonth() === testMonthNum){
//       territoryScoreTotal += allTestResults[i].test_result.test_score_total;
//       territoryMaxTotal += allTestResults[i].test_result.test_max_total;
//     }
//   }
//   console.log("territoryScoreTotal");
//   console.log(territoryScoreTotal);
//   console.log("territoryMaxTotal");
//   console.log(territoryMaxTotal);
//   return averageTerritoryScores = (territoryScoreTotal / territoryMaxTotal) * 100;
// }

// getTerritoryTestResults(allTestResults, 'Asia', 8);


   // getTerritoryTestResults = function(territoryName){
    //   var territoryId = getTerritoryId(territoryName)
    //   console.log("terr ID:");
    //   console.log(territoryId);
    //   var territoryIdCriteria = {};
    //   territoryIdCriteria.territoryId = territoryId;
    //   return Tests.find( territoryIdCriteria, {fields: {territoryId: 1, 'test_result.test_score_total': 1, 'test_result.test_max_total': 1}}).fetch();
    // };
}


