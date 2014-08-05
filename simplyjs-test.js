simply.title('Hello World!');

simply.vibe('short');

simply.on('singleClick', function(e) {
  simply.subtitle('You pressed the ' + e.button + ' button!');
});

simply.on('longClick', function(e) {
  simply.subtitle('You held the ' + e.button + ' button!');
});
Pebble.showSimpleNotificationOnPebble('Hello!',
  'Notifications from JavaScript? Welcome to the future!');