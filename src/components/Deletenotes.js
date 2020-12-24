import React, { useEffect } from 'react';
import Modal from '../modal';
import history from '../history';
import {connect} from 'react-redux';
import {Shownote,Deletenote} from '../actions/index'
import { Link } from 'react-router-dom';




const Deletenotes = (props)=>{



useEffect(()=>{

   props.Shownote(props.match.params.id)



},[])

const RenderAction = ()=>{
 
    return <React.Fragment>

<button onClick={()=>props.Deletenote(props.match.params.id)} className="ui basic red button">Delete</button>
<Link to="/" className="ui basic primary button">Cancel</Link>




    </React.Fragment>






}



const RenderContent= ()=>{


    if(!props.note){
        return  "Are you sure you want to delete this note ?"
    }


    return `Are you sure You want to delete this note with Title: ${props.note.title}`




} 




    return <div>
        <Modal
        onDismiss = {()=>history.push('/')}
        title = "Delete note!"
        content = {RenderContent()}
        actions = {RenderAction()}
        
        />
    </div>






}



const mapStateToProps = (state,ownProps)=>{

 return {note: state.notes[ownProps.match.params.id]}




}


export default connect(mapStateToProps,{Shownote,Deletenote})(Deletenotes);