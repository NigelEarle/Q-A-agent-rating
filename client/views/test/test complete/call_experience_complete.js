Template.callExperienceComplete.helpers({
  call_professionalism: function(){
    callProfessionalismResults = this.categories.callExperience.call_professionalism.sub_cat_result;
    // console.log('greeting results: ', greetingResults);
    var callProfessionalismScore = callProfessionalismResults.total_score;
    var callProfessionalismMax = callProfessionalismResults.max_score;
    var percent = Math.floor(callProfessionalismScore / callProfessionalismMax * 100);
    // console.log('percent: ', percent);
    return percent
  },

  greeting: function(){
    greetingResults = this.categories.phoneInbound.greeting.sub_cat_result;
    // console.log('greeting results: ', greetingResults);
    var greetingScore = greetingResults.total_score;
    var greetingMax = greetingResults.max_score;
    var percent = Math.floor(greetingScore / greetingMax * 100);
    // console.log('percent: ', percent);
    return percent
  },

  call_management: function(){
    callManagementResults = this.categories.phoneInbound.call_management.sub_cat_result;
    // console.log('call management results: ', callManagementResults);
    var callManagementScore = callManagementResults.total_score;
    var callManagementMax = callManagementResults.max_score;
    var percent = Math.floor(callManagementScore / callManagementMax * 100);
    // console.log('percent: ', percent);
    return percent
  },

  end_call: function() {
    endCallResults = this.categories.phoneInbound.end_call.sub_cat_result;
    // console.log('greeting results: ', endCallResults);
    var endCallScore = endCallResults.total_score;
    var endCallMax = endCallResults.max_score;
    var percent = Math.floor(endCallScore / endCallMax * 100);
    // console.log('percent: ', percent);
    return percent
  },

  phone_inbound: function() {
    phoneInboundPercent = this.categories.phoneInbound.cat_result.cat_percent;
    // console.log('cat results: ', phoneInboundPercent);
    percent = Math.floor(phoneInboundPercent);

    return percent
  },

  test_results: function(){
    console.log('test results:',this.test_result.test_percent);
    testPercent = Math.floor(this.test_result.test_percent);
    return testPercent;

  }
});

Template.callExperienceComplete.events({
  "click #logout": function() {

    Meteor.logout();
    Router.go('login');

  }
})