export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
*/
  this.namespace = 'api';
  this.get('/songs');
  this.get('/songs/new');
  this.post('/songs', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).song;

    return schema.songs.create(attrs);
  });
  this.get('/users');

  this.get('/users/:id', ({ users }, request) => {
    return users.find(request.params.id);
  });
}
