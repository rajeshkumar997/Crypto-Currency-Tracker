import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoinInfo from '../components/CoinInfo';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { createTheme, styled } from '@mui/material/styles';
import { LinearProgress, Typography } from '@mui/material';
import HTMLReactParser from 'html-react-parser';
import { numberWithCommas } from '../components/Banner/Carousel';

const theme = createTheme();

const Container = styled('div')({
    display: "flex",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
    }
});

const Sidebar = styled('div')({
    width: "30%",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
})

const Heading = styled(Typography)`
    font-weight: bold;
    margin-bottom: 20px;
    font-family: Montserrat;
`;

const Description = styled(Typography)`
    width: 100%;
    font-family: Montserrat;
    padding: 25px;
    padding-bottom: 15px;
    padding-top: 0px;
    text-align: justify;
`;

const Marketdata = styled('div')({
    alignSelf: "start",
    padding: 25,
    paddingTop: 10,
    width: "100%",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
        alignItems: "start",
    },
});

const CoinPage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();

    const { currency, symbol } = CryptoState();

    const fetchCoin = async () => {
        const { data } = await axios.get(SingleCoin(id));

        setCoin(data);
    };
    console.log(coin);

    useEffect(() => {
        fetchCoin();
    }, []);

    if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

    return (
        <Container>
            <Sidebar>
                <img
                    src={coin?.image.large}
                    alt={coin?.name}
                    height="200"
                    style={{ marginBottom: 20 }}
                />
                <Heading variant="h3">
                    {coin?.name}
                </Heading>
                <Description variant="subtitle1">
                    {coin && coin.description && coin.description.en && HTMLReactParser(coin.description.en.split(". ")[0])}
                </Description>

                <Marketdata>
                    <span style={{ display: "flex" }}>
                        <Heading variant="h5">
                            Rank:
                        </Heading>
                        &nbsp; &nbsp;
                        <Typography
                            variant="h5"
                            style={{
                                fontFamily: "Montserrat",
                            }}
                        >
                            {numberWithCommas(coin?.market_cap_rank)}
                        </Typography>
                    </span>
                    <span style={{ display: "flex" }}>
                        <Heading variant="h5" >
                            Current Price:
                        </Heading>
                        &nbsp; &nbsp;
                        <Typography
                            variant="h5"
                            style={{
                                fontFamily: "Montserrat",
                            }}
                        >
                            {symbol}{" "}
                            {numberWithCommas(
                                coin?.market_data.current_price[currency.toLowerCase()]
                            )}
                        </Typography>
                    </span>
                    <span style={{ display: "flex" }}>
                        <Heading variant="h5" >
                            Market Cap:
                        </Heading>
                        &nbsp; &nbsp;
                        <Typography
                            variant="h5"
                            style={{
                                fontFamily: "Montserrat",
                            }}
                        >
                            {symbol}{" "}
                            {numberWithCommas(
                                coin?.market_data.market_cap[currency.toLowerCase()]
                                    .toString()
                                    .slice(0, -6)
                            )}
                            M
                        </Typography>
                    </span>
                </Marketdata>
            </Sidebar>
            {/* {chart} */}
            <CoinInfo coin={coin} />
        </Container>
    )
}

export default CoinPage