

createChartObject = function(seriesNames, seriesData, startDate, endDate, interval){

// seriesNames: ["Asia", "North America", "Africa"]
// seriesData: "territory_average_percent"
// startDate: "2012-01-01"
// endDate: "2014-12-31"
// interval: "Monthly"






};


var createXAxisLabels = function(startDate, endDate, interval){
  var categories = [];
  if (interval === "Month"){
    var startingMonth = startDate.getMonth() + 1;
    var endingMonth = endDate.getMonth() + 1;
    for( var i = startingMonth; startingMonth <= endingMonth; startingMonth++){
      categories.push(startingMonth);
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

var createYAxisLabels = function(seriesData){
  var yAxis = {
    min: 0,
    title: {
      text: ''
    }
  };
  if (seriesData === "territory_average_percent"){
    yAxis.title.text = "Percentage";
  };
  return yAxis;
};

var getTerritoryId = function(territoryName){
  return Territories.find({name: territoryName}, {fields: {_id: 1}}).fetch()[0]._id;
};

var getTerritoryTestResults = function(allTerritoryScores, territoryName, testMonthNum){
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

// seriesNames is an array: ex. ['Asia', 'North America', 'Europe', 'Africa']
// sample function call: createSeries(['Asia'], "", "01/01/2014", "01/01/2016", "Month");

createSeries = function(seriesNames, seriesData, startDate, endDate, interval){
  var series = [];
  var start = new Date(startDate);
  var end = new Date(endDate);

  for(var i = 0; i < seriesNames.length; i++){
    var territoryId = getTerritoryId( seriesNames[i] );

    // seriesResults are the test documents for the territoryId within the date range
    var seriesResults = Tests.find({territoryId: territoryId, dateCreated: {$gte: start, $lt: end} }).fetch();
    console.log(seriesResults);
    series[i] = {
      name: seriesNames[i],
      // data needs to be an array of percentages based on the interval
      data: []
    };
    console.log("series:");
    console.log(series);
  };

};


var start = new Date(2010, 3, 1);
var end = new Date(2015, 4, 1);
// Tests.find({territoryId: "YL8sRmkTtwM9dFX5k", dateCreated: {$gte: start, $lt: end} }).fetch()


createChartObject(['Asia', 'North America', 'Europe', 'Africa'], "territory_average_percent", "01/01/2014", "12/31/2014", "Month");
