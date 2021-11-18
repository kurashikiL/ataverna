import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import StarRating from "../../components/starrating/Star";
import firebase from '../../Firebase.js';
import { Component, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";


function Profile(){

    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState();
    const [nick,setNick] = useState();

    let uid=""; 

    useLayoutEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                console.log("usuário logado");
                uid = user.uid;

                firebase.firestore().collection("user").doc(user.uid)
                .get().
                then((snapshot) =>{
                    setNick(snapshot.data().nick);
                })

                firebase.storage().ref("ProfilePic").child(uid).getDownloadURL()
                    .then( async (url) => {
                        setProfilePic(url);
                    });
            }else{
                console.log("nenhum usuário logado, redirecionando...")
                navigate("/login");
            }
        });
    },[]);

    return(
        <>
            <Topbar/>
            <div className="profileContainer">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={profilePic} alt=""/>
                            <img className="profilePicImg" src={profilePic} alt=""/>     
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{nick}</h4>
                            <span className="profileInfoDesc">Mestre de DnD</span>
                        </div>
                    </div>
                
                    <div className="profileRightBottom">
                        <StarRating/>
                        <div className="profileTags">
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    );

}

export default Profile;
