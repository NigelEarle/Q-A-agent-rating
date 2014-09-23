processForm = function(testId, formName, category) {
  var saveResult = function (testId, category, subcategory, sub_cat_hash) {
    objectToInsert = {};
    objectToInsert[category] = {};
    objectToInsert[category][subcategory] = sub_cat_hash;
    insertionTarget = "categories." + category + "." + subcategory;
    var setHash = { $set: {} };
    setHash.$set[insertionTarget] = sub_cat_hash;
    console.log("this is setHash:");
    console.log(setHash);
    Tests.update(testId, setHash);
  }

  var selector = 'form[name=\"'+formName+'\"]';
  console.log("selector:");
  console.log(selector);
  formSubmission = $(selector).serializeObject();
  console.log("form from serializeObject");
  console.log(formSubmission);

  var subcategory = Object.keys(formSubmission)[0];
  console.log('subcategory');
  console.log(subcategory);

  var formObject = formSubmission[subcategory];
  var subCatAverage = calcSubCatResult(formObject);
  var sub_cat_hash = {};
  sub_cat_hash.test = formObject;
  sub_cat_hash.sub_cat_result = subCatAverage;
  console.log("sub_cat_hash:");
  console.log(sub_cat_hash);
  saveResult(testId, category, subcategory, sub_cat_hash);
}

calcSubCatResult = function(result) {
  console.log("This is the result param for calcSubCatResult:");
  console.log(result);
  var totalScore = 0;
  var totalMaxScore = 0;
  for(var i = 0; i < result.length; i++){
    score = parseInt(result[i].score);
    maxScore = parseInt(result[i].maxScore);

    if(!isNaN(score)) {
      totalScore += score;
      totalMaxScore += maxScore;
    }
  }
  var subCatResult = {};
  subCatResult.total_score = totalScore;
  subCatResult.max_score = totalMaxScore;
  return subCatResult;
}




  // var subCatResult = calcSubCatResult(formSubmissionWithIntegers);
  // console.log('subCatResult');
  // console.log(subCatResult)

// var parseIntFormSubmission = function(formSubmissionResult, subcategory){
  // console.log("formSubmissionResult from parseIntFormSubmission");
  // console.log(formSubmissionResult);

  // result object is straight from the form - all strings, no integers
//   var result = formSubmissionResult[subcategory];
//   console.log("result:");
//   console.log(result);
//   takes strings in result and turns them into integers
//   for(var i = 0; i < result.length ; i++){
//     result[i].score = parseInt(result[i].score);
//     result[i].maxScore = parseInt(result[i].maxScore);
//     console.log('score');
//     console.log(result[i].score);
//     console.log(result[i].maxScore);
//   };

//   return result;
// }


