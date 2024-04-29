import React from 'react'
import stylex from '@stylexjs/stylex';

const themeTokens = stylex.defineVars({
    brand: 'hsl(233, 100%, 96%)',
    light: 'hsl(0, 0%, 98%)',
    dark: 'hsl(0, 0%, 10%)',
    spacing: {
        small: '.5rem',
        base: '1rem',
    },
    size: {
        medium: "1.25rem",
        large: "1.5rem"
    }
});

const defaultTheme = stylex.createTheme(themeTokens);

const buttonStyles = stylex.create({
    button: {
        backgroundColor: 'blue',
        color: 'white'
    },
    important: {
        fontWeight: 800
    },
    icon: {
        backgroundColor: 'white',
        color: 'blue'
    }
});

const Button = ({ children, style }) => {
    return (
        <button {...stylex.props(buttonStyles.button, buttonStyles.important, style)}>
            {children}

            <i {...stylex.props(buttonStyles.icon)}> Icon</i>
        </button >
    )
}

export default Button