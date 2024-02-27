
import axios from "axios";
import "./Post.css";
import { Link } from "react-router-dom";
import baseurl from "../Api";
import { useEffect, useState } from "react";
import {Buffer} from 'buffer';

const Post = () => {


  var [users,setUsers] = useState([]);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  useEffect(()=>{
      axios.get(baseurl+'/write/writesview')
      .then(response =>{
  console.log(response.data)
          setUsers(response.data) })
      .catch(err=>console.log(err))
  },[])

  return (

  <div className="post">
    {users.map((value,index)=>(
      <div  key={index}>
      <img
        className="postImg"
      src={`data:image/jpeg;base64,${Buffer.from(value.image.data).toString('base64')}`}
      width="50" height="50"
        alt="Error"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        
          {/* <Link to={`/post/${post._id}`} className="link"> */}
           <span className="postTitle">{value.title}</span>
          {/* </Link> */}
        
        <hr />
        <span className="postDate">{formattedDate}</span>
      </div>
      <p className="postDesc">{value.desc}
        
      </p>
      </div>
        ))}
    </div>
  );
}
export default Post