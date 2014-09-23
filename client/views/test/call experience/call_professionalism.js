Template.callProfessionalism.events({
  'submit form': function(e,t){
    e.preventDefault();
    // processForm(this._id, "callProfessionalism", "callExperience");
    // var catTotals = returnCatTotals(findResultObject(this._id, "callExperience"));
    // saveCatTotal(this._id, "callExperience", "cat_result", catTotals );
    // var testTotal = returnTestTotals(findObject(this._id));
    // saveTestTotal(this._id, testTotal);


    var turfId = Territories.find({_id: 'fDSk99t42ie8KwcBG'}).fetch()[0];
    // console.log(turfId);

    var objects = Tests.find({territoryId: turfId._id}).fetch();
    // console.log(objects);

    array = [];
    for(var key in objects){
      nest = objects[key].test_result;
      // console.log(nest);
      array.push(nest);
    }

    var terScore = 0;
    var terMax = 0;
    for(i = 0; i < array.length; i++){
      score = array[i].test_score_total;
      max = array[i].test_max_total;

      terScore += score;
      terMax += max;
    }
    var territory_average_percent = parseInt(terScore/terMax * 100);
    var territory_result = {};
    territory_result.territory_score_total = terScore;
    territory_result.terrritory_max_total = terMax;
    territory_result.territory_average_percent = territory_average_percent;
    console.log('territory object')
    console.log(territory_result);
  }
});