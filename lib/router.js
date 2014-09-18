Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function(){
    return [
      Meteor.subscribe('tests'),
      Meteor.subscribe('agents'),
      Meteor.subscribe('territories')
    ];
  }
});



Router.onBeforeAction("loading");

Router.map(function(){

  this.route('login', {path: '/'});

  this.route('registration', {path: '/registration'});

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

  this.route('endCall', {
    path: '/:_testId/end_call',
    data: function(){
      return Tests.findOne(this.params._testId)
    }
  });


  this.route('callProfessionalism', {
    path: '/:_testId/call_professionalism',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('timeManagement', {
    path: '/time_management',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('clarification', {
    path: '/clarification',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('qBenefits', {
    path: '/q_benefits',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('personalization', {
    path: '/personalization',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('emailProfessionalism', {
    path: '/email_professionalism',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('regionSummary', {path: '/region_summary'});


});

