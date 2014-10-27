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

findCurrentTestData = function(thisData, category){
  var data = thisData;
  console.log('data: ', data);
  var nestedData = data.categories[category];
  console.log('nestedData: ', nestedData);
  for(var key in nestedData){
    var objectArray = nestedData[key].test;
    console.log('test: ', objectArray);
  }
  return objectArray;
}

generateTestData = function(questionsArray, subCat){
  console.log('questionsArray: ', questionsArray.length);
  for(var i = 0; i < questionsArray.length; i++){
    console.log('i', i);
    score = questionsArray[i].score;
    console.log('score: ', score);
    var questions = $('input[name="subCat' + '[' + i + '][score]"][value=' + score + ']').attr("checked", "true");
    console.log('questions: ', questions);
  }
  return questions;
}