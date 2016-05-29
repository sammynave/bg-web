import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return `${faker.name.firstName()} the ${faker.name.jobTitle()}`;
  },
  key() {
    let notes = ['A','Ab', 'A#', 'Am', 'G','Gb', 'G#', 'Gm', 'C', 'C#', 'Cm'];
    return faker.random.arrayElement(notes);
  },
  genre() {
    let genres = ['bluegrass', 'irish', 'oldtime'];
    return faker.random.arrayElement(genres);
  }
});
