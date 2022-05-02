import { title } from "process";
import React, { useState } from "react";


interface IProps{}
interface IState{
    name: string;
    age: number;
    title: string;
}

let Emp:React.FC<IProps> = () => {

    let[state, setState] =useState<IState>({
        name: 'Naren',
        age: 17,
        title: 'Pilot',
    });

    return(
        <React.Fragment>
        <h2>Employee Component</h2>

        <ul className="list-group">
                <li className="list-group-item">
                    Name : {state.name}
                </li>
                <li className="list-group-item">
                    Age : {state.age}
                </li>
                <li className="list-group-item">
                    Title : {state.title}
                </li>
            </ul>
        </React.Fragment>

    )


};

export default Emp; 