export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  server.createList('song', 12);

  let songIds1 = [1, 2, 3, 4, 5, 6]
  let songIds2 = [4, 5, 6, 7, 8]
  let songIds3 = [4, 6, 7, 10, 11, 12]

  server.create('user', { songIds: songIds1 })
  server.create('user', { songIds: songIds2 })
  server.create('user', { songIds: songIds3 })
}
