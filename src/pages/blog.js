import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here later on.</p>
            <ol>
                {data.allMarkdownRemark.edges.map(edge => {
                    const {date, title} = edge.node.frontmatter
                    return (
                        <li key={date}>
                            <h2>{title}</h2>
                            <p>{date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
