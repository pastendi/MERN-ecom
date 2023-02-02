import styled from 'styled-components'

export const Wrapper = styled.section`
  background: var(--light-red);

  p {
    margin-bottom: 1rem;
  }
  .contact-form {
    width: 90vh;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 2rem;
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      margin-top: 5rem;
    }
  }
`
