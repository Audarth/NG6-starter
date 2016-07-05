import angular from 'angular';
import Login from './login/login';
import MessageBoard from './message-board/message-board';
import Root from './root/root';
import User from './user/user';
import Search from './search/search';

let componentModule = angular.module('app.components', [
  Login,
  MessageBoard,
  Root,
  User,
  Search
])

.name;

export
default componentModule;
