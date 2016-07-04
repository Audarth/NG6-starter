import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';

import loginService from './login.service';

const login = angular
  .module('app.login', [uiBootstrap])
  .factory('loginService', loginService)
  .name;

export
default login;
//angular.module('app.login', ['app.messageBoard', 'ml.common', 'ui.bootstrap', 'ui.router']);
