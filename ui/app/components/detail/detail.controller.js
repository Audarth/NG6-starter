import X2JS from 'x2js';
import vkbeautify from 'vkbeautify';

DetailCtrl.$inject = ['$stateParams'];

function DetailCtrl($stateParams) {
  var ctrl = this;

  var uri = $stateParams.uri;
  var doc = this.doc;

  var contentType = doc.headers('content-type');

  var x2js = new X2JS();
  /* jscs: disable */
  if (contentType.lastIndexOf('application/json', 0) === 0) {
    /*jshint camelcase: false */
    ctrl.xml = vkbeautify.xml(x2js.js2xml(doc.data));
    ctrl.json = doc.data;
    ctrl.type = 'json';
  } else if (contentType.lastIndexOf('application/xml', 0) === 0) {
    ctrl.xml = vkbeautify.xml(doc.data);
    /*jshint camelcase: false */
    ctrl.json = x2js.xml2js(doc.data);
    ctrl.type = 'xml';
    /* jscs: enable */
  } else if (contentType.lastIndexOf('text/plain', 0) === 0) {
    ctrl.xml = doc.data;
    ctrl.json = {
      'Document': doc.data
    };
    ctrl.type = 'text';
  } else if (contentType.lastIndexOf('application', 0) === 0) {
    ctrl.xml = 'Binary object';
    ctrl.json = {
      'Document type': 'Binary object'
    };
    ctrl.type = 'binary';
  } else {
    ctrl.xml = 'Error occured determining document type.';
    ctrl.json = {
      'Error': 'Error occured determining document type.'
    };
  }

  angular.extend(ctrl, {
    doc: doc.data,
    uri: uri
  });
}
export
default DetailCtrl;
