import React, { Component } from 'react'

 class CreatePost extends Component {
     state = {
        title: '',
        content: ''
     }
     handleChange = (e) => {
       this.setState({
          [e.target.id]:e.target.value
       })
        
     }
     handleSubmit = (e) => {
         e.preventDefault();
         console.log(this.state); 
     }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create Post</h5>  
                <div className="input-field">
                  <label htmlFor="title">Title</label>  
                  <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                  <label htmlFor="content">content</label>  
                  <input type="text" id="content" onChange={this.handleChange}/>
                
                </div>
                <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0">Create post</button>
                </div>
                </form>
                
            </div>
        )
    }
}

export default CreatePost