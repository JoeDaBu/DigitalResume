import styled from "styled-components";
import React, {useRef} from 'react'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  SpongeBob,
  YoutubeIcon,
} from "../images";
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Pagination,
  Navigation,
} from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import YoutubeImage from "./Iframe Projects";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;  
`;

export const Header = styled.h1`
  font-size: 6vh;
  margin-top: -10px;
  padding: 0px;
  margin-bottom: 4vh;
`;

const useStyles = makeStyles({
  swipCard: {
    background: 'transparent',
  },
  cardCon: {
    background: 'transparent',
  },
  media: {
    paddingTop: "100.0%",
    marginBottom: '0',
    height: '0',
  },
  proDescription : {
    background: 'white',
  },
  swiperContainer: {
    width: '100%',
    background: 'transparent',
    '& .swiper-pagination-bullet': {
      marginTop: '0',
      background: 'black',
    },
    '& .swiper-button-prev-mine': {
      fontSize: '1rem !important',
      cursor: 'pointer',
      backgroundColor: 'yellow',
    },
    '& .swiper-button-next-mine': {
      fontSize: '1rem !important',
      cursor: 'pointer',
      backgroundColor: 'green',
    },
    '& .swiper-slide': {
      width: '100%',
      background: 'transparent',
    }
  }
});

SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation]);
const images = [GithubIcon, YoutubeIcon, LinkedInIcon, InstagramIcon];

const PostCard = () => {
  const { swiperContainer, cardCon, swipCard, proDescription } = useStyles();
  return (
    <div className={cardCon}>
      <Card className={swipCard}>
        <Swiper
          grabCursor
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation
          loop
          className={swiperContainer}
        >
          {images.map((image, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <YoutubeImage>
                </YoutubeImage>
              </SwiperSlide>
            ))}
        </Swiper>

        <CardContent className={proDescription}>
          <Typography variant="body2" color="textSecondary" component="p">
            tsetsstesgegegegetgsegegegeg gegsggesgg gsgseg
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostCard;
