import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  publicRepos: DS.attr('number'),
  repos: DS.hasMany('repo', { async: true })
});