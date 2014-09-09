Template.endCall.events({
  'submit form': function(e,t){
    e.preventDefault();
    processForm(this._id, "endCall", "phoneInbound");

    findResultObject = function(){
      obj = Tests.find( {_id: "Ei92rmpFcmQ8DkLbB"}, {fields: {"phoneInbound": 1, "_id": 0 }}).fetch()[0];
      arrayOfResults = [];
      for(var key in obj){
        nest = obj[key];
        for(var key in nest){
          subResult = (nest[key].sub_cat_result);
          arrayOfResults.push(subResult);
        }
      }
      return arrayOfResults;
    };

    catResult = function(arrayOfResults){
      var cat_score_total = 0;
      var cat_max_total = 0;

      for(i = 0; i < arrayOfResults.length; i++){
        scoreTotal = arrayOfResults[i].total_score;
        maxTotal = arrayOfResults[i].max_score;

        cat_score_total += scoreTotal;
        cat_max_total += maxTotal;

      }
      cat_percent = cat_score_total/cat_max_total * 100;
      cat_total = {};
      cat_total.cat_score_total = cat_score_total;
      cat_total.cat_max_total = cat_max_total;
      cat_total.cat_percent = cat_percent;
      return cat_total;
    }

    cat_result = catResult( findResultObject() );

    saveCatTotal = function(){
      var obj = {};
      obj['phoneInbound'] = {};
      obj['phoneInbound']['cat_results'] = cat_result;
      insertObj = 'phoneInbound' + '.' + 'cat_results';
      var setObj = { $set: {} };
      setObj.$set[insertObj] = cat_result;
      Tests.update('Ei92rmpFcmQ8DkLbB', setObj);
    }
    saveCatTotal('phoneInbound');
  }
});


    // objectToInsert = {};
    // objectToInsert[category] = {};
    // objectToInsert[category][subcategory] = hash;
    // insertionTarget = category + "." + subcategory;
    // var setHash = { $set: {} };
    // setHash.$set[insertionTarget] = hash;
    // Tests.update(testId, setHash);



