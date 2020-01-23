import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users'
import Posts from './Components/Posts'
import UserShow from './Components/UserShow'
import PostShow from './Components/PostShow'

function App() {
  return (
    <BrowserRouter>
    <div>
    <div className="container-fullwidth">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
     
       <Link to="/" className="navbar-brand mb-0 h1"><img src="C:\Users\Sneha\ticket-master\src\ticket.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>Blogger</Link>
      
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
       

       <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
       <ul class="nav justify-content-end">
         <li class="navbar-nav">
           <Link  class=" nav-item nav-link active" to="/">Home<span class="sr-only">(current)</span></Link>
           <Link class="nav-item nav-link active" to="/Users">Users<span class="sr-only">(current)</span></Link>
           <Link class="nav-item nav-link active" to="/Posts">Posts<span class="sr-only">(current)</span></Link>
         </li>
       </ul>
       </nav>
       <br/>
       <br/>
       </div>
       
      <div className="container">
     <Route path="/" component={Home} exact={true} />
     <Route path="/Users" component={Users} exact={true}/>
     <Route path="/Users/:id" component={UserShow} exact={true}/>
     <Route path="/Posts" component={Posts} exact={true}/>
     <Route path="/Posts/:id" component={PostShow} exact={true}/>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
