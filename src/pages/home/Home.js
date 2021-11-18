import "./home.css";
import React, {Component} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import firebase from '../../Firebase';


class Home extends Component{


    componentDidMount(){

        // var navigate = useNavigate();

        console.log("vim até aqui!");
        firebase.auth().onAuthStateChanged((user) =>{

            if(user){
                console.log("ta logado!");
                console.log(user.uid);
                firebase.firestore().collection("user").doc(user.uid)
                .get()
                .then((snapshot)=>{

                    var nome = snapshot.data().name;
                    alert("bem vindo " + nome);
                })

            }else{
                console.log("Não ta logado!");
                // navigate("/login");
                // ACHAR UM JEITO DE REDIRECIONAR PARA LOGIN!
            }

        });
    }

    render(){
        return(
            <>
                <Topbar/>
                <div className="homeContainer">
                    <Sidebar/>
                    <Feed/>
                    <Rightbar/>
                </div>
            </>
        );
    }
}

export default Home;