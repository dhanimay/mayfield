import React, { Component } from 'react'

export default class WebRTCPlayground extends Component {
  constructor (props) {
    super(props)

    this.state = {
      video: null
    }
  }

  componentDidMount () {
    const successCallback = (stream) => {
      let video = this.state.video
      const videoTracks = stream.getVideoTracks();
      console.log(`Using video device: ${videoTracks[0].label}`)
      video.srcObject = stream
      let newState = Object.assign({}, this.state, {video})
      this.setState(newState)
    }

    function errorCallback (err) {
      console.log(err)
    }

    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(successCallback).catch(errorCallback)
  }

  render () {
    const getVideoReference = (component) => {
      if (this.state.video) return
      let newState = Object.assign({}, this.state, {
        video: component
      })
      this.setState(newState)
    }

    return (
      <div className='webrtc-view'>
        <video autoPlay={true} ref={getVideoReference}></video>
        Hello Web RTC!!!!
      </div>
    )
  }
}