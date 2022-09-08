import NextImage from 'next/image'

const ImageLoader = ({ src, ...props }) => {
    return (
      <NextImage
        src={`/../../../content/posts/${src}`}
        {...props}
        placeholder="blur"
        layout="responsive"
      />
    )
  }

  export default ImageLoader