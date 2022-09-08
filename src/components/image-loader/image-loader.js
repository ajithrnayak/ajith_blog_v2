import NextImage from 'next/image'

const ImageLoader = ({ src, ...props }) => {
    console.log("source", src)
    console.log("props", props)

    return (
      <NextImage
        src={require(`../../../content/posts/${src}`)}
        {...props}
        placeholder="blur"
        layout="responsive"
      />
    )
  }

  export default ImageLoader