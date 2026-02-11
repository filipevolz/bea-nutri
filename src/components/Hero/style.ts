import { styled } from "styled-components";

export const HeroContainer = styled.section`
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    max-width: 1400px;
    margin: 1rem auto;
    background: transparent;

    @media (max-width: 968px) {
        flex-direction: column;
        text-align: center;
        padding: 2rem 1rem;
        align-items: center;
        height: auto;
        min-height: auto;
    }
`;

export const HeroContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const HeroTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    color: #1a1a1a;
    margin: 0;

    @media (max-width: 968px) {
        font-size: 2.5rem;
    }

    @media (max-width: 640px) {
        font-size: 2rem;
    }
`;

export const HeroSubtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: #4a5568;
    margin: 0;
`;

export const HeroDescription = styled.p`
    font-size: 1.125rem;
    line-height: 1.7;
    color: #718096;
    margin: 0;

    strong {
        color: #1a1a1a;
        font-weight: 600;
    }
`;

export const HeroButtons = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const HeroImage = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
    min-height: 0;

    img {
        width: 100%;
        max-width: 600px;
        height: 100%;
        max-height: calc(100vh - 100px);
        object-fit: contain;
        object-position: bottom;
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.8));
    }

    @media (max-width: 968px) {
        display: none;
    }
`;
