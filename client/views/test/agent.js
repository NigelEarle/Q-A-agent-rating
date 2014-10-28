getAgentInfo = function() {
  var turf = $("#agent-territory").val()
  var territoryId = Territories.find({name: turf}, {fields: {name: 0}}).fetch()[0];
  var agent = {};
  agent.first_name = $("#agent-info-form").find('[name=agent-first-name]').val()
  agent.last_name = $("#agent-info-form").find('[name=agent-last-name]').val()
  agent.email = $("#agent-info-form").find('[name=agent-email]').val()
  agent.territoryId = territoryId._id
  console.log("agent object:");
  console.log(agent);
  return agent;
}

findOrCreateNewAgent = function(agent){
  var test = {};
  if ( Agents.findOne({email: agent.email}) ){
    console.log("Agent exists");
    var agent = Agents.findOne({email: agent.email, territoryId: agent.territoryId});
    test.territoryId = agent.territoryId;
    test.agentId = agent._id;

    Meteor.call('insertTest', test, function(error, testId){
      if (error){
        console.log(error);
      } else {
        console.log(testId);

      }
    });

  } else {

    console.log("territory: ", agent.territoryId);
    agentTerritoryId = agent.territoryId
    test.territoryId = agentTerritoryId;
    console.log('test.territoryId: ', test.territoryId);

    var agentId = Agents.insert(agent);
    test.agentId = agentId;
    console.log('test.agentId: ', test.agentId);

    Meteor.call('insertTest', test, function(error, testId){
      if (error){
        console.log("error: ", error);
      } else {
        console.log(testId);

      }
    });
  }
}