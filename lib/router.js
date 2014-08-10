Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  this.route('login', {path: '/'});

  this.route('registration', {path: '/registration'});

  this.route('testNew', {path: '/test_new'});

  this.route('agentInfo', {path: '/agent_info'});

  this.route('greeting', {path: '/greeting'});

  this.route('callManagement', {path: '/call_management'});

  this.route('endCall', {path: '/end_call'});

  this.route('callProfessionalism', {path: '/call_professionalism'});

  this.route('timeManagement', {path: '/time_management'});

  this.route('clarification', {path: '/clarification'});

  this.route('qBenefits', {path: '/q_benefits'});

  this.route('personalization', {path: '/personalization'});

  this.route('emailProfessionalism', {path: '/email_professionalism'});




});

