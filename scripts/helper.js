class Helper {
  playPauseAndUpdate = song => {
    player.playPause(song);

    if (player.playState === "playing") {
      $("#time-control .total-time").text(
        player.prettyTime(player.currentlyPlaying.duration)
      );
    }
  };
}

const helper = new Helper();
