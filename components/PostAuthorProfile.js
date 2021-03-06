import React, { Fragment, Component } from "react";
import "@babel/polyfill";
import { client } from "../helpers/client";
import PropTypes from "prop-types";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import FollowButton from "./FollowButton";

class PostAuthorProfile extends Component {
  state = {
    author: this.props.author,
    profiledesc: "A TravelFeed author."
  };
  async getProfile() {
    const acc = await client.database.getAccounts([this.state.author]);
    if (acc[0].json_metadata != "") {
      const json = JSON.parse(acc[0].json_metadata);
      const profiledesc =
        json.profile.about != "" ? json.profile.about : this.state.profiledesc;
      this.setState({ profiledesc: profiledesc });
    }
  }
  componentDidMount() {
    this.getProfile();
  }
  render() {
    return (
      <div className="text-center">
        <Typography variant="h5" className="p-2">
          Written by:
        </Typography>
        <Link
          as={`/@${this.props.author}`}
          href={`/blog?author=${this.props.author}`}
          passHref
        >
          <a>
            <div className="pb-2">
              <img
                style={{ cursor: "pointer" }}
                src={`https://steemitimages.com/u/${this.props.author}/avatar`}
                width="80"
                height="80"
                className="rounded-circle"
              />
            </div>
          </a>
        </Link>
        <Fragment>
          <div>
            <Link
              as={`/@${this.props.author}`}
              href={`/blog?author=${this.props.author}`}
              passHref
            >
              <a>
                <Typography variant="h6" className="text-dark cpointer">
                  {this.props.author}
                </Typography>
              </a>
            </Link>
          </div>
          <p className="p-2">{this.state.profiledesc}</p>
        </Fragment>
        <div>
          <FollowButton author={this.props.author} btnstyle="default" />
        </div>
      </div>
    );
  }
}

PostAuthorProfile.propTypes = {
  author: PropTypes.string
};

export default PostAuthorProfile;
