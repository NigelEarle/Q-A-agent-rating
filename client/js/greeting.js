Template.greeting.events({
  'submit form': function(e,t){
    e.preventDefault();

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