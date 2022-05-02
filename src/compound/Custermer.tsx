import { title } from "process";
import React from "react";

interface IProps{

    name?: string;
    age?: number;
    title?: string;
}

let Custermer:React.FC<IProps> = ({name, age, title}) =>{

    console.log(name , age , title);

return(
    
    <React.Fragment>
    
        <h2> Customer Compoent </h2>

        <ul className="list-group">
            <li className="list-group-item">
                Name:{name}
            </li>
            <li className="list-group-item">
                Age:{age}
            </li>
            <li className="list-group-item">
                Title:{title}
            </li>

        </ul>

        
        

    </React.Fragment>
)

};

export default Custermer;