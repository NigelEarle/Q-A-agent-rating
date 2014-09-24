Territories = new Meteor.Collection('territories');

Meteor.methods({

  updateTerritoryResult: function(territoryId, setHash){
    var ter = Territories.update(territoryId, setHash);
    console.log('ter');
    console.log(ter);
    var dateModified = new Date();
    var dateSetHash = { $set: {} };
    dateSetHash.$set.dateModified = dateModified;
    Territories.update(territoryId, dateSetHash);
  }
});