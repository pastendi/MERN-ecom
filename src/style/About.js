import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: calc(100vh - 10rem);
  .about {
    display: grid;
    padding: 1rem;
    img {
      height: 400px;
      border-radius: var(--borderRadius);
    }
    h3 {
      margin-top: 1rem;
    }
    p {
      text-align: justify;
      line-height: 2;
    }
  }
  @media (min-width: 992px) {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0px;
    .about {
      gap: 4rem;
      grid-template-columns: 1fr 1fr;
      h3 {
        margin-top: 0;
      }
    }
  }
`
