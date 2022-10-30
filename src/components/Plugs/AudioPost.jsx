import React from "react";

const AudioPost = ({ oggUrl, mp3Url }) => {
    return (
        <div className='audioPost'>
            <audio controls className="w-full">
                <source
                    src={oggUrl}
                    type="audio/ogg"
                />
                <source
                    src={mp3Url}
                    type="audio/mpeg"
                />
                Elemento audio
            </audio>
        </div>
    );
};

export default AudioPost;
