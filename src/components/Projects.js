import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import React from "react";
import PostCard, { Header, Wrapper } from "./Projects.styles.js";

const Projects = () => {
  return (
    <Wrapper>
      <Header>Projects</Header>
      <Grid item container xs={12} justifyContent='center'>
        <Grid item xs={10}>
          <PostCard />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Projects;