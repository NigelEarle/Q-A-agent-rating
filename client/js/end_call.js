Template.endCall.events({
  'submit form': function(e,t){
    e.preventDefault();
    processForm(this._id, "endCall", "phoneInbound");
    var catTotals = returnCatTotals(findResultObject(this._id,"phoneInbound"));
    saveCatTotal(this._id, "phoneInbound", "cat_result", catTotals );


    var redirectUrl = '/' + this._id + '/call_professionalism';
    Router.go(redirectUrl);
  }
});



