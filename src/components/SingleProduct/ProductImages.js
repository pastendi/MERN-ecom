import React, { useState } from 'react'
import { Wrapper } from '../../style/ProductImages'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])
  return (
    <Wrapper>
      <img src={main.url} alt='main image' className='img main' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.url}
              alt={image.filename}
              className={`${image.url === main.url ? 'active' : null}`}
              onClick={() => setMain(images[index])}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

export default ProductImages
