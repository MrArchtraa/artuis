'use client'

import styled, { css } from "styled-components"

type Variant = 'default' | 'outlined' | 'soft'

interface InputProps {
    variant: Variant;
}

const Input = styled.input<InputProps>`
    margin: 0 10px;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 10px;
    transition: border-bottom 0.2s ease-in-out;

    ${(props) => props.variant === 'default' && 
    css`
        border-bottom: 2px solid black;

        &:hover {
            border-bottom: 2px solid blue;
        }

    `}

`

const ArtInput = () => {
    return (
        <Input variant="default" />
    )
}

export default ArtInput