Template.territoriesAverage.rendered = function(){

<<<<<<< HEAD
=======


>>>>>>> c0b4d54c32815f6b743248303d9779a9d7d20e94
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
<<<<<<< HEAD

  Tracker.autorun(function(){
    allTestResults = Tests.find({ }, {fields: {dateCreated: 1, territoryId: 1, 'test_result.test_score_total': 1, 'test_result.test_max_total': 1}}).fetch();
    console.log(allTestResults);

    getTerritoryId = function (territoryName){
      return Territories.find({name: territoryName}, {fields: {_id: 1}}).fetch()[0]._id;
    };


    getTerritoryTestResults = function(allTerritoryScores, territoryName, testMonthNum){
      var territoryId = getTerritoryId(territoryName);
      var territoryScoreTotal = 0;
      var territoryMaxTotal = 0;
      for (var i = 0; i < allTerritoryScores.length; i++){
        if(allTerritoryScores[i].territoryId === territoryId && allTerritoryScores[i].dateCreated.getMonth() === testMonthNum){

          territoryScoreTotal += allTerritoryScores[i].test_result.test_score_total;
          territoryMaxTotal += allTerritoryScores[i].test_result.test_max_total;
        }
      }
      console.log("territoryScoreTotal");
      console.log(territoryScoreTotal);
      console.log("territoryMaxTotal");
      console.log(territoryMaxTotal);
      return averageTerritoryScores = (territoryScoreTotal / territoryMaxTotal) * 100;
    }
  });

   // getTerritoryTestResults = function(territoryName){
    //   var territoryId = getTerritoryId(territoryName)
    //   console.log("terr ID:");
    //   console.log(territoryId);
    //   var territoryIdCriteria = {};
    //   territoryIdCriteria.territoryId = territoryId;
    //   return Tests.find( territoryIdCriteria, {fields: {territoryId: 1, 'test_result.test_score_total': 1, 'test_result.test_max_total': 1}}).fetch();
    // };
}


