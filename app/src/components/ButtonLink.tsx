import { Link } from 'react-router-dom'
import Button from './Button'

import React from 'react'

type ButtonLinkProps = {
    text?: String,
    showicon?: Boolean,
    function?: any,
    link: string
}

export default function ButtonLink(props: ButtonLinkProps) {
    return (
        <Link to={props.link}>
            <Button text={props.text} showicon={props.showicon} />
        </Link>
    )
}   