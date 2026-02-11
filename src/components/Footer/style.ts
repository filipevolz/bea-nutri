import { styled } from "styled-components";

export const FooterContainer = styled.footer`
    background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%);
    color: #1a1a1a;
    padding: 4rem 2rem 2rem;
    position: relative;
    overflow: hidden;
    border-top: 1px solid rgba(236, 72, 153, 0.2);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("/photos/beaProfiNewCapa.png");
        background-size: cover;
        background-position: center;
        opacity: 0.05;
        filter: blur(10px);
        z-index: 0;
    }
`;

export const FooterContent = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    gap: 3rem;
    position: relative;
    z-index: 1;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const FooterTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    color: #1a1a1a;
`;

export const FooterAddress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FooterAddressItem = styled.div`
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
`;

export const FooterCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
`;

export const FooterLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const FooterLogoImage = styled.img`
    height: 60px;
    width: auto;
`;

export const FooterBrand = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1a1a1a;
`;

export const FooterSocial = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
`;

export const FooterSocialIcon = styled.a`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(236, 72, 153, 0.1);
    color: #ec4899;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: rgba(236, 72, 153, 0.2);
        transform: translateY(-2px);
        color: #f472b6;
    }
`;

export const FooterButton = styled.div`
    margin-top: 0.5rem;
`;

export const FooterCopyright = styled.p`
    font-size: 0.875rem;
    color: #718096;
    margin: 0;
    margin-top: auto;
`;

export const FooterMap = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    position: relative;

    @media (max-width: 968px) {
        height: 250px;
    }

    iframe {
        width: 100%;
        height: 100%;
    }
`;

export const FooterMapLink = styled.a`
    position: absolute;
    bottom: 8px;
    left: 8px;
    background-color: white;
    color: #ec4899;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
    text-decoration: none;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    z-index: 10;

    &:hover {
        background-color: #f0f0f0;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        color: #f472b6;
    }
`;
