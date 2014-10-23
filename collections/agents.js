Agents = new Meteor.Collection ('agents');

Agents.allow({
  insert: function(userId){
    return true
  }
});

