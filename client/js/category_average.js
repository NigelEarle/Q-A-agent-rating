findResultObject = function(testId, category){

  projection = {};
  projection.fields = {};
  projection.fields[category] = 1;
  projection.fields._id = 0;
  console.log("this is the projection");
  console.log(projection);

  obj = Tests.find(testId, projection).fetch()[0];
  console.log(obj);
  arrayOfResults = [];
  for(var key in obj){
    nest = obj[key];
    for(var key in nest){
      subResult = (nest[key].sub_cat_result);
      arrayOfResults.push(subResult);
      console.log(arrayOfResults);
    }
  }
  return arrayOfResults;
};

returnCatTotals = function(arrayOfResults){
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
};


saveCatTotal = function(testId, category, subcategory, catTotals){
  var obj = {};
  obj[category] = {};
  obj[category][subcategory] = catTotals;
  insertObj = category + '.' + subcategory;
  var setObj = { $set: {} };
  setObj.$set[insertObj] = catTotals;
  Tests.update(testId, setObj);
};



