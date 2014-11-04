Template.emailExperienceComplete.helpers({
  time_management: function(){
    timeManagementResults = this.categories.emailResponse.time_management.sub_cat_result;
    // console.log('greeting results: ', timeManagementResults);
    var timeManagementScore = timeManagementResults.total_score;
    var timeManagementMax = timeManagementResults.max_score;
    var percent = Math.floor(timeManagementScore / timeManagementMax * 100);
    // console.log('percent: ', percent);
    percent = percent || 0;
    return percent
  },

  clarification: function(){
    clarificationResults = this.categories.emailResponse.clarification.sub_cat_result;
    // console.log('call management results: ', clarificationResults);
    var clarificationScore = clarificationResults.total_score;
    var clarificationMax = clarificationResults.max_score;
    var percent = Math.floor(clarificationScore / clarificationMax * 100);
    // console.log('percent: ', percent);
    percent = percent || 0;
    return percent
  },

  q_benefits: function() {
    qBenefitsResults = this.categories.emailResponse.q_benefits.sub_cat_result;
    // console.log('greeting results: ', qBenefitsResults);
    var qBenefitsScore = qBenefitsResults.total_score;
    var qBenefitsMax = qBenefitsResults.max_score;
    var percent = Math.floor(qBenefitsScore / qBenefitsMax * 100);
    // console.log('percent: ', percent);
    percent = percent || 0;
    return percent
  },

  personalization: function() {
    personalizationResults = this.categories.emailResponse.personalization.sub_cat_result;
    // console.log('greeting results: ', personalizationResults);
    var personalizationScore = personalizationResults.total_score;
    var personalizationMax = personalizationResults.max_score;
    var percent = Math.floor(personalizationScore / personalizationMax * 100);
    // console.log('percent: ', percent);
    percent = percent || 0;
    return percent
  },

  email_response: function() {
    emailResponsePercent = this.categories.emailResponse.cat_result.cat_percent;
    // console.log('cat results: ', emailResponsePercent);
    percent = Math.floor(emailResponsePercent);
    // console.log(percent);
    percent = percent || 0;
    return percent
  },

  email_experience: function() {
    emailExperienceResult = this.categories.emailExperience.cat_result.cat_percent;
    console.log('cat results: ', emailExperienceResult);
    percent = Math.floor(emailExperienceResult);
    console.log(percent);
    percent = percent || 0;
    return percent
  },

  test_results: function(){
    console.log('test results:',this.test_result.test_percent);
    testPercent = Math.floor(this.test_result.test_percent);
    testPercent = testPercent || 0;
    return testPercent;
  }
});

Template.emailExperienceComplete.events({
  "click #logout": function(e){
    e.preventDefault();

    Meteor.logout();
    console.log('logged out');
    Router.go('login');
  }
})
