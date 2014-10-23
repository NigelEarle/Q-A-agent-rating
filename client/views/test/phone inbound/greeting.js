Template.greeting.events({
  'submit form': function(e,t){
    e.preventDefault();
    processForm(this._id, "greeting", "phoneInbound");

    var redirectUrl = "/" + this._id + "/call_management";
    Router.go(redirectUrl);
  }
});

Template.greeting.rendered = function(){
  unclickRadioButtons();

  testContents = Tests.find({_id: "mWbGLHxN4Z7jN6E9u"}, {fields: {categories: 1, _id: 0}}).fetch()[0];
  console.log('testContents');
  console.log(testContents);
  for(var key in testContents){
    obj = testContents[key];
    console.log('obj: ', obj);
    for(var prop in obj){
      yup = obj[prop].greeting;
      console.log('yuppers', yup.test);
      test = yup.test
      console.log('test', test);
    }
    // return test
  }

  // loop = function(subCat){
    for(var i = 0; i < test.length; i++){
      console.log('i', i);
      score = test[i].score;
      console.log('score: ', score);
      var questions = $('input[name="greeting' + '[' + i + '][score]"][value=' + score + ']').attr("checked", "true");
      console.log('questions: ', questions);
    }
    return questions;
  // }
  // loop("greeting");
};
