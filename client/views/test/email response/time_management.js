Template.timeManagement.events({
  "submit form": function(e, t){
    e.preventDefault();
    processForm(this._id, "timeManagement", "emailResponse");

    var redirectUrl = "/" + this._id + "/clarification";
    Router.go(redirectUrl);
  }
});

Template.timeManagement.rendered = function(){
  unclickRadioButtons();
  var questionsArray = findCurrentTestData(this.data, "emailResponse", "time_management");
  generateTestData(questionsArray, "time_management");
};