import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import   {Shownote,Editnote}    from '../actions'

const Editnotes = (props)=>{


  let Title,Text;

  
  console.log(props.note);

  useEffect(() => {

   props.Shownote(props.match.params.id)
   
  }, [])




  const renderForm = ()=>{

    if(props.note){

 return <div>
      <div className="ui segment">
          <form onSubmit={(e)=>{e.preventDefault() 
               
             const FormValue = {
               title: Title,
               text: Text
             }


               props.Editnote(props.match.params.id,FormValue)

          
          }} className="ui form">
           
           <label className="header">Title:</label>
        <input required defaultValue={props.note.title} onChange={e=>{Title = e.target.value}}/>
     <div className="content">
         <label>note</label>
         <textarea required defaultValue={props.note.text} onChange={e=>{Text= e.target.value}}></textarea>

     </div>

        <button className='ui basic green button'>
            Submit
        </button>
          
          </form>
      </div>
  </div>

    }

    return null





  }



return <div>{renderForm()}</div>





}

const mapStateToProps = (state,ownProps)=>{

return {note: state.notes[ownProps.match.params.id]}


}



export default connect(mapStateToProps,{Shownote,Editnote})(Editnotes);