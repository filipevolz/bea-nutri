import { styled } from "styled-components";

export const CRMContainer = styled.section`
    padding: 2rem;
    background: transparent;
    max-width: 1400px;
    margin: 0 auto;
`;

export const CRMSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
`;

export const CRMTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
    max-width: 800px;

    @media (max-width: 640px) {
        font-size: 2rem;
    }
`;

export const CRMSubtitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 500;
    color: #4a5568;
    margin: 0;
`;

export const CRMDescription = styled.p`
    font-size: 1.125rem;
    line-height: 1.7;
    color: #718096;
    margin: 0;
    max-width: 700px;
`;

export const CRMFeatures = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    width: 100%;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const CRMFeatureCard = styled.div`
    height: 100%;
    
    & > div {
        height: 100%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        
        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
    }
`;
