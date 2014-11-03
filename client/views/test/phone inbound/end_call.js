Template.endCall.events({
  'submit form': function(e,t){
    e.preventDefault();
    processForm(this._id, "endCall", "phoneInbound");
    var catTotals = returnCatTotals(findResultObject(this._id, "phoneInbound"));
    saveCatTotal(this._id, "phoneInbound", "cat_result", catTotals );

    var redirectUrl = '/' + this._id + '/phone_inbound_complete';
    Router.go(redirectUrl);
  },

  "click button": function(){
    var previous = "/" + this._id + "/call_management";
    Router.go(previous);
  }
});

Template.endCall.rendered = function(){
  unclickRadioButtons();
  var questionsArray = findCurrentTestData(this.data, "phoneInbound", "end_call");
  generateTestData(questionsArray, "end_call");
};



