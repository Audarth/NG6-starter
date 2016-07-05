import angular from 'angular';

import CreateComponent from './create.component';
import User from '../user/user';

const module = angular.module('app.create', ['ml.common', User, 'ngToast'])
  .component('create', CreateComponent)
  .name;

export
default module;
