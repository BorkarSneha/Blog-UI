import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
function Posts (props){
    return(
        <div className="col-md-8 offset-md-2">
            <div align="center">
            <h2>TOTAL POSTS: {props.posts.length}</h2>
            </div>
            <ul class="list-group">
            {
                props.posts.map((post)=>{
                    return(
                        <li class="list-group-item list-group-item-warning" key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    )
                })
            }
            </ul>        
        </div>
    )
}
 
const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}
export default connect(mapStateToProps)(Posts)
