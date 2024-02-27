
import "./SinglePost.css";
import baseurl from "../Api";
import axios from "axios";
import { useEffect, useState } from "react";

const SinglePost = () => {
  var [users,setUsers] = useState([]);


useEffect(()=>{
    axios.get(baseurl+'/write/writesview')
    .then(response =>{
console.log(response.data)
        setUsers(response.data) })
    .catch(err=>console.log(err))
},[])

    return (
    <div className="singlePost">
     
      <div className="singlePostWrapper" >
        <img
          className="singlePostImg"
          src=""
          alt=""
        />
        <h1 className="singlePostTitle">
          
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
             
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc"></p>
      </div>
        
    </div>
  );
}


export default SinglePost