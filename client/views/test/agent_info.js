Template.agentInfo.events({
  "click #email": function () {
    console.log("email");

    var agent = getAgentInfo();
    console.log('email agent: ', agent);
    findOrCreateNewAgent(agent);
    var redirectUrl = '/' + testId + '/greeting';
    Router.go(redirectUrl);



  },
  "click #phone":function(){
    console.log("phone");

    var agent = getAgentInfo();
    console.log('phone agent: ', agent);
    findOrCreateNewAgent(agent);
    var redirectUrl = '/' + testId + '/timeManagement';
    Router.go(redirectUrl);
  }


});
