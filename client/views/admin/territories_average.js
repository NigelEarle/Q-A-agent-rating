var formSubmission;

Template.territoriesAverage.rendered = function(){

  $('form').submit(function(e){
    e.preventDefault();
    formSubmission = $('form[name="graphOptionsForm"]').serializeObject();
    console.log(formSubmission);
    var chartObject = createChartObject(
      formSubmission.territories,
      "territory_average_percent",
      formSubmission.startDate,
      formSubmission.endDate,
      formSubmission.interval
    );

    console.log(chartObject);

    $('#container').highcharts(chartObject);

  });
  
};


