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
    path: '/agent_info',
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

// add test Id's

  this.route('phoneInboundComplete', {
    path: '/:_testId/phone_inbound_complete',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('callExperienceComplete', {
    path:':_testId/call_experience_complete',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('emailResponseComplete', {
    path: '/email_response_complete',
    // data: function(){
    //   return Tests.findOne(this.params._testId);
    // }
  });

  this.route('emailExperienceComplete', {
    path: '/email_experience_complete',
    // data: function(){
    //   return Tests.findOne(this.params._testId);
    // }
  })

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
    path: ':_testId/time_management',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('clarification', {
    path: ':_testId/clarification',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('qBenefits', {
    path: ':_testId/q_benefits',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('personalization', {
    path: ':_testId/personalization',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });

  this.route('emailProfessionalism', {
    path: ':_testId/email_professionalism',
    data: function(){
      return Tests.findOne(this.params._testId);
    }
  });


  var requireLogin = function() {
    if (!Meteor.user()) {
      this.render('loginRequired');
      this.stop();
    }
  }

  // var requireTesterLogin = function(){
  //   if(!Meteor.user().profile.role === "tester"){
  //     this.render('loginRequired');
  //     this.stop();
  //   }
  // }



  // Router.onBeforeAction(requireTesterLogin, {only: 'agentInfo'});
  Router.onBeforeAction(requireLogin,  {only: 'agentInfo'});
  Router.onBeforeAction(requireLogin,  {only: 'adminChoice'});
  Router.onBeforeAction(requireLogin, {only: 'territoriesAverage'});
  Router.onBeforeAction(requireLogin, {only: 'sendInvite'});

});

