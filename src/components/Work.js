import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import React from "react";
import PostCard, { Header, SubWork, Wrapper } from "./Work.styles.js";

const Work = () => {
  return (
    <Wrapper>
      <Header>Work</Header>
      <Grid item container xs={12} justifyContent='center'>
        <Grid item xs={10}>
          <PostCard />
        </Grid>
      </Grid>
      <SubWork>
        test
      </SubWork>
    </Wrapper>
  );
};

export default Work;
