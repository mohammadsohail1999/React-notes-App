import axios from 'axios';
import history from '../history';
const baseURl = 'http://localhost:3001'




export const Getnotes =  ()=>{

  return async (dispatch)=>{

         const res = await axios.get(`${baseURl}/notes`);


         dispatch({type:'GET_TEXT', payload:res.data})





  } 

   




}





export const Addnote = (text)=>{


     return async (dispatch)=>{

       const response =  await axios.post(`${baseURl}/notes`,{...text})

         dispatch({type:'TEXT_ADDED',payload:response.data})

         history.push('/')


     }




    }


    
export const Shownote = (id) =>{


  return async (dispatch)=>{
   
   const res = await axios.get(`${baseURl}/notes/${id}`) 

   dispatch({type:'SHOW_TEXT', payload:res.data}) 


  }









}


export const Editnote = (id,formvalues)=>{

  return async(dispatch)=>{

    const res = await axios.patch(`${baseURl}/notes/${id}`,formvalues)

     dispatch({type:'EDIT_TEXT', payload:res.data })

     history.push('/');

  } 




} 



export const Deletenote = (id)=>{

  return  async(dispatch)=>{

       await axios.delete(`${baseURl}/notes/${id}`)

        dispatch({type:'DELETE_TEXT',payload:id })
   

        history.push('/');




  }


  




}