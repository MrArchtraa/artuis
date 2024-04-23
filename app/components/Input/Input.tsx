'use client'

import styled, { css } from "styled-components"
import { colors } from "../colors";

type Variant = 'default' | 'outlined' | 'soft'

interface InputProps {
    variant: Variant;
    color?: keyof typeof colors;
}

const Input = styled.input<InputProps>`
    margin: 0 10px;
    background: transparent;
    border: none;
    border-radius: 5px;
    padding: 10px;
    transition: border-bottom 0.2s ease-in-out;

    ${(props) => props.variant === 'default' && 
    css`
        border: 1px solid rgb(229 231 235);
        border-bottom: 2px solid ${colors.secondary.default};

        &::placeholder {
            color: grey;
        }

        &:hover {
            background-color: ${colors.secondary.hoverSoft}
        }

        &:focus {
            outline: none; /* Hilangkan outline default saat input mendapatkan fokus */
            border-bottom: 2px solid ${colors[props.color || 'primary'].default}; /* Warna border bottom saat input mendapatkan fokus */
        }

    `}

`

const ArtInput = () => {
    return (
        <Input color="error" variant="default" placeholder="test" />
    )
}

export default ArtInput