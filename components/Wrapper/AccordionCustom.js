import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';


export const AccordionGrey = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
}))


export const AccordionSummaryBorderBottom = styled(AccordionSummary)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.common.black}`,
}))


