getAgentInfo = function() {
  var turf = $("#agent-territory").val()
  var territoryId = Territories.find({name: turf}, {fields: {name: 0}}).fetch()[0];
  var agent = {};
  agent.first_name = $("#agent-info-form").find('[name=agent-first-name]').val()
  agent.last_name = $("#agent-info-form").find('[name=agent-last-name]').val()
  agent.email = $("#agent-info-form").find('[name=agent-email]').val()
  agent.territoryId = territoryId._id
  return agent;
}

findOrCreateNewAgent = function(agent, category){
  var test = {};
  if ( Agents.findOne({email: agent.email}) ){
    // console.log("Agent exists");
    var agent = Agents.findOne({email: agent.email});
    test.territoryId = agent.territoryId;
    test.agentId = agent._id;
    test.dateCreated = new Date();
    console.log('testing:: ', test);
    var testId = Tests.insert(test);
    var redirectUrl = '/' + testId + '/' + category + '';
    Router.go(redirectUrl);

  } else {

    Meteor.call('insertAgent', agent, function(error, testId){
      if(error){
        throwError(error.reason);
      } else{
        console.log('callback recieved:', testId);
        var redirectUrl = '/' + testId + '/' + category + '';
        Router.go(redirectUrl);
      }
    });
  }
}