import * as React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./blog-post.modules.css"
import Layout from "../components/Layout"
// import Paper from "@material-ui/core/Paper";
// import ButtonAppBar from '../component/ButtonAppBar'

const BlogPosting = ({ pageContext }) => {
  const { data } = pageContext
  console.log(data)
  const some = JSON.parse(data.node.content.raw)
  console.log("some:", data.node.title)
  return (
    <Layout>
      <div className="main">
        <h1 className="title">{data.node.title}</h1>
        <h3 className="author">Author: {data.node.author}</h3>
        <img src={data.node.image.fluid.src} className="img" alt="blogPic" />
        <p className="text">{documentToReactComponents(some)}</p>
      </div>
    </Layout>
  )
  // <div>
  //   < ButtonAppBar/>
  // <Paper elevation={3} style={{textAlign: "center", padding: "70px 30px"}}>
  //   <div style={{padding: "20px"}}>
  //     <h1>{props.pageContext.data.node.title}</h1>
  //   </div>

  //   <div style={{paddingBottom: "20px"}}>
  //    <h4 style={{display: "inline-block", margin: "0 6px"}}>Published At:</h4>
  //     <small>{props.pageContext.data.node.updatedAt}</small>
  //   </div>

  //   <div className="blogpost__image">
  //     <img src={props.pageContext.data.node.featuredImage.fluid.src} />
  //   </div>

  //   <div style={{padding: "40px 60px", textAlign: "justify"}}>
  //     <p style={{padding: "20px 200px", textAlign: "center", fontWeight: "bold", lineHeight: "25px"}}>
  //     {props.pageContext.data.node.excerpt.excerpt}
  //     </p>
  //     <p>
  //       {documentToReactComponents(props.pageContext.data.node.bodyText.json)}
  //     </p>
  //   </div>
  // </Paper>
  // </div>
}

export default BlogPosting
