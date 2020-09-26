import React from 'react'
import './textArea.scss'

const TextArea = ({...rest}) => {
    return (
        <div>
           <textarea {...rest} className="text__area">

           </textarea>
        </div>
    )
}

export default TextArea
