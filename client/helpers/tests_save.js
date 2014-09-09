processForm = function(testId, formName, category) {
  var saveResult = function (testId, category, subcategory, hash) {
    objectToInsert = {};
    objectToInsert[category] = {};
    objectToInsert[category][subcategory] = hash;
    insertionTarget = category + "." + subcategory;
    var setHash = { $set: {} };
    setHash.$set[insertionTarget] = hash;
    Tests.update(testId, setHash);
  }

  var selector = 'form[name=\"'+formName+'\"]';
  var form = $(selector).serializeObject();
  var subcategory = Object.keys(form)[0];
  var result = form[subcategory];
  var hash = {};
  var average = subCatResult(result);
  hash = {};
  hash.test = result;
  hash.sub_cat_result = average;
  saveResult(testId, category, subcategory, hash);
}


subCatResult = function(result) {
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
  var scoresTotal = {};
  scoresTotal.total_score = totalScore;
  scoresTotal.max_score = totalMaxScore;
  return scoresTotal;
}


