import React, { Component } from 'react';
import { connect } from 'react-redux';



class App extends Component {
  constructor(props) {
    super(props);
      this.state={
        ary:[]
      }
    }

  componentWillMount(){
    this.setState({
      ary: this.props.ary
    })
  }
  render() {
    return (
      <div>
      {
        this.state.ary.map(res=>(
          <h1>{res.title}</h1>

        ))
      }








      <div class="field">
      <div class="control is-small is-loading">
        <textarea class="textarea is-small" placeholder="Small loading textarea"></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control is-loading">
        <textarea class="textarea" placeholder="Normal loading textarea"></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control is-medium is-loading">
        <textarea class="textarea is-medium" placeholder="Medium loading textarea"></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control is-large is-loading">
        <textarea class="textarea is-large" placeholder="Large loading textarea"></textarea>
      </div>
    </div>







      </div>
    );
  }
}

const reciver = (state)=>{
  return{
    ary: state.ary
  }
}

export default connect(reciver)(App);