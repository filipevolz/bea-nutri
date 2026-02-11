import { styled } from "styled-components";

export const SobreMimContainer = styled.section`
    padding: 2rem;
    background: transparent;
    max-width: 1400px;
    margin: 0 auto;
`;

export const SobreMimContent = styled.div<{ $reverse?: boolean }>`
    display: flex;
    align-items: center;
    gap: 4rem;
    flex-direction: ${props => props.$reverse ? 'row-reverse' : 'row'};

    @media (max-width: 968px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const SobreMimImage = styled.div`
    flex: 1;
    max-width: 500px;

    img {
        width: 100%;
        height: auto;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        object-fit: cover;
    }

    @media (max-width: 968px) {
        max-width: 100%;
    }
`;

export const SobreMimText = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const SobreMimTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;

    @media (max-width: 640px) {
        font-size: 2rem;
    }
`;

export const SobreMimDescription = styled.p`
    font-size: 1.125rem;
    line-height: 1.7;
    color: #4a5568;
    margin: 0;
`;

export const SobreMimLink = styled.a`
    color: #ec4899;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
        color: #f472b6;
        text-decoration: underline;
    }
`;
