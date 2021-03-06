import React, { Fragment, Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Helmet from "react-helmet";

class Bookmarks extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>{"Bookmarks | TravelFeed: The Travel Community"}</title>
        </Helmet>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          className="pt-4 pb-4"
        >
          <Grid item lg={7} md={8} sm={11} xs={12}>
            <Card>
              <CardContent>
                <h1>Bookmarks</h1>
                <p>Bookmarking posts will be available soon.</p>
              </CardContent>
            </Card>
          </Grid>{" "}
        </Grid>
      </Fragment>
    );
  }
}

export default Bookmarks;
