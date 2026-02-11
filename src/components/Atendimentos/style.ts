import { styled } from "styled-components";

export const AtendimentosContainer = styled.section`
    padding: 6rem 2rem;
    background: transparent;
    max-width: 1400px;
    margin: 0 auto;
`;

export const AtendimentosSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const AtendimentosHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-bottom: 2rem;

    @media (max-width: 968px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const AtendimentosHeaderImage = styled.div`
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

export const AtendimentosHeaderText = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const AtendimentosTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;

    @media (max-width: 640px) {
        font-size: 2rem;
    }
`;

export const AtendimentosDescription = styled.div`
    font-size: 1.125rem;
    line-height: 1.7;
    color: #4a5568;

    p {
        margin-bottom: 1.5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    strong {
        color: #1a1a1a;
        font-weight: 600;
    }
`;

export const AtendimentosList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const AtendimentosListItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 1rem;
    color: #4a5568;

    span {
        flex: 1;
    }
`;

export const AtendimentosImages = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const AtendimentosImageCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
`;

export const AtendimentosImageText = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    color: #4a5568;
    margin: 0;
`;
