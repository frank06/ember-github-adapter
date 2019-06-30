import ApplicationSerializer from './application';

export default class UserSerializer extends ApplicationSerializer {

  normalizeFindRecordResponse(store, type, payload) {
    payload.links = {
      repositories: payload.repos_url
    }
    return super.normalizeFindRecordResponse(...arguments);
  }

}