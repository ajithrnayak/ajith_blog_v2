import { getAllPosts, getPostBySlug } from "../lib/posts";
import Layout from "../components/layout/layout"
import PostMeta from "../components/post-meta/post-meta"
import PostContent from "../components/post-content/post-content"
import BuyMeCoffee from "../components/buymecoffee/buymecoffee"
import { DiscussionEmbed } from "disqus-react"

const Post = ({ content, frontmatter }) => {

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: frontmatter.path },
  }

    return (
      <Layout>
        <article>
        <PostMeta frontmatter={frontmatter} />
        <PostContent content={content} />
        </article>
        <BuyMeCoffee />
        <DiscussionEmbed {...disqusConfig} />
      </Layout>
    )
  }
  
  export default Post

  export async function getStaticProps({ params }) {
    const { content, frontmatter } = getPostBySlug(params.slug);
    
    return {
      props: {
        content,
        frontmatter,
      },
    };
  }

  export async function getStaticPaths() {
    const allPosts = getAllPosts();
   
    // create paths with `slug` param
    const paths = allPosts.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
        };
    })

    return {
      paths: paths,
      fallback: false,
    };
  }