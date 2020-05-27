import React, { Component } from 'react';
import { connect } from 'react-redux';


class FormDetail extends Component {

  constructor(props) {
    super(props);
      this.state={
        obj:{
          title: '',
          body: ''
        },
      }
    }

    componentWillMount(){
      let param = this.props.match.params.id
      if(param !== undefined){

      let _ =  this.props.ary.filter(element=>{
        console.log(element ,param)
          if(element._id == param)
            return element
        })

        this.setState({obj: _[0]})
      }
    }

    onChange = (e) => {
      let _ = this.state.obj;
      _[e.target.name] = e.target.value;
      this.setState({ obj: _ });
    }

    submitCall = (e) => {
      e.preventDefault()


      if(this.props.match.params.id){
        this.props.dispatch({
          type: 'update_note',
          value: this.state.obj,
          key: this.props.match.params.id
        })
      }
    
      else{
        const { dispatch } = this.props;                
        dispatch({
          type: 'add_note',
          value: this.state.obj
        });
     }

      console.log('-------------------------------')
      console.log(this.props)
      this.setState({
        ary: this.props.ary
      })

      const { history } = this.props;

      history.push("/")
      e.preventDefault()
    }

  render() {

    return (
     <div className="main-container">
       <form onSubmit={this.submitCall}>
         <label htmlFor="title">title</label>
         <div className="field">
           <div className="control">
             <input className="input is-small" autoComplete="off" 
             onChange={this.onChange} value={this.state.obj.title}
             type="text" placeholder="Small input" name="title"/>
           </div>
         </div>
 
         <label htmlFor="body">body</label>
         <div className="field">
           <div className="control">
             <textarea className="textarea is-small" 
             onChange={this.onChange}  value={this.state.obj.body}
             placeholder="Small textarea" name="body"></textarea>
           </div>
         </div>
 
         <br/>
         <div className="field is-grouped is-pulled-right">
           <div className="control">
             <button className="button is-small is-text">Cancel</button>&nbsp;
             <button className="button is-small is-primary">Submit</button>
           </div>
         </div>
       </form>
     </div>
    );
  }
}

const reciver = (state)=>{
  return{
    ary: state.ary,
    _: state.ary
  }
}

export default connect(reciver)(FormDetail);