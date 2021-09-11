import React from 'react'

const Posts = ({Post,Loading}) => 
{
  

    return (
        <ul>
            {
               Post.map((currElem) =>{
                   return(
                       <li key={currElem.id}>
                           {currElem.title}
                       </li>
                   )
               })
            }
        </ul>
    )
}

export default Posts
