import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: payload.login,
        type: type.modelName,
        attributes: {
          name: payload.name,
          publicRepos: payload.public_repos
        },
        relationships: {
          repos: {
            links: {
              related: payload.repos_url
            }
          }
        }
      }
    }
  }
  
});