import styled from "styled-components"

export const KeyBoard = styled.div` 
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: 70px auto;
    gap: 10px;
    width: 72%;

    button{
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    
    button:disabled{
        cursor: not-allowed;
        background-color: #798A9F;
    }
`