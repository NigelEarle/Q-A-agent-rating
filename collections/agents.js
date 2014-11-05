Agents = new Meteor.Collection ('agents');

Agents.allow({
  insert: function(userId){
    return true
  }
});

Meteor.methods({
  insertAgent: function(agentAttributes){

    checkEmail = function(address){
      address = address.replace(/(^\s*)|(\s*$)/g, "");
      var reg = /([\w._-])+@([\w_-])+(\.([\w_-])+){1,2}/;
      var matcharr = reg.exec(address);
      if(matcharr != null){
          if(matcharr[0].length == address.length){
              return true;
          }
          return false;
      }
      return false;
    }

    if (!agentAttributes.first_name && !agentAttributes.last_name)
      throw new Meteor.Error(422, "Please fill in the first and last name of the agent");

    if (!agentAttributes.first_name && !agentAttributes.email)
      throw new Meteor.Error(422, "Please fill in the first name and email of the agent");

    if (!agentAttributes.first_name)
      throw new Meteor.Error(422, "Please fill in the first name of the agent");

    if (!agentAttributes.last_name && !agentAttributes.email)
      throw new Meteor.Error(422, "Please fill in the last name and email of the agent");

    if (!agentAttributes.last_name)
      throw new Meteor.Error(422, "Please fill in the last name of the agent");

    if (!agentAttributes.email)
      throw new Meteor.Error(422, "Please fill in the email of the agent");

    if (checkEmail(agentAttributes.email) === false)
      throw new Meteor.Error(400, "Incorrect email format. Please check the address again and type again.");

    var agentId = Agents.insert(agentAttributes);
    // var test = {};
    // var agentTerritoryId = agentAttributes.territoryId;
    // test.territoryId = agentTerritoryId;
    // test.agentId = agentId;
    // test.dateCreated = new Date();
    // var testId = Tests.insert(test);
    return agentId
  }



})

