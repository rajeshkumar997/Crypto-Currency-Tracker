import { Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import Carousel from './Carousel';

const BannerImg = styled('div')({
    backgroundImage: "url(./banner2.jpg)",
})

const BannerContent = styled(Container)`
    height: 400px;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    justify-content: space-around;
`

const TagLine = styled('div')({
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
})

const Banner = () => {
    return (
        <BannerImg>
            <BannerContent>
                <TagLine>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                        }}
                    >
                        Crypto Hunter
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Get all the Info regarding your favorite Crypto Currency
                    </Typography>
                </TagLine>
                <Carousel />
            </BannerContent>
        </BannerImg>
    )
}

export default Banner