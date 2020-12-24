


import React from 'react';
import {connect} from 'react-redux';
import {Getnotes} from '../actions';
import {Link} from 'react-router-dom';
 
 class Header extends React.Component{


    componentDidMount(){
        this.props.Getnotes()   
      }


      rendernotes = (notesarr)=>{

        if(!notesarr){
          return <div>no notes added</div>
        }
         else{
       return notesarr.map(note=>{

         return <div className="four wide column grid1" key={note.id}>
          <div className="ui card">
              <div className="content">
                <div className="header" > {note.title} </div>
                
                <div className="meta">

                 {note.date}     
                  
                </div>
             
             
              </div>

            <div className="content">
              <div className="summary">
              {note.text}
              </div>
           
            </div>
               
               <div className="extra content">
                 <Link to={`/notes/${note.id}`} style={{display: "inline-block",padding:10}} className="ui basic primary button">Show details</Link>
                 
                 
               </div>



            </div>
            
         </div>


       })

      }


      }



render(){

    console.log(this.props.notes);
   
   return (   <div style={{textAlign:"center",marginTop:20 }}>
        <h1 style={{color:'white'}}> Add your notes </h1>

     

        <Link to="/addnotes" style={{borderRadius:40,textAlign: "center", }} className="ui basic green button">+</Link>    
       
   < div style={{marginTop: 10}} className="ui grid">
     
       {this.rendernotes(this.props.notes)}

    </div>


     


     </div>


   )


}


}





const mapStateToProps = (state)=>{


    return {
        notes: Object.values(state.notes)
    }




}

export default connect(mapStateToProps,{Getnotes})(Header);