import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from 'bg-web/config/environment';

export default JSONAPIAdapter.extend({
  host: config.apiEndpoint,
  namespace: 'api'
});
