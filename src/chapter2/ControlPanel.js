import React,{Component,PropTypes} from 'react';
import Counter from './Counter';

const style={
	margin:'20px'
};

class ControlPanel extends Component{
	render(){
		console.log('enter ControlPanel render');
		return(
			<div>
			  <Counter caption='First' />
			  <Counter caption='Second' initValue={10} />
			  <Counter caption='Third' initValue={20} />
			  <button onClick={()=>{this.forceUpdate();}}>Click me to re-render!</button>
			</div>
			);
	}
}

export default ControlPanel;

