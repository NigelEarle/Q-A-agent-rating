Template.callProfessionalism.events({
  'submit form': function(e,t){
    e.preventDefault();
    processForm(this._id, "callProfessionalism", "callExperience");

    var catTotals = returnCatTotals(findResultObject(this._id, "callExperience"));
    saveCatTotal(this._id, "callExperience", "cat_result", catTotals );

    var testTotal = returnTestTotals(findObject(this._id));
    saveTestTotal(this._id, testTotal);

    var territoryResult = returnTerritoryResults(findTestsResultsObjects(this.territoryId));
    saveTerritoryTotal(this.territoryId, territoryResult);

  }
});