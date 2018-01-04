'use strict';
module.exports = Franz => {
  const getMessages = function getMessages() {
    const mailSel = document.querySelector('.mmi_mail em.mm_counter');
    let count = parseInt(mailSel.innerHTML, 10);
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
