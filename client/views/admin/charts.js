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
      categories.push(year);
    };
    var xAxis = {
      title: {
        text: interval
      },
      categories: categories
    };
  };
  console.log('xAxis');
  console.log(xAxis);
  return xAxis;
};

var createYAxisLabels = function(seriesData){
  var yAxis = {
    min: 0,
    title: {
      text: ''
    }
  };
  if (seriesData === "territory_average_percent"){
    yAxis.title.text = "Territory Ratings Percentage";
  };
  return yAxis;
};


var calculateAverage = function(arrayOfNumbers){
  var sum = 0;
  for(var i = 0; i < arrayOfNumbers.length; i++){
    sum += arrayOfNumbers[i];
  }
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

var calculateMonthsBetweenDates = function(startDate, endDate){

  var startingMonth = getMonth(startDate);
  var startingYear = getYear(startDate);
  var endingMonth = getMonth(endDate);
  var endingYear = getYear(endDate);
  var monthsBetweenYears;

  if(startingMonth === 0){ //Have to take into account
    startingMonth++;
    endingMonth++;
  };

  monthsBetweenDates = (endingYear-startingYear) * 12 + (endingMonth-(startingMonth-1));

  return monthsBetweenDates;

};

var getTerritoryId = function(territoryName){
  return Territories.find({name: territoryName}, {fields: {_id: 1}}).fetch()[0]._id;
};

var getTerritoryTestResultsBetweenDates = function(category, territoryName, startDate, endDate){
  var startDate = convertToDateObject(startDate);
  var endDate = convertToDateObject(endDate);
  var territoryId = getTerritoryId(territoryName);
  var testResults = [];
  var category = category;
  var dateCreated = {}
  if (category === "All"){
    console.log("1.)start and end date");
    console.log(startDate);
    console.log(endDate);
    category = {"test_result.test_score_total": 1, "test_result.test_max_total": 1, dateCreated: 1};
    console.log("2.)territory Id");
    console.log(territoryId);
    var queryResults = Tests.find({territoryId: territoryId, dateCreated: {$gt: new Date(startDate), $lt: new Date(endDate)} }, {fields: category}).fetch();
    console.log("3.)query results - not in loop");
    console.log("4.)query results: ", queryResults);
    for (var i = 0; i < queryResults.length; i++){

      var singleTestResult = {};
      console.log("5.)in loop query result - " + i, queryResults[i]);
      console.log(queryResults[i]);
      console.log("6.)singleTestResult before changing properties in loop" + i, singleTestResult);
      singleTestResult.dateCreated = queryResults[i].dateCreated;
      // console.log("in loop singleTestResult dateCreated - " + i);
      // console.log(singleTestResult.dateCreated);
      singleTestResult.score = (queryResults[i].test_result.test_score_total / queryResults[i].test_result.test_max_total) * 100;
      // console.log("in loop testResults before push - " + i);
      // console.log(testResults);
      // console.log("singleTestResult to push - " + i);
      // console.log(singleTestResult);
      console.log("7.)singleTestResult after changing properties in loop" + i, singleTestResult);
      testResults.push(singleTestResult);
      console.log("in loop testResults - " + i);
      console.log(testResults);
    };
    // console.log("test results");
    console.log("END))testResults after loop: ", testResults);
    return testResults;
  };

};

calculateTestAverages = function(testResults, startDate, endDate, interval){

  var startingMonth = getMonth(startDate);
  var startingYear = getYear(startDate);
  var endingMonth = getMonth(endDate);
  var endingYear = getYear(endDate);
  var testAverages;
  var arrayOfNumbers = [];
  var arrayOfAverages = [];
  var intermediaryArray = [];
  var monthToCheck;
  var yearToCheck;
  var testMonth;
  var testYear;

  if (interval === "Month"){
    var checklistArray = [];
    // Creates the checklist Array
    for( var month = startingMonth, year = startingYear; month <= endingMonth || year < endingYear; month++){
      // console.log("month is: " + month);
      // console.log("year is: " + year);
      if(month === 12){
        month = -1;
        year++;
      } else {
        checklistArray.push( [month, year] );
      };
    };

    // Creates the intermediary 2-D array
    var maxArrayIndex = calculateMonthsBetweenDates(startDate, endDate) - 1;

    for (var i = 0; i <= maxArrayIndex; i++){
      intermediaryArray[i] = [];  //Initialize the empty array here based on the size
    };

    for (var checklistPosition = 0, i = 0; checklistPosition < checklistArray.length; checklistPosition++, i++){
      monthToCheck = checklistArray[checklistPosition][0]; // 6
      yearToCheck = checklistArray[checklistPosition][1]; // 2014
      for (var testNumber = 0; testNumber < testResults.length; testNumber++){
        testMonth = getMonth(testResults[testNumber].dateCreated);
        testYear = getYear(testResults[testNumber].dateCreated);
        if (testMonth === monthToCheck && testYear === yearToCheck){
          intermediaryArray[i].push(testResults[testNumber].score)
        };
      };
    };

    // Creates the array of test averages for each month

    return calculateArrayAverages(intermediaryArray);

  };

};

createSeries = function(seriesNames, startDate, endDate, interval){

  var series = [];
  var startDate = convertToDateObject(startDate);
  var endDate = convertToDateObject(endDate);
  var territoryResults = {};
  var testAverages;

  for(var i = 0; i < seriesNames.length; i++){


    territoryResults = getTerritoryTestResultsBetweenDates("All", seriesNames[i], startDate, endDate);
    console.log("territory results");
    console.log(territoryResults);
    testAverages = calculateTestAverages(territoryResults, startDate, endDate, interval);
    console.log("testAverages");
    console.log(testAverages);

    series[i] = {
      name: seriesNames[i],
      // data needs to be an array of percentages based on the interval
      data: testAverages
    };
    console.log("series:");
    console.log(series);
  };


  return series;

};


// var getTerritoryTestResults = function(allTerritoryScores, territoryName, testMonthNum){
//   var territoryId = getTerritoryId(territoryName);
//   var territoryScoreTotal = 0;
//   var territoryMaxTotal = 0;
//   for (var i = 0; i < allTerritoryScores.length; i++){
//     if(allTerritoryScores[i].territoryId === territoryId && allTerritoryScores[i].dateCreated.getMonth() === testMonthNum){

//       territoryScoreTotal += allTerritoryScores[i].test_result.test_score_total;
//       territoryMaxTotal += allTerritoryScores[i].test_result.test_max_total;
//     }
//   }
//   console.log("territoryScoreTotal");
//   console.log(territoryScoreTotal);
//   console.log("territoryMaxTotal");
//   console.log(territoryMaxTotal);
//   return averageTerritoryScores = (territoryScoreTotal / territoryMaxTotal) * 100;
// }


createChartObject = function(seriesNames, seriesData, startDate, endDate, interval){
// createChartObject(["Asia", "North America", "Africa"], "territory_average_percent", "2014-01-01", "2015-01-01", "Month");
// seriesNames: ["Asia", "North America", "Africa"]
// seriesData: "territory_average_percent"
// startDate: "2012-01-01"
// endDate: "2014-12-31"
// interval: "Month"

  var chartObject = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Territory Average Comparison'
    },
    subtitle: {
        text: 'Ratings Based On Percentage '
    },
    xAxis: createXAxisLabels(startDate, endDate, interval),
    yAxis: createYAxisLabels(seriesData),
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
    series: createSeries(seriesNames, startDate, endDate, interval)
  }

  return chartObject;
};

// seriesNames is an array: ex. ['Asia', 'North America', 'Europe', 'Africa']
// sample function call: createSeries(['Asia'], "", "01/01/2014", "01/01/2016", "Month");




// var start = new Date(2010, 3, 1);
// var end = new Date(2015, 4, 1);
// Tests.find({territoryId: "YL8sRmkTtwM9dFX5k", dateCreated: {$gte: start, $lt: end} }).fetch()


// createChartObject(['Asia', 'North America', 'Europe', 'Africa'], "territory_average_percent", "01/01/2014", "12/31/2014", "Month");
