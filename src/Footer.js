import React from 'react'

//底部
class Footer extends React.Component {
    render() {
        var register = {
            display: "block",
            fontSize: "13px",
            color: "#8b8b8b",
            width: "80px",
            height: "25px",
            margin: "0 auto",
            border: "1px solid #8b8b8b",
            textDecoration: "none",
            marginTop: "50px",
            textAlign: "center",
            lineHeight: "25px"

        }
        return (
            <a href="#" style={register}>快速注册</a>
        )
    }
}
export  default  Footer;