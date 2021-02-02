import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {Shownote} from '../actions'



class  Shownotes extends React.Component {

      
    componentDidMount(){

         this.props.Shownote(this.props.match.params.id)

    }


    renderDetails = ( ) =>{

     if(!this.props.notes){
         return null
     }
     return <div className="ui segment">
         <h1>{this.props.notes.title}</h1>
         <h1>commited</h1>
    <p>{this.props.notes.text}</p>
    <Link to={`/notes/edit/${this.props.notes.id}`} className="ui basic primary button">Edit</Link>
    <Link to={`/notes/delete/${this.props.notes.id}`} className="ui basic red button">Delete</Link>

     </div>


      



    } 



    render(){

        console.log(this.props)
        console.log(this.props.notes);


     return <div>{this.renderDetails()}
     </div>

         


    }






}

const mapStatetoProps = (state,ownProps)=>{


return {
    notes : state.notes[ownProps.match.params.id]
}





}





export default connect(mapStatetoProps,{Shownote})(Shownotes);