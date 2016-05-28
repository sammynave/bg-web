import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return `${faker.name.firstName()} the ${faker.name.jobTitle()}`;
  },
  key() {
    let notes = ['A','Ab', 'A#', 'Am', 'G','Gb', 'G#', 'Gm', 'C','Cb', 'C#', 'Cm'];
    return notes[Math.round(Math.random() * (notes.length - 1))];
  },
  genre() {
    let genres = ['bluegrass', 'irish', 'oldtime'];
    return genres[Math.round(Math.random() * (genres.length - 1))];
  }
});
