import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Users(props){ 
    return(
        <div className="col-md-6 offset-md-3"> 
            <div align="center">
            <h2>USERS LIST: {props.users.length}</h2>
            </div>
            
            <ul class="list-group">
            {
                props.users.map((user)=>{
                    return(
                        <li class="list-group-item list-group-item-primary" key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    )
                })
            }
            </ul>        
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
export default connect(mapStateToProps)(Users)