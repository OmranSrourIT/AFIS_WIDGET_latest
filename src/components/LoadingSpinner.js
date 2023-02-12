import { Component, createElement } from "react";
import "../ui/spinner.css";
  
export class LoadingSpinner extends Component { 

    render()
    {
        return (
            <div className="spinner-container">
              <div style={{display:'grid'}}>
              <img style={{backgroundColor:"#484949"}} src={"./img/UI$Image_collection$endlogo.png"}/> 
              <div class="lds-ellipsis"><div style={{backgroundColor:'#2fc8aa'}}></div><div style={{backgroundColor:'#166d42'}}></div><div style={{backgroundColor:'#ffda53'}}></div></div>
              </div>
            </div>
          );
    }
  
}