import React from 'react'
import './blogItem.scss'
import { RegisterBg } from '../../../assets'

const BlogItem = () => {
    return (
        <div className="blog__item">
            <img className="image__thumb" src={RegisterBg} alt="post" />
            <div className="content__detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Membuat Styling Item Blog Post dan Pagination Dalam Video Tutorial MERN Basic ini, kalian akan belajar bagaimana membuat sebuah aplikasi yang utuh dari sisi FrontEnd dan Juga BackEnd dengan menggunakan satu bahasa utama yaitu Javascript.</p>
            </div>
        
        </div>
    )
}

export default BlogItem
