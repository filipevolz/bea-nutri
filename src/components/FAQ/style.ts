import { styled } from "styled-components";

export const FAQContainer = styled.section`
    padding: 2rem;
    background: transparent;
    max-width: 1400px;
    margin: 0 auto;
`;

export const FAQContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
`;

export const FAQTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
    text-align: center;

    @media (max-width: 640px) {
        font-size: 2rem;
    }
`;
