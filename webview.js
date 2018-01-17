'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = function getMessages() {
    const mailSel = document.querySelector('#l_msg span.inl_bl.left_count');
    let count = parseInt(mailSel.innerHTML, 10);
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
  
  // inject franz.css stylesheet
  Franz.injectCSS(_path2.default.join(__dirname, 'service.css'));
};
