import ReactPlayer from 'react-player';
import styled from 'styled-components';
import VideoItems from '../config/VideoItems'


const VideoGrid = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 1.75rem;
`

function VideoGallery() {
    return (
        <VideoGrid>
            {VideoItems.map(video => (
                <div key={video.url}>
                    <ReactPlayer url={video.url} controls width="100%" />
                    <p>{video.title}</p>

                </div>
            ))}
        </VideoGrid>
    );
}

export default VideoGallery