import React from 'react';
import { AppBar, Toolbar, Link, Typography, Button, Box } from '@mui/material';
import "./Navbar.css";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Link href="/">
                        <img src="https://i.imgur.com/0nCscCD.png" alt='BM' width="15%" />
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>

                    {/* <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Features
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Enterprise
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Support
                    </Link>
                </nav> */}
                    <Button href="/login" variant="contained" color='secondary' >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>

    );
}

