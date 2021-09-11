import React,{useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts';

const App = () => {

  const [Post, setPost] = React.useState([]);
  const [Loading, setLoading] = React.useState(true);
  const [currentPage, setcurrentPage] =  React.useState(1);
  const [PostsPerpage, setPostsPerpage] =  React.useState(10);

  const fetchPosts = async() =>{

      setLoading(true);
      try
      {

       /* const response=await axios.get('https://api.github.com/users/john-smilga/followers?per_page=100');
        setPost(response.data);
        setLoading(false);
        console.log(Post);*/

        const response=await fetch('https://api.github.com/users/john-smilga/followers?per_page=100');
        const res=await response.json();
        setLoading(false);
        setPost(res);
        console.log(Post);

      } 
      
      catch (error) 
      {

        setLoading(false);
        console.log(error);
        
      }

  };

  useEffect(() => 
  {
   
      fetchPosts();

  }, [])

  if(Loading)
    {
        return(
        <h1>Loading....</h1>
        )
        
    }


  return (
    <>
      <div className="MainContainer">
        <div className="heading">
          My Blogs
        </div>

        <div className="BlogList">
          <Posts Post={Post} Loading={Loading} />
        </div>
      </div>
    </>
  )
}

export default App
