
    import Sound from 'react-sound';
    import Sfär from '../public/music/01\Sfär.m4a';
    
    const Playsound = (
        handleSongLoading,
        handleSongPlaying,
        handleSongFinishedPlaying
    ) => {
        
    
    return ( 
        <div>
            <Sound>
            url: {TheOtherSide}
            playStatus: {Sound.status.PLAYING}
            playingFromPosition={300}
            onloading={handleSongLoading}
            onPlaying={handleSongPlaying}
            inFinishedPlaying={handleSongFinishedPlaying}
            </Sound> 
        </div>
     );

    }
export default PlaySound;