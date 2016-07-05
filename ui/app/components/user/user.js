import angular from 'angular';
import ngSanitize from 'angular-sanitize';

import UserService from './user.service';
import ProfileComponent from './profile.component';
import MlUserComponent from './mlUser.component';

const user = angular.module('app.user', ['ml.common', 'ngToast', ngSanitize])
  .factory('userService', UserService)
  .component('profile', ProfileComponent)
  .component('mlUser', MlUserComponent)
  .name;

export
default user;
