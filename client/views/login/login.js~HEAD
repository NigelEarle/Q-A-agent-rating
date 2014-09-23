Template.login.events({
  'submit form': function (e, t) {
    e.preventDefault();

      email = $(e.target).find('#accounts-email').val(),
      password = $(e.target).find('#accounts-password').val()

      Meteor.loginWithPassword(email, password, function(error){
        if (error){
          return console.log('hey');
        }
        else{
          console.log ("ho");
        }
      });


  }
});
