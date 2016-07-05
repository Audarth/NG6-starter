import angular from 'angular';

import SearchComponent from './search.component';

import User from '../user/user';
import Snippet from './snippet';

const Search = angular
  .module('app.search', ['ml.search', User, Snippet])
  .component('search', SearchComponent)
  .name;

export
default Search;
