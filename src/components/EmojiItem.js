import React from 'react'
import ReactClipboard from  'react-clipboard-simple'

export default function EmojiItem(props) {
    return (
        <ReactClipboard keyword={props.symbol}>
        <div style={{width:"200px", height:"200px", display:"grid", textAlign:"center", lineHeight: "200px", boxShadow: "2px 5px 5px gray", borderRadius:"20px", margin:"20px", fontsize:"25px"}}>
            <h1>{props.symbol}</h1>
        </div>
        </ReactClipboard>
    )
}
