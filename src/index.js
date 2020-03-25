import React from 'react';
import ReactDOM from 'react-dom';
//react中组件名字要大写,因为小写的会认为是原生的标签
//待办事项组件
import TodoList from './TodoList';
//登陆框组件
import All from './All';
//欢迎组件
import Welcome from './Welcome'
//时钟组件
import Clock from './Clock'
//引入Material ui
import Material from './Material'
//登陆页面
import  SignIn from './SignIn'
//侧边登陆页
import  SignInSide  from './SignInSide'

//hook学习
import Example from './Hook'

import './style.css'

const element = <Welcome name="yuanjinzhong">haha</Welcome>//目前还没学到类是vue的插槽,所以haha还不知道如何渲染

ReactDOM.render(<Example/>, document.getElementById('root'));

