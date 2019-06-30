import DS from 'ember-data';
import { decamelize } from '@ember/string';

export default class ApplicationSerializer extends DS.JSONSerializer {
  keyForAttribute(key) {
    return decamelize(key);
  }
}