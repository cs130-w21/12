import styled, { css } from 'styled-components'

export const RecButton = styled.button`
    border-radius: 8px;
    background: rgba(235, 72, 23);
    border: transparent;
    color: white !important;
    padding: 5px 40px;
    font-size: 20px;
    font-weight: lighter;
    margin-top: 75px;

    &:hover {
        background: rgb(206, 64, 20);
    }

    @media only screen and (max-width: 768px){
        margin-top: 10px;
    }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.lucky && css`
        background: white;
        border: 1px solid rgba(235, 72, 23);
        color: rgb(235, 72, 23) !important;
        &:hover {
            background: rgb(235, 72, 23);
            color: white !important;
        }
  `}
`

export const StyledInput = styled.input`
    border-radius: 5px;
    border: 1px solid rgba(235, 73, 23, 0.72);
    padding: 12px 50px 12px 15px;
    width: 30vw;
    min-width: 150px;
    max-width: 450px;
    display: ;block;
    color: rgba(235, 73, 23, 0.72);

    &:focus{
        outline: none;
        box-shadow: 0 0 8px rgba(235, 73, 23, 0.72);
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`
