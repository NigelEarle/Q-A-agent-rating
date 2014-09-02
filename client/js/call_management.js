Template.callManagement.events({
  'submit form': function(e,t){
    e.preventDefault();

    var callManagement = $('form[name=callManagement]').serializeObject();

    console.log(callManagement);

    test = {};
    test.phoneInbound = callManagement;
    // test.phoneInbound.callManagement = {};

    console.log(test);


    Tests.update({_id: this._id}, {$set: {"phoneInbound.callManagement": callManagement}});

    // Tests.insert(callManagement, function(error){
    //   if (error){
    //     console.log ("hey");
    //   }
    //   else {
    //     console.log('hell yea');
    //     Router.go('endCall');
    //   }
    // });
  }
})