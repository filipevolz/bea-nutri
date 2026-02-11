import { styled } from "styled-components";

export const InstagramContainer = styled.section`
    padding: 4rem 2rem;
    background: transparent;
    max-width: 1400px;
    margin: 0 auto;
`;

export const InstagramContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 0 auto;
`;

export const InstagramTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
    text-align: center;

    @media (max-width: 640px) {
        font-size: 2rem;
    }
`;

export const InstagramEmbed = styled.div`
    width: 100%;
    aspect-ratio: 1;
    max-height: 1050px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    @media (max-width: 640px) {
        min-height: 300px;
    }
`;
