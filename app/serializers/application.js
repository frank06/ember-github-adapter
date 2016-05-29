import Ember from 'ember';
import JSONSerializer from 'ember-data/serializers/json';

export default JSONSerializer.extend({
  
  keyForAttribute(key) {
    return Ember.String.decamelize(key);
  }
  
});
