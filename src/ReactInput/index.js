import React from 'react';
import "./index.css";


class ReactInput extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            value : ""
        }
    }


    onKeyDownEvent = (e) => {
        console.log("wait");
        if (e.keyCode === 13) {
            console.log("enter");

            const {onSearch} = this.props;
            const {value} = this.state;
            console.log(onSearch);
            if (onSearch) {
                onSearch(value);
            }
        }

        



    }


    onChangeEvent = (e) => {
        console.log(e.target.value);
        this.setState({value:e.target.value});
    }

    onClickEvent = (e) => {
        const {value} = this.state;
        console.log(value);
        const {onClick} = this.props;
        if (onClick) {
            onClick(value);
        }
    }


    render() {

        

        return (
            <span>
                <input 
                        className ="rt-input" 
                        placeholder = "请输入内容"
                        type="text"
                        onKeyDown = {this.onKeyDownEvent}
                        onChange = {this.onChangeEvent}
                         />
                <button onClick = {this.onClickEvent}
                 className = "rt-input-search-btn">搜&nbsp;索 </button>

                         
            </span>
        
        );
    }


   

}


export default ReactInput;