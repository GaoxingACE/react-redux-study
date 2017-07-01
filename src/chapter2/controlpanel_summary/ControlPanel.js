import React,{Component,PropTypes} from 'react';
import Counter from './Counter';

const style={
	margin:'20px'
};

class ControlPanel extends Component{

   constructor(props){
   	super(props);
   	this.initValues=[0,10,20];
   	const initSum=this.initValues.reduce((a,b)=>a+b,0);
   	this.state={
   		sum:initSum,
   	}
   }

   onCounterUpdate=(newValue,previousValue)=>{
   	const valueChange=newValue-previousValue;
   	this.setState({sum:this.state.sum+valueChange});
   }

	render(){
		console.log('enter ControlPanel render');
		return(
			<div style={style}>
			  <Counter onUpdate={this.onCounterUpdate} caption='First' />
			  <Counter onUpdate={this.onCounterUpdate} caption='Second' initValue={this.initValues[1]} />
			  <Counter onUpdate={this.onCounterUpdate} caption='Third'  initValue={this.initValues[2]} />
			  <hr />
			  <div> Total Count:{this.state.sum} </div>
			</div>
			);
	}
}

export default ControlPanel;
