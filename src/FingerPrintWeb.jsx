import { Component, createElement } from "react";
import { HomePage } from "./components/HomePage";
  
export default class FingerPrintWeb extends Component {

    constructor(props) { 
        super(props);
    }

    render() {
        return ( 
         <div> 
            <HomePage props={this.props}/>  
         </div>
        )
    }
}