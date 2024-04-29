import React from 'react'
import styles from './Button.module.css'
import styled from 'styled-components';

const getColor = (variant) => {
    switch (variant) {
        case 'info':
            return 'lightblue';
        case 'warning':
            return 'yellow';
        case 'danger':
            return 'red';
        default:
            return 'blue';
    }
}

const COLORS = {
    info: 'lightblue',
    warning: 'yellow',
    danger: 'red'
}

const DefaultButton = styled.button`
    background-color: ${props => props.theme.primary};
    padding: 1rem;
    border: 1px solid ${props => props.primaryColor};
    border-radius: .5rem;
`;

const Button = ({ label, variant, children }) => {
    return (
        // <div className={styles.btn}>Button</div>
        <DefaultButton type={variant}>
            {children}
            {variant}
        </DefaultButton>
    )
}

export default Button