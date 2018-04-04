import React, { Component } from 'react';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink } from 'react-router-dom';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/' exact>Home</NavLink></li>
                            <li><NavLink to='/new-post'>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
            </div>
        );
    }
}

export default Blog;