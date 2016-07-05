import DetailCtrl from './detail.controller';

import template from './detail.html';

const component = {
  bindings: {
    doc: '<'
  },
  controller: DetailCtrl,
  template: template
};

export
default component;
