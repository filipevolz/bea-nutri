import { styled } from "styled-components";

export const FloatingButton = styled.a`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
    z-index: 1000;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
    }

    &:active {
        transform: scale(0.95);
    }

    @media (max-width: 640px) {
        width: 56px;
        height: 56px;
        bottom: 1.5rem;
        right: 1.5rem;
    }
`;

export const WhatsAppIcon = styled.svg`
    width: 36px;
    height: 36px;
    color: white;

    @media (max-width: 640px) {
        width: 32px;
        height: 32px;
    }
`;
