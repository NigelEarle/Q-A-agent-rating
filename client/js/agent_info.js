Template.agentInfo.events({
  "submit #agent-info-form": function (e, t) {
    e.preventDefault();

    var agent = {
      first_name: $(e.target).find('[name=agent-first-name]').val(),
      last_name: $(e.target).find('[name=agent-last-name]').val(),
      email: $(e.target).find('[name=agent-email]').val()
      // regionID goes here
    };

    console.log("agent object:");
    console.log(agent);

    var test = {};
    test.agentId = "";


    if ( Agents.findOne({email: agent.email}) ){
      console.log("Agent exists");
      // Grabs the existing agent document from Mongo
      var agent = Agents.findOne({email: agent.email});
      // adds agentID key to the test object and assigns
      // the agent's ID to the key
      test.agentId = agent._id;
      // Inserts new test into Test collection, returns ID of test
      // stores ID of test into testId
      var testId = Tests.insert(test);
      // Creates a URL: /hfr4y89f34fy/greeting
      var redirectUrl = '/' + testId + '/greeting';
      // Tells IronRouter to redirect user to /hfr4y89f34fy/greeting
      Router.go(redirectUrl);
    } else {
      // After inserting new agent, gets the ID of the new agent
      var agentId = Agents.insert(agent);
      // Adds agentID to test object
      test.agentId = agentId;
      console.log(test);
      // Inserts new test into Test collection, returns ID of test
      // stores ID of test into testId
      var testId = Tests.insert(test);
      // Creates a URL: /hfr4y89f34fy/greeting
      var redirectUrl = '/' + testId + '/greeting';
      // Tells IronRouter to redirect user to /hfr4y89f34fy/greeting
      Router.go(redirectUrl);
    }

    // Agent.findOne(agent, function(error){
    //   if (){
    //     console.log('already exists!');
    //     Router.go('greeting');
    //   }
    //   else{

    //   }


    // })

  }
});
