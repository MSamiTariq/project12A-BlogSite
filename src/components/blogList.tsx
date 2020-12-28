import React from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import { navigate, useStaticQuery, graphql } from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "15px",
      width: "80%",
      margin: "auto",
      maxWidth: "90ch",
      backgroundColor: "#f5f4f4",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    inline: {
      display: "inline",
    },
  })
)

export default function BlogList() {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogSite {
          edges {
            node {
              author
              content {
                raw
              }
              excerpt
              image {
                fluid {
                  src
                }
              }
              slug
              title
            }
          }
        }
      }
    `
  )

  const classes = useStyles()

  return (
    <List className={classes.root}>
      {data.allContentfulBlogSite.edges.map(edge => {
        return (
          <div
            className="list"
            onClick={() => {
              navigate(`/blog/${edge.node.slug}`)
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={edge.node.image.fluid.src} />
              </ListItemAvatar>
              <ListItemText
                primary={edge.node.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {edge.node.author}
                    </Typography>
                    <span>--</span>
                    {edge.node.excerpt}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        )
      })}
    </List>
  )
}
