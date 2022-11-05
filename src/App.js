import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Pages/Home/Home";
import { AppContext } from './Utils/Utils';
import Posts from "./Pages/Home/SubComponents/Posts";

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      modalTitle: '',
      modalBody: '',
      modaActions: '',
      posts: [],
      addPost: this.addPost,
      modifyDialog: this.modifyDialog,
      addComment: this.addComment,
      addLike: this.addLike
    }
  }

  addPost = (post) => {
    this.setState({
      posts: [...this.state.posts, post]
    })
  }

  modifyDialog = (title, body, actions) => {
    this.setState({
      modalTitle: title,
      modalBody: body,
      modalActions: actions
    })
  }

  addComment = (comment, idx) => {
      let _posts = JSON.parse(JSON.stringify(this.state.posts));

      let date = new Date().getMilliseconds();

      _posts[idx].comments = [..._posts[idx].comments, {
        value: comment,
        date
      }];

      this.setState({
        posts: _posts
      })
  }

  addLike = (idx) => {
    let _posts = JSON.parse(JSON.stringify(this.state.posts));

    _posts[idx].like = !_posts[idx].like;
    
    this.setState({
      posts: _posts
    })
  }

  render(){
    return (
      <AppContext.Provider value={this.state}>
        <Home />
        <hr />
        {
          this.state.posts.map((post, idx) => <Posts post={post} key={idx} postId={idx} />)
        }
        </AppContext.Provider>
    );
  }
}
export default App;
