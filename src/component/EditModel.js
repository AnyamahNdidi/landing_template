// import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import swal from 'sweetalert'
import Loading from "./Loading"
// import './mod.css'
// import swal from 'sweetalert'
// import { useNavigate } from "react-router-dom";
const EditModal = ({handleChange}) => {
   const hist = useNavigate()

  const [myData, setmyData] = React.useState('')
  const [title, setTitle] = React.useState()
  const [description, setDescription] = React.useState()
   const [loading, setLoading] = React.useState(false)
  const [load, setLoad] = React.useState(true)

  const getData = async ()=>{
    const res = await axios.get("https://templateapis.herokuapp.com/api/template")

    console.log(res.data?.data)
    console.log(myData[1]?._id)
    setmyData(res.data?.data)
  }

  
 
    const EditContent = async()=>{
      setLoading(true)
      await axios.patch(`https://templateapis.herokuapp.com/api/template/${myData[1]?._id}`, {title, description}).then((response)=>{
          if(response.status === 200){
			  console.log('uploaded successfull')
                           swal({
            title: " Your Data has been Submitted!",
            text: "You can clicked the button!",
            icon: "success",
            button: "ok",
          })
          .then((value) => {
            swal(hist(window.location.reload()));
          });  
			  
			  // setLoading(true)
		  }
      })

    
    

    }

  React.useEffect(()=>{
    getData()
  },[myData[1]?._id])
 
	return (
		<div style = {{ height : '100%', width : '100%', position : 'absolute', overflow: "hidden", transition:'all 500ms',
    
    display:"flex", justifyContent:'flex-end',  zIndex:'100px',
         top : 0, bottom : 0, left : 0, right : 0 }}>

		<div style = {{height : '100vh',   overflow:'y-scroll', width : '300px', background : '#b9b8c4', zIndex : 100, color : 'black', boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}} className = "hold">
            <br/>
            <br/>
         
         <h3>Edit Template</h3>
       
         <Holder>
             <Title>Title</Title>
             <Input
              maxLength='30'
             onChange = {(e)=>{
                 setTitle(e.target.value)
             }} defaultValue = {myData[1]?.title}
             
             type = 'text' />
         </Holder>
         <Holder>
             <Title>Description</Title>
             <Textarea 
                maxLength='400'
                style={{
                  height:"150px"
                }}
             type = "text"
             onChange = {(e)=>{
                 setDescription(e.target.value)
             }}
             defaultValue = {myData[1]?.description}
             />
         </Holder>
           {/* <Holder>
             <Title>Sub Content</Title>
             <Input  type = 'text' />
         </Holder>
           <Holder>
             <Title>Sub Content</Title>
             <Input  type = 'text' />
         </Holder>
           <Holder>
             <Title>Sub Content</Title>
             <Input  type = 'text' />
         </Holder> */}
          
        
         <br/>
      
       
         <div style = {{display : 'flex', width : '90%'}}>

             <button  onClick = {EditContent} style = {{marginLeft : '30px', height : '40px', width : '120px', cursor : 'pointer', background  : "#384359", color : 'white'}}> Save</button> 
             <button onClick={
               ()=>{
                 hist("/")
               }
               }  style = {{marginLeft : '30px', height : '40px', width : '120px', cursor : 'pointer', background  : 'green', color : 'white'}}> Preview</button> 
         </div>
         {
						 loading ?  <Loading loading={loading}/> : null
					 }
        </div>
		</div>
	);
};

export default EditModal;

const Holder = styled.div`
display : flex;
flex-direction: column;
justify-content : center;
padding : 10px;
margin-left : 20px;
/* background-color: red; */
/* align-items: center; */


`
const Title = styled.div`
text-align: left;

`
const Input = styled.input`
height: 35px;


width : 240px;
border-radius: 5px;
border-color : silver;
padding-left: 10px;
transition : all 350ms;
:hover{
	border-color: silver;
}

@media screen and (max-width: 768px) {
/* margin-left: 0; */
	}

    `
const Textarea = styled.textarea`
height: 50px;


width : 240px;
border-radius: 5px;
border-color : silver;
padding-left: 10px;
transition : all 350ms;
:hover{
	border-color: silver;
}

@media screen and (max-width: 768px) {
/* margin-left: 0; */
	}

    `