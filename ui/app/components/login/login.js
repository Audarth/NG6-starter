import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';

import messageBoard from '../message-board/message-board';

import loginService from './login.service';
import AuthInterceptor from './loginInterceptor.service';
import LoginFullComponent from './login-full.component';
import LoginComponent from './login.component';

const login = angular
  .module('app.login', [uiBootstrap, uiRouter, messageBoard])
  .component('loginFull', LoginFullComponent)
  .component('login', LoginComponent)
  .factory('loginService', loginService)
  .factory('authInterceptor', AuthInterceptor)
  .config(['$httpProvider',
    function($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
    }
  ])
  .name;

export
default login;
