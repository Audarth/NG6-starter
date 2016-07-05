import angular from 'angular';

import RootComponent from './root.component';

const Root = angular
  .module('app.root', ['app.messageBoard'])
  .component('root', RootComponent)
  .name;

export
default Root;
