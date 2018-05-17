const Promise = require('bluebird');
const apiCall = require('./apiCall');

const updateEmailTemplates = function(progress, client, wantedTemplates) {

  return Promise.map(wantedTemplates, function(toUpdate) {
    progress.log('Updating email template: ' + JSON.stringify({ name: toUpdate.name }));
    return apiCall(client, client.emailTemplates.update, toUpdate);
  });

};

modulle.exports = {
  updateEmailTemplates: updateEmailTemplates
};
