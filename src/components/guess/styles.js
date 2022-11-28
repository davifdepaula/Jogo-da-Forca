import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 20px ;
    gap: 12px;
    
    input {
        font-size: 20px;
    }
    
     input:disabled{
        cursor: not-allowed;
    }
    
     button {
        font-size: 20px;
        background-color: #E1ECF4;
        border: 1px solid #7AA7C7;
        color: #3C76A1;
        cursor: pointer;
    }
    
     button:disabled{
        cursor: not-allowed;
    }
    

`