var skipper  = require("./skipper");
var lyrics = ["Pink", "Fluffy", "Unicorns", "Dancing", "On", "Rainbows"];

for (var i = 0; i < lyrics.length; i++) {
  console.log(skipper.skip(lyrics[i], i));
}
