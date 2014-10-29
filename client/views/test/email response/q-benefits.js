Template.qBenefits.events({
  "submit form": function(e, t){
    e.preventDefault();
    processForm(this._id, "qBenefits", "emailResponse");

    var redirectUrl = "/" + this._id + "/personalization";
    Router.go(redirectUrl);
  },

  "click button": function(){
    var previous = '/' + this._id + "/clarification";
    Router.go(previous);
  }
});

Template.qBenefits.rendered = function(){
  unclickRadioButtons();
  var questionsArray = findCurrentTestData(this.data, "emailResponse", "q_benefits");
  generateTestData(questionsArray, "q_benefits");
};