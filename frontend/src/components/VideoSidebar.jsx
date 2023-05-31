import React from 'react'
import './video.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';


export default function VideoSidebar({likes,shares,messages}) {
    const [liked,setLiked]=useState(false)
    return (
        <div className="videosidebar">
            <div className="videosidebar__button">
                {liked ? (
                    <FavoriteBorderIcon fontSize='large' />
                ):(
                    <FavoriteBorderIcon fontSize='large' onClick={(e)=>setLiked(true)}/>
                )}
                
                <p>{liked ? likes+1 :likes}</p>
            </div>

            <div className="videosidebar__button">
                <MessageIcon />
                <p>{messages}</p>
            </div>

            <div className="videosidebar__button">
                <SendIcon />
                <p>{shares}</p>
            </div>
        </div>
    )
}
