import styled, { css } from 'styled-components'

export const RecButton = styled.button`
    border-radius: 8px;
    background: rgba(235, 72, 23);
    border: transparent;
    color: white;
    padding: 5px 40px;
    font-size: 20px;
    font-weight: lighter;
    margin-top: 75px;

    &:hover {
        background: rgb(206, 64, 20);
    }

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.lucky && css`
        background: white;
        color: rgb(235, 72, 23);

        &:hover {
            background: rgb(235, 72, 23);
            color: white;
        }
  `}
`
