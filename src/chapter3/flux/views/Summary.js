import React,{Component} from 'react';
import SummaryStore from '../stores/SummaryStore';

class Summary extends Component{
    constructor(props){
        super(props);

        this.state={
            sum:SummaryStore.getSummary()
        }
    }

    componentDidMount(){
        SummaryStore.addChangeListener(this.onUpdate);
    }

    componentWillUnMount(){
        SummaryStore.removeChangeListener(this.onUpdate);
    }

    onUpdate=()=>{
        this.setState({
            sum:SummaryStore.getSummary()
        });
    }

    render(){
        return(
            <div>Total Count:{this.state.sum}</div>
        );
    }
}

export default Summary;