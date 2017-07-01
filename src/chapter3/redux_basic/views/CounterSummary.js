import React,{Component} from 'react';
import store from '../Store.js';

class CounterSummary extends Component{
    constructor(props){
        super(props);

        this.state=this.getOwnState();
    }

    getOwnState=()=>{
        const state=store.getState();
        let sum=0;
        for(const key in state){
            if(state.hasOwnProperty(key)){
                sum+=state[key];
            }
        }
        return {sum:sum};
    }

    shouldComponentUpdate(nextProps,nextState){
        return nextState!==this.state.sum;
    }

    componentDidMount(){
        store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }

    onChange=()=>{
        this.setState(this.getOwnState());
    }

    render(){
        const sum=this.state.sum;
        return (
            <div>Total Count:{sum}</div>
        );
    }
}

export default CounterSummary;