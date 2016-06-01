import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'hbox',
  classNameBindings: ['styles.song-row'],
  attributeBindings: ['testId:data-test-selector']
});
