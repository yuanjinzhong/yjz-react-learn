import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

class All extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }
}

export default All;