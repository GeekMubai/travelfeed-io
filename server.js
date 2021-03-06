const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.static("public"));

    server.get("/@:user/feed", (req, res) => {
      const actualPage = "/tag";
      const queryParams = {
        sortby: "feed",
        tag: req.params.user
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/@:author/:permlink", (req, res) => {
      const actualPage = "/post";
      const queryParams = {
        author: req.params.author,
        permlink: req.params.permlink
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/:tag/@:author/:permlink", (req, res) => {
      const author = req.params.author;
      const permlink = req.params.permlink;
      res.redirect(`/@${author}/${permlink}`);
    });

    server.get("/created/:tag", (req, res) => {
      const actualPage = "/tag";
      const queryParams = {
        sortby: "created",
        tag: req.params.tag
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/hot/:tag", (req, res) => {
      const actualPage = "/tag";
      const queryParams = {
        sortby: "hot",
        tag: req.params.tag
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/trending/:tag", (req, res) => {
      const actualPage = "/tag";
      const queryParams = {
        sortby: "trending",
        tag: req.params.tag
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/featured/travelfeed", (req, res) => {
      const actualPage = "/tag";
      const queryParams = {
        sortby: "featured",
        tag: "travelfeed"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/blog", (req, res) => {
      const actualPage = "/blog";
      const queryParams = {
        author: "travelfeed"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/@travelfeed", (req, res) => {
      res.redirect("/blog");
    });

    server.get("/@:author", (req, res) => {
      const actualPage = "/blog";
      const queryParams = {
        author: req.params.author
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/dashboard/publish", (req, res) => {
      const actualPage = "/dashboard";
      const queryParams = {
        page: "publish"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/dashboard/drafts", (req, res) => {
      const actualPage = "/dashboard";
      const queryParams = {
        page: "drafts"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/dashboard/posts", (req, res) => {
      const actualPage = "/dashboard";
      const queryParams = {
        page: "posts"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/dashboard/comments", (req, res) => {
      const actualPage = "/dashboard";
      const queryParams = {
        page: "comments"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/dashboard/replies", (req, res) => {
      const actualPage = "/dashboard";
      const queryParams = {
        page: "replies"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/dashboard/notifications", (req, res) => {
      const actualPage = "/dashboard";
      const queryParams = {
        page: "notifications"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/dashboard/bookmarks", (req, res) => {
      const actualPage = "/dashboard";
      const queryParams = {
        page: "bookmarks"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/dashboard/profile", (req, res) => {
      const actualPage = "/dashboard";
      const queryParams = {
        page: "profile"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/dashboard/wallet", (req, res) => {
      const actualPage = "/dashboard";
      const queryParams = {
        page: "stats"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/dashboard/settings", (req, res) => {
      const actualPage = "/dashboard";
      const queryParams = {
        page: "settings"
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`Listening on Port ${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
