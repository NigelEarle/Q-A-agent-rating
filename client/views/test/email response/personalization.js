Template.personalization.events({
  'submit form': function(e,t){
    e.preventDefault();

    processForm(this._id, "personalization", "emailResponse");
    var catTotals = returnCatTotals(findResultObject(this._id, "emailResponse"));
    saveCatTotal(this._id, "emailResponse", "cat_result", catTotals );

    var redirectUrl = "/" + this._id + "/email_response_complete";
    Router.go(redirectUrl);
  },

  "click button": function(){
    var previous = '/' + this._id + "/q_benefits";
    Router.go(previous);
  }
});

Template.personalization.rendered = function(){
  unclickRadioButtons();
  var questionsArray = findCurrentTestData(this.data, "emailResponse", "personalization");
  generateTestData(questionsArray, "personalization");
};