Template.callManagement.events({
  'submit form': function(e,t){
    e.preventDefault();
    processForm(this._id, "callManagement", "phoneInbound");

    var redirectUrl = '/' + this._id + "/end_call";
    Router.go(redirectUrl);
  },

  "click button": function(){
    var previous = '/' + this._id + "/greeting";
    Router.go(previous);
  }
});

Template.callManagement.rendered = function(){
  unclickRadioButtons();
  var questionsArray = findCurrentTestData(this.data, "phoneInbound", "call_management");
  generateTestData(questionsArray, "call_management");
};