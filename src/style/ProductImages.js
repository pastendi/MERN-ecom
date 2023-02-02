import styled from 'styled-components'

export const Wrapper = styled.section`
  img {
    border-radius: var(--borderRadius);
  }
  .main {
    height: 600px;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--primary-500);
  }
  @media (max-width: 576px) {
    .main {
      height: 400px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`
