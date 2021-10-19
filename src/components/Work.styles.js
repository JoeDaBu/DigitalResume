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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
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

const SwiperWrapper = styled.div`
  justify-content: center;
  width: 5px;
`;

const NavArrowsNext = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: auto;
  right: 0;
  cursor: pointer;
`;

const NavArrowsPrev = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: auto;
  cursor: pointer;
`;

const useStyles = makeStyles({
  cardCon: {
    position: 'relative',
    md: 'w-1/6',
  },

  media: {
    // height: '100%',
    paddingTop: "100%",
    // paddingBottom: '50%'
    // padding: '5%',
    width: '100%',
    // paddingLeft: '10vh',
    backgroundColor: 'purple',
  },
  swiperContainer: {
    // backgroundColor: 'red',
    marginLeft: '80px', 
    marginRight: '80px', 
    position: 'unset',

    '& .swiper-pagination-bullet': {
      background: 'red'
    },
    '& .swiper-button-next-mine': {
      fontSize: '1rem !important',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 'auto',
      right: 0,
      cursor: 'pointer',
      backgroundColor: 'red',
    },
    '& .swiper-button-prev-mine': {
      fontSize: '1rem !important',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 'auto',
      cursor: 'pointer',
      backgroundColor: 'red',
    },
    '& .swiper-slide': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'

    }
  }
});

SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation]);
const images = [GithubIcon, YoutubeIcon, LinkedInIcon, InstagramIcon];

const PostCard = () => {
  const { media, swiperContainer, cardCon } = useStyles();
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <Card className={cardCon}>
      <Swiper
        grabCursor
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation= {{
          // nextEl: '.swiper-button-next-mine',
          // prevEl: '.swiper-button-prev-mine',
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        slidesPerView={1}
        spaceBetween={0}
        loop
        className={swiperContainer}
        watchOverflow={true}
        // centeredSlides={true}
      >
        {/* <SwiperSlide>
          <div>
            <p>Slide 2</p>
            <p>Slide 2</p>
            <p>Slide 2</p>
            <p>Slide 2</p>
            <p>Slide 2</p>
            <p>Slide 2</p>
          </div>
        </SwiperSlide> */}
        {images.map((image, index) => (
            <SwiperSlide key={index}>
              <CardMedia className={media} image={image}></CardMedia>
            </SwiperSlide>
          ))}
        <div className={ '.swiper-button-prev-mine' } ref={navigationPrevRef}>
          <img src={GithubIcon} alt={'test'} />
        </div>
        <div className={ '.swiper-button-next-mine' } ref={navigationNextRef}>
          <img src={GithubIcon} alt={'test'} />
        </div>
      </Swiper>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          tsetsstesgegegegetgsegegegeg gegsggesgg gsgseg
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
