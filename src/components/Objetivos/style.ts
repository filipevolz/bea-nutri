import { styled } from "styled-components";

export const ObjetivosContainer = styled.section`
    padding: 2rem;
    background: transparent;
    max-width: 1400px;
    margin: 0 auto;
`;

export const ObjetivosTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 640px) {
        font-size: 1.25rem;
    }
`;

export const ObjetivosContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    align-items: start;

    @media (max-width: 968px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const ObjetivosListItem = styled.div`
    & > div {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
    }
`;

export const ObjetivosItemIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, #ec4899 0%, #f472b6 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
`;

export const ObjetivosImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;

    img {
        width: 100%;
        max-height: 70vh;
        object-fit: contain;
    }

    @media (max-width: 1200px) {
        display: none;
    }
`;
