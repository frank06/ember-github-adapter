import DS from 'ember-data';
const { Model, attr } = DS;

export default class RepositoryModel extends Model {
  @attr() fullName;
  @attr() language;
  @attr('number') stargazersCount;
}