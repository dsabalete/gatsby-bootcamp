import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

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
                        fields {
                            slug
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
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map(edge => {
                    const {date, title} = edge.node.frontmatter
                    return (
                        <li key={date} className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{title}</h2>
                                <p>{date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
