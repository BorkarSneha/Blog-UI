import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import { startSetUsers } from '../actions/users'

function PostShow(props){
    console.log('imma')
        return(
            
              <div className="col-md-10 offset-md-1">
                {
                    (!_.isEmpty(props.post) && !_.isEmpty(props.user) && 
                    <div>
                        <h3>USER NAME: {props.user.name}</h3>
                        <h3>TITLE: {props.post.title}</h3> 
                        <p><b>BODY:</b>
                        <br/>{props.post.body}</p>
                        <hr/>
                        <h3>COMMENTS</h3>
                        <ul class="list-group">
                        {
                            props.comments.map((com)=>{
                                   return(
                                    <li class="list-group-item list-group-item-danger" key={com.id}>{com.body}</li>
                                )
                              })
                        }
                        </ul>
                        <hr/>
                        <Link to={`/users/${props.match.params.id}`}>More posts of Author: {props.user.name}</Link>
                    </div>
                    )
        }
        </div>
            )
    }
    
const mapStateToProps =(state,props)=>{
    const id=props.match.params.id
    const post=state.posts.find(post=>post.id==id)
    {console.log(post,6)}
    let user
    if(post)
    {
        user=state.users.find(user=>user.id ==post.userId)
    }
    {console.log(user,9)}
    return{
        post,
        user,
        
        comments:state.comments.filter(com=>com.postId==id)
    }

}
export default connect(mapStateToProps)(PostShow)