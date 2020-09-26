import React from 'react'
import { Button, BlogItem, Gap } from '../../components'
import './home.scss'

const Home = () => {
    return (
        <div className="home__page__wrapper">
           <div className="create-wrapper">
               <Button title="Create Blog"/>
           </div>

<Gap height={20}/>
<div className="content__wrapper">
    <BlogItem/>
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>   
</div>
          

<div className="pagination">
    <Button title="Prev"/>
    <Gap width={20}/>
    <Button title="Next"/>
</div>
      
      <Gap height={20}/>
           
        </div>
    )
}

export default Home
