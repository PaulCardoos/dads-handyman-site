import React from 'react'

const BlockQuote = ({ quote, citation }) => {
    return (
        <figure>
            <blockquote class="blockquote">
                <p style={{fontSize:"24px", fontWeight:"500"}}>{quote}</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                {citation}
            </figcaption>
        </figure>
    )
}

export default BlockQuote
