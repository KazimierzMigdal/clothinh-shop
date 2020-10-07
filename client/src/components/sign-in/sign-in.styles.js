import styled from 'styled-components'


export const SignInContainer = styled.div`
     width: 100%;
    display: flex;
    flex-direction: column;
`

export const SignInTitle = styled.h2`
    margin: 10px 0;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width:580px){
        flex-direction: column;
        align-content: space-between;
        padding: 10px 0;
    }
`