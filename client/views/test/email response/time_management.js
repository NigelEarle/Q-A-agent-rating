Template.timeManagement.events({
  "submit form": function(e, t){
    e.preventDefault();

    processForm(this._id, "timeManagement", "emailResponse");

  }
})