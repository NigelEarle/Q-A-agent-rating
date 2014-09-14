processForm = function(testId, formName, category) {

  var saveResult = function (testId, category, subcategory, hash) {
    objectToInsert = {};
    objectToInsert[category] = {};
    objectToInsert[category][subcategory] = hash;
    insertionTarget = "categories." + category + "." + subcategory;
    var setHash = { $set: {} };
    setHash.$set[insertionTarget] = hash;
    console.log("this is setHash:");
    console.log(setHash);
    Tests.update(testId, setHash);
  }

  var selector = 'form[name=\"'+formName+'\"]';
  console.log("selector:");
  console.log(selector);
  var form = $(selector).serializeObject();
  console.log("form from serializeObject");
  console.log(form);

  var subcategory = Object.keys(form)[0];
  console.log('subcategory');
  console.log(subcategory);
  // result object is straight from form - all strings, no integers
  var result = form[subcategory];
  console.log("result:");
  console.log(result);
  // takes strings in result and turns them into integers
  for(var i = 0; i < result.length ; i++){
    result[i].score = parseInt(result[i].score);
    result[i].maxScore = parseInt(result[i].maxScore);
    console.log('score');
    console.log(result[i].score);
    console.log(result[i].maxScore);
  }
  // result should now have integers
  var average = subCatResult(result);
  console.log('average');
  console.log(average)
  var hash = {};
  hash.test = result;
  hash.sub_cat_result = average;
  console.log("hash:");
  console.log(hash);
  saveResult(testId, category, subcategory, hash);
}


subCatResult = function(result) {
  console.log("This is the result param for subCatResult:");
  console.log(result);
  var totalScore = 0;
  var totalMaxScore = 0;
  for(var i = 0; i < result.length; i++){
    score = result[i].score;
    maxScore = result[i].maxScore;

    if(!isNaN(score)) {
      totalScore += score;
      totalMaxScore += maxScore;
    }
  }
  var scoresTotal = {};
  scoresTotal.total_score = totalScore;
  scoresTotal.max_score = totalMaxScore;
  return scoresTotal;
}

