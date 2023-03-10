import styled from 'styled-components'

export const Wrapper = styled.section`
  background: var(--primary-100);
  .header {
    h3 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  .services-center {
    margin-top: 2rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--primary-200);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--borderRadius);
  }
  .icon {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--white);
    color: var(--primary-500);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
