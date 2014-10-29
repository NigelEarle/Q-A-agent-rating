Template.clarification.events({
  "submit form": function(e, t){
    e.preventDefault();
    processForm(this._id, "clarification", "emailResponse");

    var redirectUrl = "/" + this._id + "/q_benefits";
    Router.go(redirectUrl);
  },


  "click button": function(){
    var previous = '/' + this._id + "/time_management";
    Router.go(previous);
  }
});

Template.clarification.rendered = function(){
  unclickRadioButtons();
  var questionsArray = findCurrentTestData(this.data, "emailResponse", "clarification");
  generateTestData(questionsArray, "clarification");
};