import React from 'react';
import logo from './logo.svg';
import './App.css';
import customer from './compound/Custermer';
import Custermer from './compound/Custermer';
import { CustomerClass } from './compound/CustomerClass';
import Emp from './compound/Emp';
import { EmpClass } from './compound/EmpClass.';
import Count from './Exapmle Projects/Count';
import Greetings from './Exapmle Projects/Greetings';
import LoginForm from './Exapmle Projects/LoginForm';
function App() {
  return (
    <React.Fragment>

      <div className="container mt-3">

        <div className="grid">
        <div className="row">
                   <div className="col">
                       <p className="h3 fw-bold text-success">App Component</p>
                       <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ducimus facilis nihil numquam quas quia quo repellat! Alias consequatur cumque deleniti dicta, dolores, eum eveniet facilis minima nisi quia quod.</p>
                    <button className="btn btn-success btn-sm">
                       <i className="fa fa-book"/> Read More</button>
                   </div>
         </div>
         </div>

         <div className="row">
           <div className="col">
             <Custermer/>
           </div>
         </div>

         <div className="row">
                   <div className="col">
                       <Custermer name={'Rajan'} age={25} title={'Software Engineer'}/>
                   </div>
               </div>

         <div className="row">
                   <div className="col">
                       <CustomerClass name={'Naren'} age={17} title={'Software Engineer'}/>
                   </div>
               </div>
      
        <div className="row">
          <div className="col">
            <Emp/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <EmpClass/>
          </div>
        </div>
        <div className="row">
            <div className="col">
              <Count/>
        </div>
        </div>

        <div className="row">
            <div className="col">
                <Greetings/>
        </div>
        </div>

        <div className="row">
          <div className="col">
            <LoginForm/>
          </div>
        </div>


        


          
          
          
      </div>  

    </React.Fragment>
  );
}

export default App;
