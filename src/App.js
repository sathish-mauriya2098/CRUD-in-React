import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      person:[],
       name: '',
       email:'',
       index:0,
       valid:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.deleteData=this.deleteData.bind(this);
    //this.updateState = this.updateState.bind(this);
 }
 handleChange(e) {
   var name=e.target.name;
   if(name=="name"){
    this.setState({name: e.target.value});
   }
   if(name="email"){
    this.setState({email: e.target.value});
   }
  
}

 updateState(e) {
  let person1 = this.state.person;
  let name1 = this.state.name;
  let email1 = this.state.email;
  let n = this.refs.name.value;
  let em = this.refs.email.value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // if(name1.length!==0&&email1.length!==0){
  // person1.push({name:name1,email:email1});
  // this.setState({person1:person1,
  //   valid:false
  // });
  // console.log(person1);
  //   //this.setState({names: this.state.name});
  //   //this.state.person.push(this.state.name);
  //   console.log(this.state.name);
  // }
  if(n.length===0){
    this.setState({
      error:'Name is required',
      valid:true
    });
  }
  else if(em.length===0){
    this.setState({
      error:'Email is required',
      valid:true
    });
  }
  else if(!em.match(mailformat))
  {
    this.setState({
      error:'Email is invalid',
      valid:true
    });
  }
  else{
    person1.push({name:name1,email:email1});
  this.setState({person1:person1,
    valid:false
  });
  console.log(person1);
    //this.setState({names: this.state.name});
    //this.state.person.push(this.state.name);
    console.log(this.state.name);
  }
 }

 deleteData=(index)=>{
  const users=this.state.person.splice(index,1);
  this.setState({
    users:users
  });

}

// editData=(index)=>{
//   let data = this.state.person[index];
//     this.refs.name.value = data.name;
//     this.refs.email.value = data.email;

//     this.setState({ editc: 1, newVal: index });

    
// }
 
  render() {
    return (
      
         <div className="App">
         <div className="col-sm-6 offset-sm-3 fm">
         <form>
           <br/>
           <div>
           {this.state.valid?<div className="alert alert-success">{this.state.error}</div>:null}
           </div>
           <div className="form-group" >
           <label>Name</label>
             <input type="text" ref="name" className="form-control" name="name" onChange={this.handleChange}/>
           </div>
           <div className="form-group">
           <label>Email</label>
             <input type="email" ref="email" className="form-control" name="email" onChange={this.handleChange}/>
           </div>
           <center>
           <button type="button" class="btn btn-primary" onClick={this.updateState}>Submit</button>
           </center><br/>
           
         </form>
         </div>
         <br/>
         <table className="table table-striped">
               <tbody>
                 <tr>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Action</th>
                 </tr>
                  {this.state.person.map((persons, i) => <TableRow key = {i} 
                     person = {persons} 
                     delete={()=>this.deleteData(i)}
                     edit={()=>this.editData(i) }
                     />)}
               </tbody>
            </table>
         
       </div>
    );
  }
}
class TableRow extends React.Component {
  render() {
     return (
        <tr>
           <td>{this.props.person.name}</td>
           <td>{this.props.person.email}</td>
           <td><button type="button" className="btn btn-success" onClick={this.props.edit}>EDIT</button> <button type="button" className="btn btn-danger" onClick={this.props.delete}>DELETE</button></td>
        </tr>
     );
  }
}
export default App;
