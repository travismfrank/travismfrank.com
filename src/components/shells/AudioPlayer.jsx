import classNames from 'classnames';
import React from 'react';
import ReactPlayer from 'react-player';

import './AudioPlayer.scss';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.src = props.src;
  }

  state = {
    playing: false,
    duration: 0,
    played: 0,
    seeking: false,
  }

  ref = player => {
    this.player = player;
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true });
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value));
  }

  handleProgress = state => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  }

  handleDuration = (duration) => {
    this.setState({ duration });
  }

  handleEnded = () => {
    this.setState({ playing: false });
  }

  timeFormat = (seconds) => {
    const date = new Date(seconds * 1000);
    const mm = date.getUTCMinutes();
    const ss = ('0' + date.getUTCSeconds()).slice(-2);
    return `${mm}:${ss}`;
  }

  render() {
    return (
      <div className="tune-player-wrapper">
        <ReactPlayer
          ref={this.ref}
          className="tune-player"
          url={this.src}
          width="100%"
          height="0"
          playing={this.state.playing}
          onProgress={this.handleProgress}
          onDuration={this.handleDuration}
          onEnded={this.handleEnded}
        />
        <div className="tune-controls">
          <button className={classNames('tune-play-pause', {
            paused: this.state.playing,
          })} onClick={this.handlePlayPause}></button>
          <input
            className="tune-seeker"
            type='range' min={0} max={0.999999} step='any'
            value={this.state.played}
            onMouseDown={this.handleSeekMouseDown}
            onChange={this.handleSeekChange}
            onMouseUp={this.handleSeekMouseUp}
          />
          <p className="tune-time">
            <time dateTime={`P${Math.round(this.state.duration * this.state.played)}S`}>
              {this.timeFormat(this.state.duration * this.state.played)}
            </time>
            /
            <time dateTime={`P${Math.round(this.state.duration)}S`}>
              {this.timeFormat(this.state.duration)}
            </time>
          </p>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
