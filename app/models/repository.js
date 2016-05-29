import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  fullName: attr(),
  language: attr(),
  stargazersCount: attr('number')
});
