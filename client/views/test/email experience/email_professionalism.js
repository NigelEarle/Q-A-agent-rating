Template.emailProfessionalism.events({
  "submit form": function(e, t){
    e.preventDefault();

    processForm(this._id, "emailProfessionalism", "emailExperience");

    var catTotals = returnCatTotals(findResultObject(this._id, "emailExperience"));
    saveCatTotal(this._id, "emailExperience", "cat_result", catTotals );

    var testTotal = returnTestTotals(findObject(this._id));
    saveTestTotal(this._id, testTotal);
  },

  "click button": function(){
    var previous = '/' + this._id + "/personalization";
    Router.go(previous);
  }

});

Template.emailProfessionalism.rendered = function(){
  unclickRadioButtons();
  var questionsArray = findCurrentTestData(this.data, "emailResponse", "email_professionalism");
  generateTestData(questionsArray, "email_professionalism");
};