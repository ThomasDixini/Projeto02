import styled from "styled-components";

export const HistoryContainer = styled.main`
flex: 1;
padding: 3.5rem;

display: flex;
flex-direction: column;

h1 {
    color: ${props => props.theme['gray-700']};
    font-size: 1.5rem;
}

`

export const HistoryList = styled.div`
flex: 1;
overflow: auto;
margin-top: 2rem;

table {
    width: 100%;
    border-collapse: collapse;

    th {
        background-color: ${props => props.theme['gray-300']};
        color: ${props => props.theme['gray-700']};
        font-weight: bold;
        font-size: 0.875rem;
        line-height: 1.6;
        padding: 1rem;
        text-align: left;

        &:first-child {
            border-radius: 8px 0 0 0;
            padding-left: 2rem;
        }
        &:last-child {
            border-radius: 0 8px 0 0;
            padding-right: 2rem;
        }
    }

    td {
        background-color: #29292E;
        color: ${props => props.theme['gray-500']};
        border-top: 4px solid ${props => props.theme['gray-200']};
        padding: 1rem;
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child {
            padding-left: 2rem;
            width: 50%;
        }
    }
}
`