import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    height: 100px;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: relative;
    z-index: 1000;

    @media (max-width: 968px) {
        height: auto;
        min-height: 80px;
        padding: 1rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    img:first-child {
        width: 100px;
    }

    img:last-child {
        padding-top: 1rem;
        width: 200px;
    }

    @media (max-width: 968px) {
        img:first-child {
            width: 60px;
        }

        img:last-child {
            padding-top: 0.5rem;
            width: 120px;
        }
    }
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
        cursor: pointer;
    }

    @media (max-width: 968px) {
        display: none;
    }
`;

export const MenuLink = styled.button`
    background: none;
    border: none;
    color: #1a1a1a;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
        background-color: rgba(236, 72, 153, 0.1);
        color: #ec4899;
    }
`;

export const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: #1a1a1a;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    z-index: 1001;

    &:hover {
        background-color: rgba(236, 72, 153, 0.1);
        color: #ec4899;
    }

    @media (max-width: 968px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const MobileMenuOverlay = styled.div`
    display: none;

    @media (max-width: 968px) {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }
`;

export const MobileMenu = styled.div`
    display: none;

    @media (max-width: 968px) {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        width: 280px;
        height: 100vh;
        background-color: white;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;

export const MobileMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 1rem;
    height: 100%;
`;

export const MobileMenuLink = styled.button`
    background: none;
    border: none;
    color: #1a1a1a;
    font-size: 1.125rem;
    font-weight: 500;
    cursor: pointer;
    padding: 1rem;
    border-radius: 8px;
    text-align: left;
    transition: all 0.2s ease;

    &:hover {
        background-color: rgba(236, 72, 153, 0.1);
        color: #ec4899;
    }
`;

export const MobileMenuButtonWrapper = styled.div`
    margin-top: auto;
    padding-top: 2rem;
`;