Agents = new Meteor.Collection ('agents');

Meteor.methods({
  agents: function(postAttributes){
    var user = Meteor.user();

    if (!user)
      throw new Meteor.Error(401, "Please login to list an agent.");

    if (!postAttributes.first_name)
      throw new Meteor.Error(422, "Please fill in agents first name.");

    if (!postAttributes.last_name)
      throw new Meteor.Error(422, "Please fill in agents last name.");

    if (!postAttributes.email)
      throw new Meteor.Error(422, "Please fill in agents email.")
  }
})