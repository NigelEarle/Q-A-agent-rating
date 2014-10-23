findObject = function(testId){
  var projection = {};
  projection.fields = {};
  projection.fields.categories = 1;
  projection.fields._id = 0;
  console.log(projection);



  var obj = Tests.find(testId, projection).fetch()[0];
  console.log(obj);
  testArray = [];
  for(var key in obj){
    cat = obj[key];
    console.log('first loop:');
    console.log(cat);
    for(var prop in cat){
      catResults = cat[prop].cat_result;
      testArray.push(catResults);
      console.log('test array');
      console.log(testArray);
    }
  }
  return testArray;

}

returnTestTotals = function(testArray){
  var test_score_total = 0;
  var test_max_total = 0;

  for(i = 0; i < testArray.length; i++){
    testScore = testArray[i].cat_score_total;
    testMaxScore = testArray[i].cat_max_total;

    test_score_total += testScore;
    test_max_total += testMaxScore;

  }
  test_percent = parseInt(test_score_total/test_max_total * 100);
  var testTotal = {};
  testTotal.test_score_total = test_score_total;
  testTotal.test_max_total = test_max_total;
  testTotal.test_percent = test_percent;
  console.log('test score total');
  console.log(testTotal);

  return testTotal;

}

saveTestTotal = function(testId, testTotal){
  var obj = {};
  obj.testResult = testTotal;
  console.log('save object');
  console.log(obj);
  insertionTarget = "test_result";
  var setHash = { $set: {} };
  setHash.$set[insertionTarget] = testTotal;
  console.log("this is setHash:");
  console.log(setHash);
  Meteor.call('updateTest', testId, setHash)
}








