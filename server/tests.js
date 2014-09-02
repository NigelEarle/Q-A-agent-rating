Meteor.publish('tests', function(){
  return Tests.find();
});