import { getAllPosts } from "../lib/posts";
import Layout from "../components/layout/layout"
import Feed from "../components/feed/feed"

export default function Home({ allPosts }) {
  if (!allPosts || !allPosts.length) return

  return (
    <Layout>
    <Feed posts={allPosts} />
    </Layout>
  )
}
 
export async function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      allPosts,
    },
  }
}