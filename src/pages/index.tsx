import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/blogList"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 className="heading">Welcome To The Blogsite</h1>
        <BlogList />
        <Footer />
      </Layout>
    </div>
  )
}
