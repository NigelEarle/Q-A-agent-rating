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

  this.route('login', {
    path: '/'
  });

  this.route('agentInfo', {
    path: '/agent_info'
  });

  this.route('adminChoice', {
    path: '/admin_choice'
  });

  this.route('territoriesAverage', {
    path: '/territories_average'
  });

  this.route('sendInvite', {
    path: '/send_invite'
  });

  this.route('testComplete', {
    path: '/test_complete'
  });

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
    path: '/time_management'
  });

  this.route('clarification', {
    path: '/clarification'
  });

  this.route('qBenefits', {
    path: '/q_benefits'
  });

  this.route('personalization', {
    path: '/personalization'
  });

  this.route('emailProfessionalism', {
    path: '/email_professionalism'
  });

  var requireAdminLogin = function() {
    if (!Meteor.user().profile.role === "admin") {
      console.log('access denied: ');
      this.stop();
    }
  }


  Router.onBeforeAction(requireAdminLogin, {only: 'adminChoice'});
  Router.onBeforeAction(requireAdminLogin, {only: 'territoriesAverage'});
  Router.onBeforeAction(requireAdminLogin, {only: 'sendInvite'})
});

