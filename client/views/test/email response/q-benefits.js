Template.qBenefits.events({
  "submit form": function(e, t){
    e.preventDefault();

    processForm(this._id, "qBenefits", "emailResponse");

  }
})