import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);//这个this指的是子组件
    }

    handleDelete() {
        //此处this是子组件,即获取子组件的delete字段,因为调用这个函数的时候将this指定为子组件本身了,不然this代表该函数,该函数没有delete属性
        //es6 解构赋值
        const {deleteItem, index} = this.props;
        //this.props.deleteItem(this.props.index)
        deleteItem(index);
    }

    render() {
        //es6 解构赋值
        const {content} = this.props;
        return (
            //子组件通过props属性接收父组件传递的参数
            <div onClick={this.handleDelete}>
                {content}
            </div>
        );
    }
};
export default TodoItem;
