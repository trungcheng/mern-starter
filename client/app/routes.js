import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';

import ResetPassword from './containers/auth/ResetPasswordContainer';
import ResetPasswordNew from './containers/auth/ResetPasswordNewContainer';
import ResetPasswordVerify from './containers/auth/ResetPasswordVerifyContainer';
import Signin from './containers/auth/SigninContainer';
import Signup from './containers/auth/SignupContainer';
import Signout from './containers/auth/SignoutContainer';
import SignupVerify from './containers/auth/SignupVerifyContainer';
import VerifyEmail from './containers/auth/VerifyEmailContainer';

import Dashboard from './containers/dashboard/DashboardContainer';

import UserProfile from './containers/user/UserProfileContainer';

import PostList from './containers/posts/PostListContainer';
import PostNew from './containers/posts/PostNewContainer';
import PostDetail from './containers/posts/PostDetailContainer';

import TodoList from './containers/todos/TodoListContainer';
import TodoDetail from './containers/todos/TodoDetailContainer';

import requireAuth from './utils/RequireAuth';
import requireNotAuth from './utils/RequireNotAuth';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={requireAuth(Dashboard)} />
            <Route path="/auth/signin" component={requireNotAuth(Signin)} />
            <Route path="/auth/signup" component={requireNotAuth(Signup)} />
            <Route path="/auth/signout" component={Signout} />
            <Route path="/auth/signup/verify-email" component={requireNotAuth(SignupVerify)} />
            <Route path="/auth/verify-email" component={requireNotAuth(VerifyEmail)} />
            <Route path="/auth/reset-password" component={requireNotAuth(ResetPassword)} />
            <Route path="/auth/reset-password/verify" component={ResetPasswordVerify} />
            <Route path="/auth/reset-password/new" component={requireNotAuth(ResetPasswordNew)} />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
            <Route path="/user/profile" component={requireAuth(UserProfile)} />
            <Route path="/posts" component={requireAuth(PostList)} />
            <Route path="/posts/new" component={requireAuth(PostNew)} />
            <Route path="/posts/:postId" component={requireAuth(PostDetail)} />
            <Route path="/todos" component={requireAuth(TodoList)} />
            <Route path="/todos/:todoId" component={requireAuth(TodoDetail)} />
        </Route>
    </Router>
)

