import { styled } from "styled-components";

export const AgendarContainer = styled.section`
    padding: 2rem;
    background: transparent;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
`;

export const AgendarContent = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 2rem;
    position: relative;

    @media (max-width: 968px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const AgendarImage = styled.div`
    flex: 0 0 300px;
    display: flex;
    align-items: flex-end;

    img {
        width: 100%;
        height: auto;
        object-fit: contain;
        max-height: 400px;
    }

    @media (max-width: 968px) {
        display: none;
    }
`;

export const AgendarText = styled.div`
    flex: 1;
    background: linear-gradient(135deg, rgba(253, 242, 248, 0.8) 0%, rgba(252, 231, 243, 0.8) 100%);
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(236, 72, 153, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: relative;
    z-index: 1;

    @media (max-width: 640px) {
        padding: 2rem 1.5rem;
    }
`;

export const AgendarTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
    text-align: center;

    @media (max-width: 640px) {
        font-size: 1.5rem;
    }
`;

export const AgendarButton = styled.div`
    width: 100%;
    max-width: 400px;
`;
