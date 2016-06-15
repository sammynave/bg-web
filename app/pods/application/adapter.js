import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from 'pick-another-web/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  host: config.apiEndpoint,
  namespace: 'api'
});
