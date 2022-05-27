import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NotFound() {

    return (
        <>
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 2,
                    minHeight: '100%'
                }}
            >
                <Container maxWidth="md">
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography
                            align="center"
                            color="textPrimary"
                            variant="h2"
                        >
                            404: The page you are looking for isn&apos;t here
                        </Typography>
                        
                        <Box sx={{ textAlign: 'center' }}>
                            {/* <img
                                alt="Something Wrong Here"
                                src=""
                                style={{
                                    marginTop: 50,
                                    display: 'inline-block',
                                    maxWidth: '100%',
                                    width: 560
                                }}
                            /> */}
                        </Box>
                        <Link
                            to="/"
                        >
                            <Button
                                component="a"
                                startIcon={(<ArrowBackIcon fontSize="small" />)}
                                sx={{ mt: 3 }}
                                variant="contained"
                                
                            >
                                Go back to dashboard
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Box>
        </>)

};

