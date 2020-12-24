import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Addnote} from '../actions'


const Addnotes = ({Addnote})=>{

const[title, setTitle] = useState('')
const[text,setText] = useState('');

const onFormSubmit = (e)=>{

    e.preventDefault();

    const value = {
        title: title,
     text: text,
     date: new Date().toDateString()
    

    }

    Addnote(value);



}

return <form onSubmit={onFormSubmit} style={{marginTop:20}} className="ui form ">
  <div className="ui segment">
  <h1 >Add a note!</h1>
   <label style={{fontSize:20}}>Title</label>
    <input required onChange={(e)=>{ setTitle(e.target.value)}}/>
    


    <label style={{display:"inline-block", fontSize:20,marginTop:10}}>Description</label>

    <textarea required onChange={(e)=>{setText(e.target.value)}}></textarea>

<button style={{marginTop:4}} className="ui  green button">Add </button>

  </div>
  
   </form>






}






export default connect(null,{Addnote})(Addnotes);



