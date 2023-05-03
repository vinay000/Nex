import React from 'react'
import Box from '../box/Box'

const Layout = ({ children }: any) => {
    return (
        <Box
            css={{
                maxW: "100%"
            }}
        >
            {children}
        </Box>
    )
}

export default Layout