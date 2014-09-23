Meteor.publish('agents', function(){
  return Agents.find();
})