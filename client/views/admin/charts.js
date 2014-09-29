

createChartObject = function(seriesNames, seriesData, startDate, endDate, interval){

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

var createSeries = function(seriesNames, seriesData, startDate, endDate, interval){
  var series = [];
  for (var i = 0; i < seriesNames.length; i++){
    series[i] = {
      name: seriesNames[1],
      data: []
    };

  }
};





createChartObject(['Asia', 'North America', 'Europe', 'Africa'], "territory_average_percent", "01/01/2014", "12/31/2014", "Month"); 



var checkAnagram = function(arrayToCheck){
  console.log("arrayToCheck");
  console.log(arrayToCheck);
  var arrayToCheckCopy = arrayToCheck;
  arrayToCheck.reverse();
  console.log("arrayToCheck");
  console.log(arrayToCheck);
  console.log("arrayToCheckCopy");
  console.log(arrayToCheckCopy);
}