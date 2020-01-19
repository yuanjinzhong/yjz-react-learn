import React from 'react';

//头部
class Header extends React.Component {
    render() {
        var styleDiv = {
            width: '100%',
            height: '70px',
            lineHeight: '70px'
        }
        var styleImg = {
            marginLeft: '10px',
            marginRight: '10px'
        }


        return (
            <div style={styleDiv}>
                <a href="#" onClick={() => this.goBack()}>
                    <img src="./images/back.png" style={styleImg}/>
                </a>
            </div>
        )

    }
}

export default  Header;