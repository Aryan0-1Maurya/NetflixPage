// mui
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


const BottomBorderBox = styled(Box)(({ theme }) => ({
    borderBottom: `8px solid ${theme.palette.secondary.main}`
}))


export default BottomBorderBox;