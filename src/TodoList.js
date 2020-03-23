import React from 'react';
import TodoItem from './TodoItem'

/*
定义一个react组件,组件分为函数组件和class组件，函数组件只适合用来展示数据,如下 定义一个TodoList函数组件
function TodoList() {
    return (<div>这是个函数式组件</div>)
}
*/
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        //属性1,state对象
        this.state = {
            list: [],
            inputValue: ''

        };
        //属性2,data对象
        this.data = {
            name: '张三'
        }
        this.handleValueChange = this.handleValueChange.bind(this);//这个this代表的父组件
        this.handleButtonClick = this.handleButtonClick.bind(this);//这个this代表的父组件
        this.handleItemClick = this.handleItemClick.bind(this);//这个this代表的父组件
    };

//点击add按钮新增待办事项
    handleButtonClick() {
        /* 更新react组件的属性时需要使用setState方法
           可以更新对象的多个属性
        *  1:更新state对象的属性list
        *  2:更新data对象的属性name
        *  setState的回调函数可以一些事情
        */
        if (this.state.inputValue.length === 0) {
            alert('请输入内容');
            return;
        }

        this.setState({
            name: '李四',
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log("setState更新")
        })
        /*此方法更新属性时无法实时刷新的
        this.state.list.push("hello world")*/
    }
    ;

//取文本框的值
    handleValueChange(e) {
        this.setState({inputValue: e.target.value})
    }
    ;

//点击代办事项删除之
    handleItemClick(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        /*this.setState({list: list})
        key 和value一样的时候可以省略一个*/
        this.setState({list})
    }
    ;

//获取todoList的明细
    getTodoItem() {
        return (
            this.state.list.map((item, index) => {
                /*父组件通过属性的形式像子组件传递参数
                key 是必须要赋值的*/
                return <TodoItem key={index} index={index} content={item} deleteItem={this.handleItemClick}/>
                // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
            })
        )
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleValueChange}/>
                    <button className='red-btn' onClick={this.handleButtonClick}>add</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </React.Fragment>
        );
    }
}

export default TodoList;
