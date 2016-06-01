import { test } from 'qunit';
import moduleForAcceptance from 'pick-another-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | songs');

test('visiting /songs', function(assert) {
  let songs = server.createList('song', 3);

  visit('/songs');

  andThen(function() {
    let songRows = find('[data-test-selector="song-row"]');
    let firstSongName = songRows.first().find('box').first().text();

    assert.equal(currentURL(), '/songs');
    assert.equal(songRows.length, 3);
    assert.equal(firstSongName, songs[0].name);
  });
});
