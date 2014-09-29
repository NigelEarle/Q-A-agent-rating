
findTestsResults = function(territoryId){
  var objects = Tests.find({territoryId: territoryId}).fetch();
  console.log(objects);
  testArray = [];
  for(var key in objects){
    nest = objects[key].test_result;
    console.log(nest);
    testArray.push(nest);
    console.log(testArray);
  }
  return testArray;
}

returnTerritoryResults = function(testArray){
  var territoryScore = 0;
  var territoryMax = 0;
  for(i = 0; i < testArray.length; i++){
    score = testArray[i].test_score_total;
    max = testArray[i].test_max_total;

    territoryScore += score;
    territoryMax += max;
  }
  var territory_average_percent = parseInt(territoryScore/territoryMax * 100);
  var territoryResult = {};
  territoryResult.territory_score_total = territoryScore;
  territoryResult.terrritory_max_total = territoryMax;
  territoryResult.territory_average_percent = territory_average_percent;
  territoryResult.dateModified = new Date();
  console.log('territory object')
  console.log(territoryResult);
  return territoryResult;
}


saveTerritoryTotal = function(territoryId, territoryResult){
  var territoryObject = [];
  territoryObject.push(territoryResult);
  console.log('territory object: ');
  console.log(territoryObject);
  insertionTarget = 'territory_monthly_average';
  var setHash = { $set: {} };
  setHash.$set[insertionTarget] = territoryObject ;
  console.log('set hash: ');
  console.log(setHash);
  Meteor.call('updateTerritoryResult', territoryId, setHash);
}
