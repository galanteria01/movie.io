import React from 'react'
import { motion } from "framer-motion"
import { Grid } from '@mui/material'

const SplashScreen = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <motion.h1 animate={{
                    scale: [1, 2, 2, 2, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}>Movie.io</motion.h1>
            </Grid>

        </Grid>
    )
}

export default SplashScreen
