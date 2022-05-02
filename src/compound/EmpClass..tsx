import React from "react";


interface IProps{}
interface IState{
    name: string;
    age: number;
    title: string;
}

export class EmpClass extends React.Component<IProps, IState>{

    constructor(props:IProps) {
        super(props);

        this.state = {

            name: "Naren",
            age: 17,
            title: "Pilot",

        } as IState


    }

    render() {

        return(
            <React.Fragment>
            <h2>Employee Class Component</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    Name : {this.state.name}
                </li>
                <li className="list-group-item">
                    Age : {this.state.age}
                </li>
                <li className="list-group-item">
                    Title : {this.state.title}
                </li>
            </ul>
            </React.Fragment>
        );
        
    }


}