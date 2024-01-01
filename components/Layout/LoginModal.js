import React, { useState } from 'react';
import Image from "next/legacy/image";

// mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { grey, red } from '@mui/material/colors';

// icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(0, 0, 0, 0.8)',
    boxShadow: 24,
    color: 'common.white',
    p: 4,
};


const LoginModal = ({ open, closeModal }) => {

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <Modal
            open={open}
            onClose={closeModal}
        >
            <Box sx={style}>
                <Typography
                    variant='h4'
                    sx={{
                        mb: 4,
                        fontWeight: 'bold'
                    }}
                >
                    Sign In
                </Typography>
                <Grid
                    container
                    sx={{ mb: 2 }}
                >
                    <form action="">
                        <FormControl
                            fullWidth
                            sx={{ mb: 2 }}
                        >
                            <TextField
                                id="email"
                                name="email"
                                label="email"
                                variant="filled"
                                sx={{
                                    background: grey[100],
                                }}
                            />
                            <FormHelperText sx={{ color: grey[50] }}>
                                Please enter a valid email or phone number.
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            fullWidth
                            sx={{ mb: 3 }}
                        >
                            <TextField
                                id="password"
                                name="pssword"
                                label="password"
                                type={showPassword ? 'text' : 'password'}
                                variant="filled"
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                }}
                                sx={{
                                    background: grey[100],
                                }}
                            />
                            <FormHelperText sx={{ color: grey[50] }}>
                                Your password must contain between 4 and 60 characters.
                            </FormHelperText>
                        </FormControl>
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            Sign In
                        </Button>
                    </form>
                </Grid>
                <Grid
                    container
                    alignItems='center'
                    justifyContent='space-between'
                    sx={{ mb: 2 }}
                >
                    <Box>
                        <Checkbox
                            sx={{
                                color: red[800],
                                '&.Mui-checked': {
                                    color: red[600],
                                },
                            }}
                        />
                        <Typography variant='caption'>
                            Remember me?
                        </Typography>
                    </Box>
                    <Typography
                        variant='caption'
                        component='a'
                        href="#"
                        sx={{
                            color: 'common.white',
                            textDecoration: 'none',
                        }}
                    >
                        Need help?
                    </Typography>
                </Grid>
                <Grid
                    container
                    alignItems='center'
                    sx={{ mb: 2 }}
                >
                    <Image
                        src='/images/facebook.png'
                        height={20}
                        width={20}
                        layout='fixed'
                        alt='facebook'
                    />
                    <Typography
                        variant='caption'
                        component='a'
                        href='#'
                        sx={{
                            color: 'common.white',
                            textDecoration: 'none',
                            ml: 1
                        }}
                    >
                        Login with Facebook
                    </Typography>
                </Grid>
                <Grid sx={{ mb: 1 }}>
                    <Typography variant='body' component='span'>
                        New to Netflix?
                    </Typography>
                    <Typography
                        variant='body'
                        component='a'
                        href='#'
                        sx={{
                            color: 'common.black',
                            ml: 1
                        }}
                    >
                        Sign up now.
                    </Typography>
                </Grid>
                <Grid sx={{ mb: 4 }}>
                    <Typography
                        variant='caption'
                        component='span'
                        sx={{
                            lineHeight: '8px',
                            mr: 1
                        }}
                    >
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </Typography>
                    <Typography
                        variant='caption'
                        component='a'
                        href='#'
                        sx={{ color: red[300] }}
                    >
                        Learn more.
                    </Typography>

                </Grid>
            </Box>
        </Modal >
    )
}

export default LoginModal