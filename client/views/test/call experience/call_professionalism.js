Template.callProfessionalism.events({
  'submit form': function(e,t){
    e.preventDefault();
    processForm(this._id, "callProfessionalism", "callExperience");

    var catTotals = returnCatTotals(findResultObject(this._id, "callExperience"));
    saveCatTotal(this._id, "callExperience", "cat_result", catTotals );

    var testTotal = returnTestTotals(findObject(this._id));
    saveTestTotal(this._id, testTotal);

    // var territoryTotal = (findTestsResults(this.territoryId));
    // saveTerritoryTotal(this.territoryId, territoryTotal);

    // Router.go('testComplete');
  },

  "click button": function(){
    var previous = "/" + this._id + "/end_call";
    Router.go(previous);
  }
});

Template.callProfessionalism.rendered = function(){
  unclickRadioButtons();
  var questionsArray = findCurrentTestData(this.data, "callExperience", "call_professionalism");
  generateTestData(questionsArray, "call_professionalism");
};