Template.callManagement.events({
  'submit form': function(e,t){
    e.preventDefault();
    processForm(this._id, "callManagement", "phoneInbound");

    var redirectUrl = '/' + this._id + "/end_call";
    Router.go(redirectUrl);
  }
});