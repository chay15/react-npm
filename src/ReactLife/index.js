import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

class Content extends React.Component {

   componentWillReceiveProps (nextProps) {
       console.log("Content componentWillReceiveProps",nextProps);
       console.log("Content componentWillReceiveProps",this.props); 
    //    if (this.props.myNumber !== nextProps.myNumber) {

    //    }
   }

   shouldComponentUpdate(nextProps,nextState) {
       console.log("Content shouldComponentUpdate");
         return true;
   }

   componentWillUpdate() {
    console.log("Content componentWillUpdate");
}

componentDidUpdate() {
    console.log("Content componentDidUpdate");
}

    render ()  {
        console.log("Content render");
        const {myNumber}=this.props;
        return <div>{myNumber}</div>
    }
}


class ReactLife extends React.Component {
    constructor (props) {
        console.log("ReactLife constructor");   
        super(props);
        console.log("ReactLife get props" , props);   
        this.state = {
            data : 444
        }

        console.log("ReactLife get state" , this.state);

    }

    componentWillMount () {
        console.log("ReactLife CompontWillMount");
    }

    componentDidMount() {
        console.log("ReactLife componentDidMount");
    }

    componentWillUpdate() {
        console.log("ReactLife componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("ReactLife componentDidUpdate");
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log("ReactLife shouldComponentUpdate");
          return true;
    }
 

    onClick = () => {
        const {data} = this.state;
        this.setState({data : data + 1});
    }


    render() {

        console.log("ReactLife render");
        const {data}=this.state;
       
       return (<div>
                <button onClick = {this.onClick.bind(this)}>AAAA </button>
                <Content Content myNumber={data}/>
                
            </div>)
    }

}

export default ReactLife;