import "./share.css";
import {Photo,AttachFile,Videocam} from "@material-ui/icons";

import firebase from '../../Firebase';
import React, {Component, useLayoutEffect, useState} from 'react';

function Share() {

    let uid="";

    const [profilePic, setProfilePic] = useState();

    useLayoutEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                uid = user.uid;
                firebase.storage().ref("ProfilePic").child(uid).getDownloadURL()
                .then( async (url) => {
                    setProfilePic(url);
                });
                    
                
            }
        });
    },[]);


    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className = "shareProfileImg" src={profilePic} alt=""/>
                    <input placeholder="Conte sua história" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Photo htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Foto ou Video</span>
                        </div>
                        <div className="shareOption">
                            <AttachFile htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Arquivo</span>
                        </div>
                        <div className="shareOption">
                            <Videocam htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Stream</span>
                        </div>
                    </div>
                    <button className="shareButton">Publicar</button>
                </div>
            </div>
        </div>
    )
}

export default Share;