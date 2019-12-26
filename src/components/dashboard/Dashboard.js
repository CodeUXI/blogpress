import React, { Component } from 'react'
import PostList from '../posts/PostList'
import { connect } from 'react-redux';

//dashboard
class Dashboard extends Component {
    render() {
      // console.log(this.props);
      const { posts } = this.props
        return (
            <div className="dashboard-container">
              <div className="row">
                <div className="col s12 m6">
                   <PostList posts={posts}/>
                </div>
              </div>  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts
  }
}
export default connect(mapStateToProps)(Dashboard)