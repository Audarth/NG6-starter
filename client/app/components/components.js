import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Login from './login/login';
import MessageBoard from './message-board/message-board';
import Root from './root/root';
import User from './user/user';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Login,
  MessageBoard,
  Root,
  User
])

.name;

export
default componentModule;
