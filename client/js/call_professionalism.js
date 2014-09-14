Template.callProfessionalism.events({
  'submit form': function(e,t){
    e.preventDefault();
    processForm(this._id, "callProfessionalism", "callExperience");
    var catTotals = returnCatTotals(findResultObject(this._id,"categories", "callExperience"));
    saveCatTotal(this._id, "callExperience", "cat_result", catTotals );
    // findObject = function(){
    //   var obj = Tests.find({_id: this._id}).fetch()[0];
    //   console.log(obj);
    //   testArray = [];
    //   for(var key in obj){
    //     cat = obj[key].cat_result;
    //     testArray.push(cat);
    //   }
    //   return testArray;


    // returnTestTotals = function(testArray){
    //   var test_score_total = 0;
    //   var test_max_total = 0;

    //   for(i = 0; i < testArray.length; i++){
    //     testScore = testArray[i].cat_score_total;
    //     testMaxScore = testArray[i].cat_max_total;

    //     test_score_total += testScore;
    //     test_max_total += testMaxScore;

    //   }
    //     test_percent = parseInt(test_score_total/test_max_total * 100);
    //     var testTotal = {};
    //     testTotal.test_score_total = test_score_total;
    //     testTotal.test_max_total = test_max_total;
    //     testTotal.test_percent = test_percent;
    //     // console.log('test score total');
    //     // console.log(testTotal);

    // }

    // saveTestTotal = function(testId, category, testTotal){
    //   var obj = {};
    //   obj[category] = testTotal;
    //   Tests.update(testId, obj);
    // }



    // var redirectUrl = '/' + this._id + '/submit';
    // Router.go(redirectUrl);
  }
});