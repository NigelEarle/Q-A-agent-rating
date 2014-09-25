Tests = new Meteor.Collection ('tests');

Meteor.methods({

	insertTest: function(testAttributes){
		testAttributes.dateCreated = new Date();
		var testId = Tests.insert(testAttributes);
		return testId;
	},

	updateTest: function(testId, setHash){
		Tests.update(testId, setHash);
		var dateModifed = new Date();
		var dateSetHash = { $set: {} };
		dateSetHash.$set.dateModified = dateModifed;
		Tests.update(testId, dateSetHash);
	},


});