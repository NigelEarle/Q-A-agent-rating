Template.agentInfo.events({
  "submit #agent-info-form": function (e, t) {
    e.preventDefault();

    var agent = {
      first_name: $(e.target).find('[name=agent-first-name]').val(),
      last_name: $(e.target).find('[name=agent-last-name]').val(),
      email: $(e.target).find('[name=agent-email]').val()
      // regionID goes here
    }

    Agents.insert(agent, function(error){
      if (error){
        console.log ('frown');
      }
      else{
        Router.go('greeting');
      }
    });
  }
});
