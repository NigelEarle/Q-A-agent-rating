Template.header.events({
  "click #logout": function(e,t){
    e.preventDefault();

    Meteor.logout();
    console.log('logged out');
    Router.go('login');
  }
});