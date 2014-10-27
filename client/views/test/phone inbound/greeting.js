Template.greeting.events({
  'submit form': function(e,t){
    e.preventDefault();
    processForm(this._id, "greeting", "phoneInbound");

    var redirectUrl = "/" + this._id + "/call_management";
    Router.go(redirectUrl);
  }
});

Template.greeting.rendered = function(){
  unclickRadioButtons();
  var questionsArray = findCurrentTestData(this.data, "phoneInbound");
  generateTestData(questionsArray, "greeting");
};
