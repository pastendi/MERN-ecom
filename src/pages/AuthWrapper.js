import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import styled from 'styled-components'
import { Loading } from '../components/others'

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()
  if (isLoading) return <Loading />
  if (error)
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    )
  return <>{children}</>
}
const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`
export default AuthWrapper
