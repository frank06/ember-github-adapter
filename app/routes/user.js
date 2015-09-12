import Ember from 'ember';

export default Ember.Route.extend({
  
  actions: {
    star(repo) {
      repo.save()
    }
  },
  
  model() {
    return this.store.findRecord('user', 'frank06');
  }
  
});