import React,{useState, useEffect} from 'react'
import "./style.css"
import { FaRProject } from 'react-icons/fa';
import { MdOutlineDeck } from 'react-icons/md';
import { SiYoutubestudio } from 'react-icons/si';
import img from "./2.png"
import img3 from "./4.png"
import EditModel from "./EditModel"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {Controller, useForm} from "react-hook-form"
import axios from "axios"
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';

const mySchema = yup.object().shape({
  fullname:yup.string().required("userName is required"),
  email:yup.string().email().required(),
  phonenumber:yup.string().required(),
  password:yup.string().required(),
})

function EditTemplate() {
   const hist = useNavigate()
  
  const [show, setShow] = useState(true)
   const [myData, setmyData] = React.useState('')
     const [load, setLoad] = React.useState(true)
  const handleChange = ()=>{
    setShow(show)
  }

  const{register, handleSubmit, reset ,formState:{ errors }} = useForm({
    resolver:yupResolver(mySchema)
  })

   const submit = handleSubmit(async (value)=>{
    console.log(value)

     await axios.post(`https://templateapis.herokuapp.com/api/register`, value).then((data)=>{
    console.log(data.data);
    localStorage.setItem("userInfo", JSON.stringify(data.data))

    swal({
      title:"sucessfull",
      text:"click to proceed",
      icon:"success",
      button:"ok"
    }).then(()=>{
      swal(hist(window.location.reload()));
    })
   
    
 })
  })

    const getData = async ()=>{
    const res = await axios.get("https://templateapis.herokuapp.com/api/template")

    console.log(res.data?.data)
    console.log(res.data?.data[2])
    setmyData(res.data?.data)
       setLoad(false)
  }

  const postData = async(value)=>{
      await axios.post(`https://templateapis.herokuapp.com/api/register`, value).then((response)=>{
                swal({
            title: " Your Data has been Submitted!",
            text: "You can clicked the button!",
            icon: "success",
            button: "ok",
        
          }).then((value) => {
            swal(hist(window.location.reload()));
          });  
      })
    
    

    }

  React.useEffect(()=>{
    getData()
  },[])

  
  return (
    <div>
      <div className="allCon">
        <div className="main_Con">
          
          <div className="con1">
            <div className="imgg">
              <img src={img}/>
            </div>
            <div className="title">
              {/* Gef 100% services from us! */}
                {
                load ? <Skeleton variant="text" style={{backgroundColor:"silver", width:"100%", height:"45px"}} />: null
              }
              {
                load ? <Skeleton variant="text" style={{backgroundColor:"silver", width:"80%", height:"45px"}} />: null
              }
              <h1>{myData[1]?.title}</h1>
              </div>
            <div className="content">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur  */}
{
                load ? <Skeleton variant="text" style={{backgroundColor:"silver", width:"100%", height:"10px"}} />: null
              }
              {
                load ? <Skeleton variant="text" style={{backgroundColor:"silver", width:"100%",  height:"10px"}} />: null
              }
              {
                load ? <Skeleton variant="text" style={{backgroundColor:"silver", width:"100%",  height:"10px"}} />: null
              }
              {
                load ? <Skeleton variant="text" style={{backgroundColor:"silver", width:"100%",  height:"10px"}} />: null
              }
             {myData[1]?.description}
            </div>
            <div className="iconDis">
              <div className="done">
                <div className="icon"><FaRProject
                style={{
                  color:"#A38A00",
                  marginTop:"3px",
                  marginRight:"5px",
                  fontSize:"20px"
                }}
                /></div>
                <div className="iconTile">4 hrs project</div>
              </div>
              <div className="done">
                <div className="icon"><MdOutlineDeck
                style={{
                  color:"#A38A00",
                  marginTop:"3px",
                  marginRight:"5px",
                  fontSize:"20px"
                }}
                /></div>
                <div className="iconTile">
                  Deck Pitching
                </div>
              </div>
              <div className="done">
                <div className="icon"><SiYoutubestudio
                style={{
                  color:"#A38A00",
                  marginTop:"3px",
                  marginRight:"5px",
                  fontSize:"20px"
                }}
                /></div>
                <div className="iconTile">Best Resources</div>
              </div>

            </div>
            <div className="button1" onClick={()=>{
              handleChange()
            }}>
                Edit Template
            </div>
          </div>
    <div className="con2">
          <div className='inputCon'>
                <div className="title2">Sign Up</div>
                <div>
                  <form  className="registrationForm" onSubmit={submit}>
                    <div className="form_group">
                       <input  type="text" placeholder="Full Name"
                       {...register('fullname')}
                       
                       required/>
                    </div>

                   <div className="form_group">
                    <input  type="email" placeholder="E-mail"
                    {...register('email')} 
                    required
                    />
                    </div>
                    <div className="form_group">
                    <input  type="text" placeholder="Phone" 
                    {...register('phonenumber')}
                    required/>
                    </div>
                    <div className="form_group">
                    <input  type="password" placeholder="Password" 
                    {...register('password')}
                    required/>
                    </div>
                    <div>
                      <input type="submit" value="Regster" className="btn_submit"/>
                    </div>


                  </form>
                   <div className="textSub">By submitting the form you've agree to our terms and condition. </div>
                </div>
          </div>
          <div
          className="dotCon"
          >
            <div className="imgdot">
              <img src={img3}/>
            </div>
          </div>
        </div>
        { 
        show ? ( <EditModel handleChange={handleChange}/>) : null
        }
       
        </div>
       

      </div>
    </div>
  )
}

export default EditTemplate
