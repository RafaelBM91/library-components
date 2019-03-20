import styled from 'styled-components';

export const Label = styled.label`
    position: relative;
    text-indent: 1.25em;
    &:before {
        background-color: ${(style) => style.colorGround};
        content: ' ';
        height: ${(style) => style.size}em;
        left: 0;
        position: absolute;
        width: ${(style) => (style.size * 2)}em;
        border-radius: 50px;
    }
    &, & > * {
        cursor: pointer;
    }
`;

export const Track = styled.div`
    background-color: ${(style) => style.active ? style.colorSpinetActive : style.colorSpinet};
    height: ${(style) => style.size}em;
    left: 0;
    position: absolute;
    top: 0;
    width: ${(style) => style.size}em;
    border-radius: 50px;
    transition: all .2s linear;
`;

export const Input = styled.input`
    &[type="checkbox"] {
        opacity: 0;
        &:checked + ${Track} {
            left: ${(style) => style.size}em;
        }
    }
`;
