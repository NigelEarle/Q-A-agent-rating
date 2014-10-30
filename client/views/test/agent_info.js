Template.agentInfo.events({
  "click #email": function () {
    var agent = getAgentInfo();
    findOrCreateNewAgent(agent, "time_management");


  },
  "click #phone":function(){
    var agentIn = getAgentInfo();
    findOrCreateNewAgent(agentIn, "greeting");
  }


});
