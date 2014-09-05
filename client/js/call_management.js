Template.callManagement.events({
  'submit form': function(e,t){
    e.preventDefault();
    processForm(this._id, "callManagement", "phoneInbound");
  }
});