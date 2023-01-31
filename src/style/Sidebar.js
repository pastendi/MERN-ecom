import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .logo {
    justify-self: center;
    width: 80px;
    height: 60px;
  }
  .close-btn {
    border: transparent;
    background: transparent;
    font-size: 2rem;
    margin-top: 1rem;
    color: red;
    &:hover {
      color: var(--dark-red);
    }
  }
  .links {
    margin-bottom: 2rem;
    a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: var(--grey-600);
      transition: var(--transition);
      letter-spacing: var(--letterSpacing);
      &:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--grey-800);
        color: var(--grey-200);
      }
    }
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--backgroundColor);
    transform: translate(-100%);
    transition: var(--transition);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 1000;
  }
  @media (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`
