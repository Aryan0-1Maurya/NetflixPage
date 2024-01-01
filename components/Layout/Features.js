import React from 'react';
import Image from "next/legacy/image";

// mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { blue, grey } from '@mui/material/colors';

// components
import BottomBorderBox from '../Wrapper/BottomBorder';



const Title = ({ title }) => {
    return (
        <Typography
            variant="h3"
            color="common.white"
            gutterBottom
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
            {title}
        </Typography>
    )
}

const Desc = ({ desc }) => {
    return (
        <Typography
            variant="h5"
            color="common.white"
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
            {desc}
        </Typography>
    )
}

const Features = () => {
    return (
        <>
            <BottomBorderBox
                sx={{
                    backgroundColor: 'common.black'
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{ py: 4 }}
                >
                    <Grid
                        container
                        alignItems="center"
                        columnSpacing={10}
                    >
                        <Grid item xs={12} md={6}>
                            <Title title="Enjoy on your TV." />
                            <Desc desc="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ position: 'relative', zIndex: 2 }}>
                                    <Image
                                        src='/images/tv.png'
                                        width={640}
                                        height={480}
                                        layout='responsive'
                                        alt='tv'
                                    />
                                </Box>
                                <Box sx={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    top: '48%',
                                    left: '50%',
                                    maxWidth: '73.5%',
                                    maxHeight: '56%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                                >
                                    <video
                                        src="/videos/tv.m4v"
                                        style={{ height: '100%', width: '100%' }}
                                        autoPlay
                                        playsInline
                                        muted
                                        loop
                                    >
                                    </video>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </BottomBorderBox>

            <BottomBorderBox
                sx={{
                    backgroundColor: 'common.black'
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{ py: 4 }}
                >
                    <Grid
                        container
                        alignItems="center"
                        columnSpacing={10}
                    >
                        <Grid
                            item
                            xs={12} md={6}
                            sx={{ order: { xs: 2, md: 1 } }}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <Box>
                                    <Image
                                        src='/images/mobile.jpg'
                                        width={640}
                                        height={480}
                                        layout='responsive'
                                        alt='mobile'
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: 'common.black',
                                        border: `2px solid ${grey[500]}`,
                                        borderRadius: 2,
                                        bottom: {
                                            xs: '5%',
                                            md: '10%'
                                        },
                                        left: '50%',
                                        p: 1,
                                        position: 'absolute',
                                        transform: 'translate(-50%, 0)',
                                        width: {
                                            xs: '80%',
                                            sm: '70%',
                                            md: '60%'
                                        },
                                        zIndex: 1,
                                    }}
                                >
                                    <Grid
                                        container
                                        spacing={3}
                                        alignItems='center'
                                    >
                                        <Grid item xs={2} md={3}>
                                            <Image
                                                src='/images/boxshot.png'
                                                width={55}
                                                height={80}
                                                layout='intrinsic'
                                                alt='boxshot'
                                            />
                                        </Grid>
                                        <Grid item xs={8} md={6}>
                                            <Typography
                                                variant='subtitle1'
                                                color='common.white'
                                            >
                                                Stranger Things
                                            </Typography>
                                            <Typography
                                                variant='body1'
                                                color={blue['A400']}
                                            >
                                                Downloading.....
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2} md={3}>
                                            <Image
                                                src='/images/download.gif'
                                                width={50}
                                                height={50}
                                                layout='intrinsic'
                                                alt='download'
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12} md={6}
                            sx={{ order: { xs: 1, md: 2 } }}
                        >
                            <Title title="Download your shows to watch offline." />
                            <Desc desc="Save your favorites easily and always have something to watch." />
                        </Grid>
                    </Grid>
                </Container>
            </BottomBorderBox>

            <BottomBorderBox
                sx={{
                    backgroundColor: 'common.black'
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{ py: 4 }}
                >
                    <Grid
                        container
                        alignItems="center"
                        columnSpacing={10}
                    >
                        <Grid item xs={12} md={6}>
                            <Title title="Watch everywhere." />
                            <Desc desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ position: 'relative', zIndex: 2 }}>
                                    <Image
                                        src='/images/devices.png'
                                        width={640}
                                        height={480}
                                        layout='responsive'
                                        alt='device'
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        top: '34%',
                                        left: '49%',
                                        maxWidth: '75%',
                                        maxHeight: '47%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    <video
                                        src="/videos/devices.m4v"
                                        style={{ height: '100%', width: '100%' }}
                                        autoPlay
                                        playsInline
                                        muted
                                        loop
                                    >
                                    </video>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </BottomBorderBox>

            <BottomBorderBox
                sx={{
                    backgroundColor: 'common.black'
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{ py: 4 }}
                >
                    <Grid
                        container
                        alignItems="center"
                        columnSpacing={10}
                    >
                        <Grid
                            item
                            xs={12} md={6}
                            sx={{ order: { xs: 2, md: 1 } }}
                        >
                            <Box>
                                <Image
                                    src='/images/kids.png'
                                    width={640}
                                    height={480}
                                    layout='responsive'
                                    alt='kids'
                                />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12} md={6}
                            sx={{ order: { xs: 1, md: 2 } }}
                        >
                            <Title title="Create profiles for kids." />
                            <Desc desc="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." />
                        </Grid>
                    </Grid>
                </Container>
            </BottomBorderBox>
        </>
    )
}

export default Features