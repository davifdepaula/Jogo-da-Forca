import styled from "styled-components"

export const Forca = styled.div`
    display: flex;
    align-items: flex-start ;
    justify-content: space-between;

    img {
        width: 400px;
    }

    button {
        background-color: #27AE60;
        color: #ffffff;
        width: 200px;
        height: 60px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 20px;
        margin-top: 30px; 
    }

    .inGame {
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }

    .string {
        font-size: 30px;
    }
    
    .red {
        color: red
    }
    
    .green {
        color: green
    }
`