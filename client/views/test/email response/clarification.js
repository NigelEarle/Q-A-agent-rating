Template.clarification.events({
  "submit form": function(e, t){
    e.preventDefault();

    processForm(this._id, "clarification", "emailResponse");

  }
})