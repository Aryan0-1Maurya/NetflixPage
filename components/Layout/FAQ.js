import React, { useState } from 'react'

// mui
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// components
import BottomBorderBox from '../Wrapper/BottomBorder'
import { AccordionGrey, AccordionSummaryBorderBottom } from '../Wrapper/AccordionCustom';



const FAQ = () => {

    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <BottomBorderBox
            sx={{
                backgroundColor: 'common.black',
            }}
        >
            <Container
                maxWidth="md"
                sx={{ py: 6 }}
            >
                <Typography
                    variant='h3'
                    color='common.white'
                    align='center'
                    sx={{ mt: 2, mb: 4 }}
                >
                    Frequently Asked Questions
                </Typography>

                <Stack
                    spacing={1}
                    sx={{ mb: 8 }}
                >
                    <AccordionGrey
                        square
                        expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                    >
                        <AccordionSummaryBorderBottom
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant='h5'>What is Netflix?</Typography>
                        </AccordionSummaryBorderBottom>
                        <AccordionDetails>
                            <Typography
                                variant='h6'
                                sx={{ mb: 2 }}
                            >
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                            </Typography>
                            <Typography variant='h6'>
                                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                            </Typography>
                        </AccordionDetails>
                    </AccordionGrey>

                    <AccordionGrey
                        square
                        expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                    >
                        <AccordionSummaryBorderBottom
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant='h5'>How much does Netflix cost?</Typography>
                        </AccordionSummaryBorderBottom>
                        <AccordionDetails>
                            <Typography variant='h6'>
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR54,000 to IDR186,000 a month. No extra costs, no contracts.
                            </Typography>
                        </AccordionDetails>
                    </AccordionGrey>

                    <AccordionGrey
                        square
                        expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                    >
                        <AccordionSummaryBorderBottom
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant='h5'>Where can I watch?</Typography>
                        </AccordionSummaryBorderBottom>
                        <AccordionDetails>
                            <Typography
                                variant='h6'
                                sx={{ mb: 2 }}
                            >
                                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            </Typography>
                            <Typography variant='h6'>
                                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </Typography>
                        </AccordionDetails>
                    </AccordionGrey>

                    <AccordionGrey
                        square
                        expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                    >
                        <AccordionSummaryBorderBottom
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant='h5'>How do I cancel?</Typography>
                        </AccordionSummaryBorderBottom>
                        <AccordionDetails>

                            <Typography variant='h6'>
                                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </Typography>
                        </AccordionDetails>
                    </AccordionGrey>

                    <AccordionGrey
                        square
                        expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
                    >
                        <AccordionSummaryBorderBottom
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant='h5'>What can I watch on Netflix?</Typography>
                        </AccordionSummaryBorderBottom>
                        <AccordionDetails>

                            <Typography variant='h6'>
                                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            </Typography>
                        </AccordionDetails>
                    </AccordionGrey>

                    <AccordionGrey
                        square
                        expanded={expanded === 'panel6'} onChange={handleChange('panel6')}
                    >
                        <AccordionSummaryBorderBottom
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant='h5'>Is Netflix good for kids?</Typography>
                        </AccordionSummaryBorderBottom>
                        <AccordionDetails>
                            <Typography
                                variant='h6'
                                sx={{ mb: 2 }}
                            >
                                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                            </Typography>
                            <Typography variant='h6'>
                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            </Typography>
                        </AccordionDetails>
                    </AccordionGrey>
                </Stack>

                <Container>

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


            </Container>
        </BottomBorderBox>
    )
}

export default FAQ