import styled from 'styled-components'

export const SignInAndSignUpContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 45%);
    grid-gap: 10%;
    margin: 0px 25px 0 25px;
    
    @media (max-width:880px){
        grid-template-columns: 1fr;
    }
`