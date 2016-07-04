import angular from 'angular';

import UserService from './user.service';

const user = angular.module('app.user', [ /*'ml.common', */ 'app.login', /*'ngToast'*/ ])
  .factory('userService', UserService)
  .name;

export
default user;
