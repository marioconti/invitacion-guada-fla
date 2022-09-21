import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css"

export const Player = () => (
  <AudioPlayer
  className="audio-player"
    showSkipControls={false}
    showJumpControls={false}
    showDownloadProgress={false}
    showFilledProgress={false}
    hasDefaultKeyBindings={false}
    autoPlayAfterSrcChange={false}
    showFilledVolume={false}
    src="audio/audio.mp3"
  />
);
