import React from 'react'
import Box from '../box/Box'
import Navbar from '@/components/navbar/Navbar'

const Layout = ({ children }: any) => {
    return (
        <Box css={{ maxW: "100%" }} >
            <Navbar />
            {children}
        </Box>
    )
}

export default Layout