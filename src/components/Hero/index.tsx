import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { HeroContainer, HeroContent, HeroTitle, HeroSubtitle, HeroDescription, HeroButtons, HeroImage } from "./style";

export function Hero() {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroTitle>
                    Você treina, tenta se alimentar bem, mas sente que algo ainda está travando seus resultados?
                </HeroTitle>
                <HeroSubtitle>
                    Nutricionista Beatrice Orthmann
                </HeroSubtitle>
                <HeroDescription>
                    <strong>Alimentação saudável sozinha não garante evolução.</strong>
                </HeroDescription>
                <HeroButtons>
                    <Button 
                        size="lg"
                        style={{ backgroundColor: "#ec4899", color: "white" }}
                        onClick={() => window.open("https://wa.me/5548988579612", "_blank")}
                    >
                        <MessageCircle size={20} />
                        Fale Comigo
                    </Button>
                </HeroButtons>
            </HeroContent>
            <HeroImage>
                <img src="/photos/beaProfiNewCapa.png" alt="Beatrice Orthmann" />
            </HeroImage>
        </HeroContainer>
    );
}
