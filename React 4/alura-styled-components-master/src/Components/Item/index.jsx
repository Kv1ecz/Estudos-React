import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    display: flex;
    flex-direction: column;

    .text{
        font-weight: bold;
    }
`

export default (props) => {
    return(
        <Item>
            <span className="text">
                {props.type}
            </span>
            <span>
                {props.from}
            </span>
            <span>
                {props.value}
            </span>
        </Item>
    )
}
