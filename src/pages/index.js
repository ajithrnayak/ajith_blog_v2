import { getAllPosts } from "../lib/posts";
import Layout from "../components/layout/layout"
 
export default function Home({ allPosts }) {
  if (!allPosts || !allPosts.length) return

  return (
    <Layout>
  
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