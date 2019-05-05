import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                  fields: publishedDate,
                  order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map(edge => {
                    const {title, slug, publishedDate} = edge.node
                    return (
                        <li key={slug} className={blogStyles.post}>
                            <Link to={`/blog/${slug}`}>
                                <h2>{title}</h2>
                                <p>{publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
