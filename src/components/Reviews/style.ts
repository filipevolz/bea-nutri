import { styled } from "styled-components";

export const ReviewsContainer = styled.section`
    padding: 2rem;
    background: transparent;
    max-width: 1400px;
    margin: 0 auto;
`;

export const ReviewsTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 3rem;
`;

export const ReviewsCarousel = styled.div`
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    padding: 1rem 0;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0 transparent;

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #cbd5e0;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #a0aec0;
    }
`;

export const ReviewCard = styled.div`
    flex: 0 0 calc(100vw - 4rem);
    max-width: 400px;
    scroll-snap-align: start;
    height: 100%;

    @media (min-width: 640px) {
        flex: 0 0 400px;
    }
`;

export const ReviewHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
`;

export const ReviewAuthor = styled.div`
    font-size: 1.125rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
`;

export const ReviewRating = styled.div`
    display: flex;
    gap: 0.25rem;
`;

export const ReviewText = styled.p`
    font-size: 0.95rem;
    line-height: 1.6;
    color: #4a5568;
    margin: 0;
`;

export const ReviewAvatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
`;
