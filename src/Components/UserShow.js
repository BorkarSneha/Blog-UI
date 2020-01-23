import React from 'react'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
function UserShow (props){
// componentDidMount(){
//   const Userid=this.props.match.params.id
//         axios.get(`http://jsonplaceholder.typicode.com/users/${Userid}`)
//         .then((response) =>{
//             const user=response.data
//             this.setState({user})
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//  const Postid=this.props.match.params.id
//         axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${Postid}`)
//         .then((response) =>{
//             console.log(response.data)
//             const posts=response.data
//             this.setState({posts})
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
console.log(props)

        return(
            <div>
                {
                    props.user && (
                        <div className="col-md-6 offset-md-3">
                            <div align="center">
                            <h2>USER NAME: {props.user.name}</h2>
                  <h3>POSTS WRITTEN BY USER</h3>
                  </div>
                  <ul class="list-group">
                      {
                          props.posts.map((post)=>{
                              return(
                                  <li class="list-group-item list-group-item-danger" key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                              )
                          })
                      }
                  </ul>  
                        </div>
                    )
                  
                }
            </div>
        )
    }
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return {
        user:state.users.find(user => user.id ==id),
        posts:state.posts.filter(post=>post.userId==id)
    }
}
export default connect(mapStateToProps)(UserShow)