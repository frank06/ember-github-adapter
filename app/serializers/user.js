import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({  
  
  primaryKey: 'login',
  
  normalizeFindRecordResponse(store, type, payload) {
    payload.links = {
      repositories: payload.repos_url
    }
    return this._super(...arguments);
  }
  
});