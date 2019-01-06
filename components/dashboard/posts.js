import React, { Fragment, Component } from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import PostGrid from "../PostGrid";

class Posts extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>{"My Posts | TravelFeed: The Travel Community"}</title>
        </Helmet>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          className="pt-4 pb-4"
          style={{ paddingLeft: "75px" }}
        >
          <PostGrid
            type="blog"
            filter={this.state.user}
            poststyle="list"
            position={0}
          />
        </Grid>
      </Fragment>
    );
  }
}

export default Posts;
