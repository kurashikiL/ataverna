import "./usertags.css"
import {userSchema} from "../../validation/userValidation.js";
import React, {Component, useLayoutEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Person } from "@material-ui/icons";
import firebase from '../../Firebase';
import { FormControl, FormLabel,Radio, FormControlLabel, RadioGroup, InputLabel,MenuItem, Select, Input, ListItemText, Checkbox, Chip } from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
      maxWidth: 500,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    'DnD 5e',
    'Tormenta 20',
    'Call of Cthulu',
    'Vampire'
  ];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Usertag(){
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
        if (options[i].selected) {
            value.push(options[i].value);
        }
        }
        setPersonName(value);
    };
    const {register,handleSubmit,formState: { errors }} = useForm({
        resolver: yupResolver(userSchema),
    });

    // const submitForm = async (data) => {
    //     console.log(data);
    //     setProfilePic(data);

    // }

    const navigate = useNavigate();

    let uid="";

    useLayoutEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                console.log("usuário logado");
                uid = user.uid;
            }else{
                console.log("nenhum usuário logado, redirecionando...")
                navigate("/login");
            }
        });
    },[]);

    async function setProfilePic(e){

        let file = e.target.files[0];

        await firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                // console.log(user.uid);

                firebase.storage().ref("ProfilePic").child(uid).put(file)
                .then((e) => {
                    console.log("Upload feito!");
                    navigate("/");
                });
                
                // firebase.firestore().collection("user").doc(user.uid)
                // .get()
                // .then((snapshot)=>{

                //     var nome = snapshot.data().name;
                // })

            }else{
                navigate("/login");
            }

        });



    };
    async function setCoverPic(e){

        let file = e.target.files[0];

        await firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                // console.log(user.uid);

                firebase.storage().ref("ProfilePic").child(uid).put(file)
                .then((e) => {
                    console.log("Upload feito!");
                    navigate("/");
                });
                
                // firebase.firestore().collection("user").doc(user.uid)
                // .get()
                // .then((snapshot)=>{

                //     var nome = snapshot.data().name;
                // })

            }else{
                navigate("/login");
            }

        });
    };

    const submitForm = async (data) => {
        console.log(data);

        // CADASTRAR
        await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
        .then( async (value) => {
            await firebase.firestore().collection("user").doc(value.user.uid)
            .set({
                name: data.name,
                nick: data.nick,
            });
            console.log("Cadastrou com sucesso!");
            navigate("/tags");
        })
        .catch((error) => {
            if(error.code === 'auth/email-already-in-use'){
                alert("email já está em uso!");
            }else{
                console.log("Deu ruim!");
                console.log("Erro: " + error);
            }
        })
    };

    return(
        <div className="cardScreen">
            <div className="cardTags">
                <div className="cardTagsItem">
                    <h1>Informações de Perfil</h1>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="tagsInputs">
                            Foto de perfil:
                            <input id="upPic" type="file" onSubmit={(e) => {setProfilePic(e)}}></input>
                            <br></br>
                            Foto de capa:
                            <input id="upCoverPic" type="file" onSubmit={(e) => {setCoverePic(e)}}></input>
                            <br></br>
                            Descrição:                       
                            <input type="text" name="desc" placeholder="Descrição"></input>
                            <br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">O quanto você gosta de Role Play?</FormLabel>
                                <RadioGroup row aria-label="radioRP" name="row-radio-buttons-group">
                                    <FormControlLabel value="0" control={<Radio />} label="Nada" labelPlacement="bottom"/>
                                    <FormControlLabel value="1" control={<Radio />} label="Pouco" labelPlacement="bottom"/>
                                    <FormControlLabel value="2" control={<Radio />} label="Médio" labelPlacement="bottom"/>
                                    <FormControlLabel value="3" control={<Radio />} label="Bastante" labelPlacement="bottom"/>
                                    <FormControlLabel value="4" control={<Radio />} label="Demais" labelPlacement="bottom"/>
                                </RadioGroup>
                            </FormControl>
                            <br></br>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">O quanto você Otimização de Personagem?</FormLabel>
                                <RadioGroup row aria-label="radioRP" name="row-radio-buttons-group">
                                    <FormControlLabel value="0" control={<Radio />} label="Nada" labelPlacement="bottom"/>
                                    <FormControlLabel value="1" control={<Radio />} label="Pouco" labelPlacement="bottom"/>
                                    <FormControlLabel value="2" control={<Radio />} label="Médio" labelPlacement="bottom"/>
                                    <FormControlLabel value="3" control={<Radio />} label="Bastante" labelPlacement="bottom"/>
                                    <FormControlLabel value="4" control={<Radio />} label="Demais" labelPlacement="bottom"/>
                                </RadioGroup>
                            </FormControl>
                            <br></br>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-chip-label">Joga quais sistemas de RPG?</InputLabel>
                                <Select
                                labelId="demo-mutiple-chip-label"
                                id="demo-mutiple-chip"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<Input id="select-multiple-chip" />}
                                renderValue={(selected) => (
                                    <div className={classes.chips}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} className={classes.chip} />
                                    ))}
                                    </div>
                                )}
                                MenuProps={MenuProps}
                                >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                    {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </div>
                        <input type="submit" name="submit" className="enterButton" value="Cadastrar"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Usertag;