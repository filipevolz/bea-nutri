import { styled } from "styled-components";

export const IntroContainer = styled.section`
    padding: 2rem;
    background: transparent;
    max-width: 1400px;
    margin: 0 auto;
`;

export const IntroContent = styled.div<{ $reverse?: boolean }>`
    display: flex;
    align-items: center;
    gap: 4rem;
    flex-direction: ${props => props.$reverse ? 'row-reverse' : 'row'};
    margin-bottom: 4rem;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 968px) {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }
`;

export const IntroImage = styled.div`
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

export const IntroText = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const IntroTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.7;
    color: #4a5568;
    margin: 0;

    strong {
        color: #1a1a1a;
        font-weight: 700;
    }

    @media (max-width: 640px) {
        font-size: 1.25rem;
    }
`;

export const IntroDescription = styled.p`
    font-size: 1.125rem;
    line-height: 1.5;
    color: #4a5568;
    text-align: left; 

    strong {
        color: #1a1a1a;
        font-weight: 700;
    }
`;

export const IntroList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const IntroListItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;

    span {
        flex: 1;

        strong {
            color: #1a1a1a;
            font-weight: 600;
        }
    }
`;
