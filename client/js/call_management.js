// Template.callManagement.events({
//   'submit form': function(e,t){
//     e.preventDefault();

//     var callManagement = $('form[name=callManagement]').serializeObject();

//     Tests.insert(callManagement, function(error){
//       if (error){
//         console.log ("hey");
//       }
//       else {
//         console.log('hell yea');
//         Router.go('endCall');
//       }
//     });
//   }
// })