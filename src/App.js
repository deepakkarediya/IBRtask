import React from "react";

import './App.css'

import UserForm from "./mycomponents/UserForm";

function App() {

  return (
    <>
    <div className="Userform">
    <UserForm />
    </div>
     
    </>
    // <Router>
    //   <div>
    //   <Navbar/>    
    //     <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/home">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
