import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  headers: {
    Authorization: "token _PUT YOURS HERE_"
  },
  
  updateRecord(store, type, snapshot) {
    const url = `${this.host}/user/starred/${snapshot.attr('fullName')}`;
    return this.ajax(url, "PUT", {});
  }
  
});