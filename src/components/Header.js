import { AppBar, Container, MenuItem, Select, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from '../CryptoContext';

const Navbar = styled(Typography)`
    flex: 1;
    color: gold;
    font-family: Montserrat;
    font-weight: bold;
    cursor: pointer;
`

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Header = () => {
    const navigate = useNavigate();
    const { currency, setCurrency } = CryptoState();

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Navbar variant="h6" onClick={() => navigate('/')}>Crypto Hunter</Navbar>
                        <Select variant='outlined'
                            style={{ width: 100, height: 40, marginLeft: 15 }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header