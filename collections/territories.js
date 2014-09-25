Territories = new Meteor.Collection('territories');

Meteor.methods({

  updateTerritoryResult: function(territoryId, setHash){
    Territories.update(territoryId, setHash);

  }
});