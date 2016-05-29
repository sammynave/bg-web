import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  genre: DS.attr(),
  key: DS.attr(),

  users: DS.hasMany('user')
});
