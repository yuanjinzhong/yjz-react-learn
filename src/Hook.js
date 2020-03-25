
// react 16.8 Hook 中的 钩子:useState

import React, {Component, useState,useEffect} from 'react';

export default function Example() {
    //hook 之 useState
    const [name, setName] = useState("张三")

    //hook 之useEffect ,类似生命周期函数
    useEffect(() => {
        return () => {
            document.title="这是自定义ttle"
        };
    });

    return (
        <div>
            <p>{name}</p>
            <button onClick={() => setName(name + "被点击")}></button>
        </div>
    );
}
