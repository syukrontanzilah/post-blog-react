import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {CreateBlog, DetailBlog, Home} from '../../pages'
import { Header, Footer } from '../../components'
import './mainApp.scss'

const MainApp = () => {
    return (
        <div className="main__app__wrapper">
           
                 <Header/>
      
           
<div className="content__wrapper">
 {/* Routes home */}
           <Router>
             <Switch>
            <Route path="/create-blog">
                <CreateBlog/>
            </Route>
            <Route path="/detail-blog">
                <DetailBlog/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
             </Switch>
           </Router>
</div>
           
   
              <Footer/> 
 
     
        </div>
    )
}

export default MainApp
