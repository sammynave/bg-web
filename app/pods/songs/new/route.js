import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('song');
  },
  actions: {
    save() {
      this.get('controller.model').save().then((response) => {
        console.log(response);
        console.log('TODO: reset model and allow adding another song');
      }).catch((error) => {
        console.log(error);
        console.log('TODO: rollback/handle error');
      });
    }
  }
});
