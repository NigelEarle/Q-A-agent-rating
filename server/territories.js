Meteor.publish('territories', function(){
  return Territories.find();
})