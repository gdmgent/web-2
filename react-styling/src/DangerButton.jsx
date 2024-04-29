import React from 'react'
import Button from './Button'

const DangerButton = ({ children }) => {
    return (
        <Button color="danger">
            {children}
        </Button>
    )
}

export default DangerButton