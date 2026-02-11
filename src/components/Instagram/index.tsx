import {
    InstagramContainer,
    InstagramTitle,
    InstagramContent,
    InstagramEmbed
} from "./style";

export function Instagram() {
    return (
        <InstagramContainer>
            <InstagramContent>
                <InstagramTitle>Siga-me no Instagram</InstagramTitle>
                <InstagramEmbed>
                    <iframe
                        src="https://www.instagram.com/beaorthmann.nutri/embed"
                        width="100%"
                        height="600"
                        style={{ border: 0, borderRadius: "12px" }}
                        scrolling="no"
                        allowTransparency
                        title="Instagram - Beatrice Orthmann"
                    />
                </InstagramEmbed>
            </InstagramContent>
        </InstagramContainer>
    );
}
