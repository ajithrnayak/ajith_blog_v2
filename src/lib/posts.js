import matter from 'gray-matter'
import { parseISO, format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'content', 'posts')
  
export function getAllPosts() {
    const slugs = fs.readdirSync(postsDirectory)
    const allPosts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1.frontmatter.date) > new Date(post2.frontmatter.date) ? -1 : 1
    )
    
    return allPosts
  }

export function getPostBySlug(slug) {
    let dirPath = join(postsDirectory, slug)
    const fullPath = join(dirPath, `index.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const date = format(parseISO(data.date), 'MMMM dd, yyyy')

    return { slug: slug, frontmatter: { ...data, date }, content }
  }
