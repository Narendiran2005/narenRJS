import React, { useState } from "react";

interface IState{

    Count: number;
    
}

interface IProps{}

let Count:React.FC<IProps> = () =>  {

    let[state, setState] = useState<IState>({

        Count:0

    });

    let inc = ():void => {
        
        setState({
            Count: state.Count + 1 
        });

    };

    let dec = ():void => {

        setState({

            Count: state.Count - 1

        });
    };


    return(
        <React.Fragment>
            <h3>Count Calaculator</h3>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <p className="h3">{state.Count}</p>
                            <button className="btn btn-success" type="button" onClick={inc}>Increase</button>
                            <button className="btn btn-danger" type="button" onClick={dec}>Decrease</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )

};

export default Count;
