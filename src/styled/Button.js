import styled from 'styled-components'

export const Button=styled.button`
    /* all:unset; */
    
    width:220px;
    height:44px;
    background:black;
    color:white;
    padding:10px 18px;
    /* gap:10px; */
    border:none;
    border-radius:5px;
    font-size:16px;
    margin-top:20px;
    border:1px solid transparent;
    transition:0.3s background ease-in;
    cursor:pointer;
    &:hover{
        background:white;
        border:1px solid black;
        color:black;
        transition:0.3s background ease-in;
    }
`;
export const OutlineButton=styled(Button)`
    background:white;
    color:black;
    border:1px solid black;
    
    &:hover{
        background:black;
        border:1px solid transparent;
        color:white;
        /* transition:0.3s background ease-in; */
    }
`;