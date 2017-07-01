import React,{Component} from 'react';
import Counter from './Counter';
import CounterSummary from './CounterSummary';

class ControlPanel extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <hr/>
                <CounterSummary/>
            </div>
        );
    }
}

export default ControlPanel;