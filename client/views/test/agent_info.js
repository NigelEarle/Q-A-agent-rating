Template.agentInfo.events({
  "submit #agent-info-form": function (e, t) {
    e.preventDefault();
    var turf = $("#agent-territory").val()
    var territoryId = Territories.find({name: turf}, {fields: {name: 0}}).fetch()[0];

    var agent = {};
    agent.first_name = $(e.target).find('[name=agent-first-name]').val()
    agent.last_name = $(e.target).find('[name=agent-last-name]').val()
    agent.email = $(e.target).find('[name=agent-email]').val()
    agent.territoryId = territoryId._id


    console.log("agent object:");
    console.log(agent);

    var test = {};


    if ( Agents.findOne({email: agent.email}) ){

      console.log("Agent exists");
      var agent = Agents.findOne({email: agent.email, territoryId: agent.territoryId});
      test.territoryId = agent.territoryId;
      test.agentId = agent._id;
      var testId = Tests.insert(test);
      console.log(testId);
      var redirectUrl = '/' + testId + '/greeting';
      Router.go(redirectUrl);

    } else {

      console.log(territoryId);
      test.territoryId = territoryId._id;

      var agentId = Agents.insert(agent);
      test.agentId = agentId;

      var testId = Tests.insert(test);
      var redirectUrl = '/' + testId + '/greeting';
      Router.go(redirectUrl);
    }
  }
});
