import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' ,adno:null,mno:null,area:'',city:'',pincode:null};
  }
  SubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting =>" +"Name:" +this.state.username+"||Aadhar No.:"+this.state.adno+"||Mobile No.:"+this.state.mno+"||Area:"+this.state.area+"||City:"+this.state.city+"||Pincode"+this.state.pincode);
  }
  ChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.SubmitHandler}>
      <h1>Hey {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.ChangeHandler}
      />
       <p>Aadhar No:</p>
      <input
        type='text'
        name='adno'
        onChange={this.ChangeHandler}
      />
       <p>Mobile No:</p>
      <input
        type='text'
        name='mno'
        onChange={this.ChangeHandler}
      />
       <p>Area:</p>
      <input
        type='text'
        name='area'
        onChange={this.ChangeHandler}
      />
       <p>City:</p>
      <input
        type='text'
        name='city'
        onChange={this.ChangeHandler}
      />
       <p>Pincode:</p>
      <input
        type='text'
        name='pincode'
        onChange={this.ChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
