import { getAllPosts, getPostBySlug } from "../lib/posts";
import Layout from "../components/layout/layout"
import PostMeta from "../components/post-meta/post-meta"
import PostContent from "../components/post-content/post-content"
import BuyMeCoffee from "../components/buymecoffee/buymecoffee"


const Post = ({ content, frontmatter }) => {
    const timeToRead = 5
    
    return (
      <Layout>
        <article>
        <PostMeta frontmatter={frontmatter} timeToRead={timeToRead} />
        <PostContent content={content} />
        </article>
        <BuyMeCoffee />
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