findTestsResultsObjects = function(territoryId){
  var objects = Tests.find({territoryId: territoryId}).fetch();

  // console.log(objects);

  testsTotalArray = [];
  for(var key in objects){
    nest = objects[key].test_result;
    console.log(nest);
    testsTotalArray.push(nest);
  }
return testsTotalArray;
}

returnTerritoryResults = function(testsTotalArray){
  var territoryScore = 0;
  var territoryMax = 0;
  for(i = 0; i < testsTotalArray.length; i++){
    score = testsTotalArray[i].test_score_total;
    max = testsTotalArray[i].test_max_total;

    territoryScore += score;
    territoryMax += max;
  }
  var territory_average_percent = parseInt(territoryScore/territoryMax * 100);
  var territoryResult = {};
  territoryResult.territory_score_total = territoryScore;
  territoryResult.terrritory_max_total = territoryMax;
  territoryResult.territory_average_percent = territory_average_percent;
  return territoryResult;
}

saveTerritoryTotal = function(territoryId, territoryResult){
  var territoryObject = {};
  territoryObject.territory_result = territoryResult;
  insertionTarget = "territory_result";
  var setHash = { $set: {} };
  setHash.$set[insertionTarget] = territoryResult;
  // console.log('sethash');
  // console.log(setHash);

  Territories.update(territoryId, setHash);
}