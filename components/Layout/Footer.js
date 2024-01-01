import React from 'react';

// mui
import Box from '@mui/material/Box';;
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

// components
import TypographyGreyAnchor from '../Wrapper/TypographyGrey';
import { Link } from '@mui/material';



const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'common.black',
                color: grey[600],
            }}
        >

            <Container
                maxWidth='md'
                sx={{
                    py: 6,
                }}
            >
                <Typography sx={{ mb: 4 }}>
                    Questions? Contact <a href='https://amsrportfolio.netlify.app'>Aryan Maurya</a> 
                </Typography>
                <Grid
                    container
                    spacing={4}
                    sx={{ mb: 4 }}
                >
                    <Grid item xs={6} md={3}>
                        <Stack spacing={2}>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                FAQ
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Investor Relations
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Ways to Watch
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Corporate Information
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Only on Netflix
                            </TypographyGreyAnchor>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Stack spacing={2}>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Help Center
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Jobs
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Terms of Use
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Contact Us
                            </TypographyGreyAnchor>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Stack spacing={2}>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Account
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Redeem Gift Cards
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Privacy
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Speed Test
                            </TypographyGreyAnchor>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Stack spacing={2}>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Media Center
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Buy Gift Cards
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Cookie Preferences
                            </TypographyGreyAnchor>
                            <TypographyGreyAnchor variant='caption' component='a' href='#'>
                                Legal Notices
                            </TypographyGreyAnchor>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{ mb: 3 }}>
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
                </Box>
                <Typography variant='caption'>
                    Netflix Indonesia
                </Typography>
            </Container>

        </Box>
    )
}

export default Footer