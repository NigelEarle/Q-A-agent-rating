Template.agentInfo.events({
  "click #email": function () {
    // console.log("email");
    var agent = getAgentInfo();
    // console.log('email agent: ', agent);
    findOrCreateNewAgent(agent, "time_management");


  },
  "click #phone":function(){
    // console.log("phone");
    var agentIn = getAgentInfo();
    // console.log('phone agent: ', agentIn);
    findOrCreateNewAgent(agentIn, "greeting");
  }


});
