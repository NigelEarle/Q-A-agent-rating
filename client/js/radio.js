unclickRadioButtons = function(){
  var allRadios = document.getElementsByClassName('score');
  var booRadio;
  var x = 0;
  for(x = 0; x < allRadios.length; x++){
    allRadios[x].onclick = function(){
        if(booRadio == this){
          this.checked = false;
          booRadio = null;
        }else{
        booRadio = this;
      }
    };
  }
}

findCurrentTestData = function(thisData, category, subcategory){
  var data = thisData;
  console.log('data', data);
  var nestedData = data.categories[category][subcategory];
  console.log('nestedTestDatas: ', nestedData);
  nestedTestData = nestedData.test
  console.log('nestedTestData: ', nestedTestData);
  return nestedTestData;
}

generateTestData = function(questionsArray, subCat){
  for(var i = 0; i < questionsArray.length; i++){
    score = questionsArray[i].score;
    var questions = $('input[name="' + subCat + '[' + i + '][score]"][value=' + score + ']').attr("checked", "true");
  }
  return questions;
}