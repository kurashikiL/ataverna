import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import StarRating from "../../components/starrating/Star";
import firebase from '../../Firebase.js';
import { Component } from "react";
import { useNavigate} from "react-router";
import { Redirect } from "react-router";



// function navigateTo(){

//     const navigate = useNavigate();
//     const navigateTo = async () => {
//         navigate('/login');
//     }

// }

// export default function redirect(){

//     console.log("vim até aqui 2");
//     const navigate = useNavigate();
//     navigate("/login");

// }

class Profile extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: "",
        }


    };

    // redirect(){

    //     const navigate = useNavigate();
    //     const navigateTo = async () => {
    //         navigate('/login');
    //     }
    // }

    componentDidMount(){

        // var navigate = useNavigate();
        firebase.auth().onAuthStateChanged((user) =>{

            if(user){
                firebase.firestore().collection("user").doc(user.uid)
                .get()
                .then((snapshot)=>{

                    this.setState({name: snapshot.data().name});
                })

            }else{
                // console.log("vim aqui");
                 
                // () => redirect();

                // <Redirect to="/login"></Redirect>
                // ACHAR UM JEITO DE REDIRECIONAR PARA LOGIN!
            }
            

        });
    };



    render(){
        return(
            <>
                <Topbar/>
                <div className="profileContainer">
                    <Sidebar/>
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className="profileCoverImg" src="/assets/person/1.jpg" alt=""/>
                                <img className="profilePicImg" src="/assets/person/1.jpg" alt=""/>     
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">{this.state.name}</h4>
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
}


export default Profile;