import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";
import {
    AgendarContainer,
    AgendarContent,
    AgendarImage,
    AgendarText,
    AgendarTitle,
} from "./style";

export function Agendar() {
    return (
        <AgendarContainer id="agendar">
            <AgendarContent>
                <AgendarImage>
                    <img src={`${import.meta.env.BASE_URL}photos/beaProfi.png`} alt="Beatrice Orthmann" />
                </AgendarImage>
                <AgendarText>
                    <AgendarTitle>
                        Não deixe para depois: Agende agora e comece sua transformação!
                    </AgendarTitle>
                        <Button
                            size="lg"
                            onClick={() => window.open("https://wa.me/5548988579612", "_blank")}
                            style={{
                                backgroundColor: "#ec4899",
                                color: "white",
                                borderRadius: "8px",
                                padding: "0.75rem 2rem",
                                fontWeight: 600,
                                border: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem"
                            }}
                        >
                            <MessageCircle size={24} />
                            Agendar pelo WhatsApp
                        </Button>
                </AgendarText>
            </AgendarContent>
        </AgendarContainer>
    );
}
