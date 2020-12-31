import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Category from '../container/category/category';
import CategoryAdd from '../container/category/categoryAdd';
import Home from './../components/index/Index';
import Profile from './../components/index/Profile';

export default class routerUI extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/category" component={Category}></Route>
                <Route path="/categoryAdd" component={CategoryAdd} ></Route>
            </Switch>
        )
    }
}
