import React from 'react';
import Image from "next/legacy/image";

// mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// components
import BottomBorderBox from '../Wrapper/BottomBorder';



const HeaderNetflix = ({ openModal }) => {

    return (
        <BottomBorderBox>
            <AppBar
                elevation={0}
                sx={{
                    backgroundColor: "transparent",
                    padding: 3,
                    position: 'absolute'
                }}
            >
                <Toolbar>
                    <Grid
                        alignItems="center"
                        container
                        spacing={3}
                    >
                        <Grid item xs>
                            <Image
                                priority
                                src="/images/netflix.svg"
                                height={45}
                                width={163}
                                layout="intrinsic"
                                alt="netflix logo"
                            />
                        </Grid>
                        <Grid item xs="auto">
                            <Select
                                name="lang"
                                defaultValue="EN"
                                size="small"
                                variant="outlined"
                                sx={{
                                    borderWidth: "2px",
                                    borderStyle: "solid",
                                    borderColor: "common.white",
                                    color: "common.white",
                                    "& .MuiSelect-icon": {
                                        color: "common.white"
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none"
                                    }
                                }}
                            >
                                <MenuItem value="ID">Bahasa Indonesia</MenuItem>
                                <MenuItem value="EN">English</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs="auto">
                            <Button
                                variant="contained"
                                onClick={openModal}
                            >
                                Sign In
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    position: 'relative',
                    height: '745px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&::after': {
                        position: 'absolute',
                        content: '""',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        background: 'rgba(0, 0, 0, 0.4)',
                        backgroundImage: `linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 0.8) 0,
                            rgba(0, 0, 0, 0.1) 60%,
                            rgba(0, 0, 0, 0.8) 100%
                        )`
                    }
                }}
            >
                <Image
                    priority
                    src="/images/netflix.jpg"
                    layout='fill'
                    objectFit="cover"
                    alt="netflix background"
                />

                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 999 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        color="common.white"
                        fontWeight="500"
                        textAlign="center"
                        gutterBottom
                    >
                        Unlimited movies, TV shows, and more.
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        color="common.white"
                        textAlign="center"
                        gutterBottom
                    >
                        Watch anywhere. Cancel anytime.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        color="common.white"
                        textAlign="center"
                        sx={{ my: 3 }}
                    >
                        Ready to watch? Enter your email to create or restart your membership.
                    </Typography>
                    <Grid container>
                        <Grid item xs>
                            <TextField
                                label="Email Address"
                                variant="filled"
                                fullWidth
                                sx={{
                                    bgcolor: 'common.white'
                                }}
                            />
                        </Grid>
                        <Grid item xs="auto">
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    height: '100%',
                                    borderRadius: '2px',
                                    fontSize: '17px'
                                }}
                            >
                                Get Started
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </BottomBorderBox>
    )
}

export default HeaderNetflix