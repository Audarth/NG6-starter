import searchResultsTemplate from './search-results.html';

SearchCtrl.$inject = ['$scope', '$location', 'userService', 'MLSearchFactory'];

// inherit from MLSearchController
var superCtrl = MLSearchController.prototype;
SearchCtrl.prototype = Object.create(superCtrl);

function SearchCtrl($scope, $location, userService, searchFactory) {
  var ctrl = this;

  superCtrl.constructor.call(ctrl, $scope, $location, searchFactory.newContext());

  ctrl.init();

  //retrieve and insert searchResults template
  ctrl.searchResultsTemplate = searchResultsTemplate;

  ctrl.setSnippet = function(type) {
    ctrl.mlSearch.setSnippet(type);
    ctrl.search();
  };

  $scope.$watch(userService.currentUser, function(newValue) {
    ctrl.currentUser = newValue;
  });
}

export
default SearchCtrl;
