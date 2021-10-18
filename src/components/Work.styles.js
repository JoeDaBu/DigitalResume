import styled from "styled-components";
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
`;

const useStyles = makeStyles({
  media: {
    height: '100%',
    // paddingTop: "100%",
    // paddingBottom: '50%'
    padding: '5%',
    // width: '80%',
    // paddingLeft: '10vh',
    backgroundColor: 'purple',
  },
  swiperContainer: {
    // paddingBottom: '3rem',
    backgroundColor: 'red',
    height: '50vh',
    width: '100%',

    '& .swiper-pagination-bullet': {
      background: 'red'
    },
    '& .swiper-button-next:after': {
      fontSize: '1rem !important',
      // transform: 'translateX(25px)'
    },
    '& .swiper-button-prev:after': {
      fontSize: '1rem !important'
    },
    '& .swiper-slide': {
      width: '12rem',
      background: 'yellow',
      // margin: '1rem',
      // justifyContent: 'center',
      // alignContent: 'center',
    }
  }
});

SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation]);
const images = [GithubIcon, YoutubeIcon, LinkedInIcon, InstagramIcon];

const PostCard = () => {
  const { media, swiperContainer } = useStyles();
  return (
    <Card>
      {/* <CardHeader
        avatar={<Avatar src={SpongeBob} />}
        title="Just a carousel"
        subheader={new Date().toDateString()}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      /> */}

      <Swiper
        grabCursor
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation
        loop
        className={swiperContainer}
        centeredSlides={true}
      >
        <SwiperWrapper>
          {images.map((image, index) => (
            <SwiperSlide key={index} centerSlides={true}>
              <CardMedia className={media} image={image}></CardMedia>
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </Swiper>

      {/* <CardActions disableSpacing> */}
        {/* <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          tsetsstesgegegegetgsegegegeg gegsggesgg gsgseg
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
