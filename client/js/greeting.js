Template.greeting.events({
  'submit form': function(e,t){
    e.preventDefault();

<<<<<<< HEAD
<<<<<<< Updated upstream
// };
=======
    greeting = $('form[name=greeting]').serializeObject();

    console.log("This is the greeting object");
    console.log(greeting);

    // if (greeting.q1.isSelected === "on"){
    //     greeting.q1.score = 2;
    // } else if (greeting.q1.isSelected === "off"){
    //     greeting.q1.score = 1;
    // } else {
    //     greeting.q1.score = "";
    // }

    var test = {};
    test.phoneInbound = greeting;

    console.log("This is the test object");
    console.log(test);

    Tests.update({ _id: this._id }, { $set: test });

    console.log("ID of test:");
    console.log(this._id);
    var redirectUrl = '/' + this._id + '/call_management';
    console.log(redirectUrl);

    Router.go(redirectUrl);

  }

});

Template.greeting.rendered = function(){

    console.log(this.data);
    testContents = this.data;
    if (!!testContents.phoneInbound){
        q1Score = testContents.phoneInbound.greeting.q1.score;
        $('input[name="q1[score]"][value=' + q1Score + ']').attr("checked", "true");
    }


};
>>>>>>> Stashed changes
=======
    var greeting = $('form[name=greeting]').serializeObject();

    Tests.insert(greeting, function(error){
      if (error){
        console.log ("hey");
      }
      else {
        Router.go('callManagement');
      }
    });
  }
})
>>>>>>> master
