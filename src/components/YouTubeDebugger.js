// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{

    constructor(){
        super()
        this.state = {
            errors: [], 
            user: null, 
            settings: {
                bitrate: 8, 
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitrateClick = () => {
        console.log(this.state.settings.bitrate)
        this.state.settings.bitrate = 12
        this.setState({
            settings:{
                ...this.state.settings, 
                bitrate: this.state.settings.bitrate
            }
        })
        console.log(this.state.settings.bitrate) 
    }

    resolutionClick = () => {
        console.log(this.state.settings.video.resolution)
        this.state.settings.video.resolution = '720p'
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {
                    resolution: this.state.settings.video.resolution
                }
            }
        })
        console.log(this.state.settings.video.resolution)
    }

    render(){
        
        return(
            <div className='buttonDiv'>
                <button className='bitrate' onClick={this.bitrateClick}>
                    Bitrate Button
                </button>
                <button className='resolution' onClick={this.resolutionClick}>
                    Resolution
                </button>
            </div>
        )
    }

}

export default YouTubeDebugger