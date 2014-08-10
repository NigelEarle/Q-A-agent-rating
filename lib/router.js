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

  this.route('professionalism', {path: '/professionalism'});

  this.route('timeManagement', {path: '/time_management'});



});

