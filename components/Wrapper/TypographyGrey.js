import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


const TypographyGreyAnchor = styled(Typography)(() => ({
    textDecoration: 'none',
    color: grey[600]
}))

export default TypographyGreyAnchor