import * as React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./blog-post.modules.css"
import Layout from "../components/layout"

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
}

export default BlogPosting
