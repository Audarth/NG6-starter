import LoginCtrl from './login.controller';

import template from './login-component.html';

const component = {
  bindings: {
    showCancel: '=',
    mode: '@',
    callback: '&'
  },
  controller: LoginCtrl,
  template: template
};

export
default component;
