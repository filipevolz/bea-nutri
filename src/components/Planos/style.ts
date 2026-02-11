import { styled } from "styled-components";

export const PlanosContainer = styled.section`
    padding: 2rem;
    background: transparent;
    max-width: 1400px;
    margin: 0 auto;
`;

export const PlanosSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
`;

export const PlanosTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
    max-width: 800px;

    @media (max-width: 640px) {
        font-size: 2rem;
    }
`;

export const PlanosSubtitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 500;
    color: #4a5568;
    margin: 0;
`;

export const PlanosDescription = styled.p`
    font-size: 1.125rem;
    line-height: 1.7;
    color: #718096;
    margin: 0;
    max-width: 700px;
`;

export const PlanosGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        max-width: 500px;
    }
`;

export const PlanoCard = styled.div<{ $popular?: boolean }>`
    position: relative;
    height: 100%;
    
    & > div {
        height: 100%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: ${props => props.$popular ? "2px solid #ec4899" : "1px solid #e2e8f0"};
        
        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }
    }
`;

export const PlanoPrice = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

export const PlanoFeatures = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
`;

export const PlanoFeatureItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: #4a5568;
    
    span {
        flex: 1;
    }
`;
