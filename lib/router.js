Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function(){
    return [
      Meteor.subscribe('tests')
    ];
  }
});



Router.onBeforeAction("loading");

Router.map(function(){

  this.route('login', {path: '/'});

  this.route('registration', {path: '/registration'});

  this.route('testNew', {path: '/test_new'});

  this.route('agentInfo', {path: '/agent_info'});

  this.route('greeting', {
    // ex. /hyf3t23y39fr78/greeting
    path: '/:_testId/greeting',
    data: function() {
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('callManagement', {
    path: '/:_testId/call_management',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('endCall', {path: '/end_call'});

  this.route('callProfessionalism', {path: '/call_professionalism'});

  this.route('timeManagement', {path: '/time_management'});

  this.route('clarification', {path: '/clarification'});

  this.route('qBenefits', {path: '/q_benefits'});

  this.route('personalization', {path: '/personalization'});

  this.route('emailProfessionalism', {path: '/email_professionalism'});

  this.route('whitelist', {path: '/whitelist'});

  this.route('submitTest', {path: '/submit'});

  this.route('agentSummary', {path: '/agent_summary'});

  this.route('regionSummary', {path: '/region_summary'});


});

