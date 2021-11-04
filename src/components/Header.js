import React from 'react'
import GitHubButton from 'react-github-btn'

export default function Header() {
    return (
        <div style={{ textAlign:"center"}}>
            <h1>Search Emoji <span>&#x1F984;</span></h1>
            <p>Simple tool for search emoji with ReactJS</p>
           <GitHubButton href= 'https://github.com/hbolouri' data-show-count={true} data-size='large' data-text='star' data-icon='octicon-star'>star</GitHubButton>
           <GitHubButton href='https://github.com/hbolouri' data-show-count={true} data-size='large' data-text='form' data-icon='octicon-repo-forked'>fork</GitHubButton>
        </div>
    )
}
