Template.greeting.events({
  "submit form": function(e, t){
    e.preventDefault();
    processForm(this._id, "greeting", "phoneInbound");

    var redirectUrl = "/" + this._id + "/call_management";
    Router.go(redirectUrl);

  }
});

// Template.greeting.rendered = function(){

//     console.log(this.data);
//     testContents = this.data;
//     if (!!testContents.phoneInbound){
//         q1Score = testContents.phoneInbound.greeting.q1.score;
//         $('input[name="q1[score]"][value=' + q1Score + ']').attr("checked", "true");
//     }
// };
