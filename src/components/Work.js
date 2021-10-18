import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import React from "react";
import PostCard from "./Work.styles.js";
const Work = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ height: "25vh", display: "grid", placeItems: "center" }}
        >
          <Typography variant="h3">Carousel</Typography>
        </Grid>
        <Grid item container xs={12} justifyContent='center'>
          <Grid item xs={10}>
            <PostCard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Work;
