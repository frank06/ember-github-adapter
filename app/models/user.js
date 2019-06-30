import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class UserModel extends Model {
  @attr() name;
  @attr('number') publicRepos;
  @hasMany() repositories;
}