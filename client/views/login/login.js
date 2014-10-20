Template.login.events({
  'submit form': function (e, t) {
    e.preventDefault();

    username = $(e.target).find('#accounts-username').val(),
    password = $(e.target).find('#accounts-password').val()

    Meteor.loginWithPassword(username, password, function(error){
      if(error){
        console.log('error');
      } else {
        if (Meteor.user().profile.role === "admin"){
          console.log("admin login");
          Router.go("adminChoice");
        } else if (Meteor.user().profile.role === "tester"){
          console.log("tester login");
          Router.go("agentInfo");
        }
      };

    });


  }
});
