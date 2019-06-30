import DS from 'ember-data';

export default class ApplicationAdapter extends DS.RESTAdapter {
  host = 'https://api.github.com'
}