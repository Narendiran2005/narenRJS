import React, { useState } from "react";

interface IProps{}
interface IState{

    message: string;
    
}

let Greetings:React.FC<IProps> = () => {

    let[state, setState] = useState<IState>({

        message: "hello"

    });

    let changeMessage =(greet: string):void =>{
        setState({
            message: greet
        });
    }

    

    return(

        <React.Fragment>
            <h3>Greeting Message</h3>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <p className="h3">{state.message}</p>
                            <button className="btn btn-success" type="button" onClick={() => changeMessage('Good Morning')}>Good Morning </button>
                            <button className="btn btn-warning" type="button" onClick={() => changeMessage('Good Afternoon')}>Good Afternoon</button>
                            <button className="btn btn-danger" type="button" onClick={() => changeMessage('Good Night')} >Good Night</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );

}

export default Greetings;
