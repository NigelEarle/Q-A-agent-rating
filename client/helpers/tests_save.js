processForm = function(testId, formName, category) {
  var saveResult = function (testId, category, subcategory, hash) {
      // resultObj = {};
      // resultObj[category] = {};
      // resultObj[category + "." + subcategory] = result ;
      // console.log(resultObj);
      // Tests.update(testId, { $set: resultObj });

    // Tests.update(testId, {$set: {"phoneInbound.greeting": hash} } );
    objectToInsert = {};
    objectToInsert[category] = {};
    objectToInsert[category][subcategory] = hash;
    console.log(objectToInsert);
    insertionTarget = category + "." + subcategory;

    var setHash = { $set: {} };

    // setHash.$set.phoneInbound.greeting = hash;
    setHash.$set[insertionTarget] = hash;
    console.log(setHash);
    Tests.update(testId, setHash);
  }

  var selector = 'form[name=\"'+formName+'\"]';
  var form = $(selector).serializeObject();
  // greeting
  var subcategory = Object.keys(form)[0];
  // greeting object
  var result = form[subcategory];
  var hash = {};
  var average = subCatAverage(result);
  hash = {};
  hash.test = result;
  hash.test_average = average;
  console.log(hash);
  // hash[subcategory] = {};
  // hash[subcategory]["test"] = result;
  // hash[subcategory]["test_average"] = average;
  // hash will be greeting object with scores
  // category will be "phoneInbound"
  // subcategory will be "greeting"
  saveResult(testId, category, subcategory, hash);
}


subCatAverage = function(result) {
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
  return totalScore / totalMaxScore * 100
}


