import angular from 'angular';

//run dependencies that haven't been designed for npm/imports globally as if they were in a script tag and load if necessary
import 'script!ml-search-ng/dist/ml-search-ng-tpls';
import 'script!ml-common-ng/dist/ml-common-ng';
import 'script!ml-search-ng/dist/ml-search-ng';

//run globally since not in a module
import 'script!ng-toast';

//import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import routes from './route/routes';

import 'normalize.css';
import '../styles/main.less';

angular.module('app', [
  routes,
  Common,
  Components,
  'ml.search.tpls'
])
  .component('app', AppComponent);
