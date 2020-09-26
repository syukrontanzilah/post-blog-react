import React from 'react'
import './createBlog.scss'
import {Input, Button, Upload, TextArea, Gap} from '../../components'

const CreateBlog = () => {
    return (
        <div className="createBlog">
            <p className="title">Create New Blog Post</p>
         
         <Input label="Post Title"/>

         <p>Upload Image</p>
         <Upload/>


       <TextArea/>
<Gap height={20}/>
<div className="button__action">
      <Button title="Add post"/>
</div>
      
      
        </div>
    )
}

export default CreateBlog
