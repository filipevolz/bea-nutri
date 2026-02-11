import { Button } from "../ui/button";
import { MessageCircle, Instagram, Facebook } from "lucide-react";
import {
    FooterContainer,
    FooterContent,
    FooterSection,
    FooterTitle,
    FooterAddress,
    FooterAddressItem,
    FooterCenter,
    FooterLogo,
    FooterLogoImage,
    FooterBrand,
    FooterSocial,
    FooterSocialIcon,
    FooterButton,
    FooterCopyright,
    FooterMap,
    FooterMapLink
} from "./style";

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                {/* Seção Esquerda - Endereço */}
                <FooterSection>
                    <FooterTitle>Endereço</FooterTitle>
                    <FooterAddress>
                        <FooterAddressItem>
                            Max & Flora Center<br />
                            Bairro Trindade<br />
                            Região central de Florianópolis - SC
                        </FooterAddressItem>
                    </FooterAddress>
                </FooterSection>

                {/* Seção Central - Logo, Redes Sociais e CTA */}
                <FooterCenter>
                    <FooterLogo>
                        <FooterLogoImage src={`${import.meta.env.BASE_URL}logotipo2.svg`} alt="Logo" />
                        <FooterBrand>
                            <div style={{ fontFamily: 'cursive', fontSize: '1.5rem', fontWeight: 600 }}>
                                Beatrice Orthmann
                            </div>
                            <div style={{ fontSize: '0.875rem', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
                                NUTRICIONISTA
                            </div>
                        </FooterBrand>
                    </FooterLogo>

                    <FooterSocial>
                        <FooterSocialIcon
                            href="https://wa.me/5548988579612"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle size={24} />
                        </FooterSocialIcon>
                        <FooterSocialIcon
                            href="https://www.instagram.com/beaorthmann.nutri"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </FooterSocialIcon>
                        <FooterSocialIcon
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <Facebook size={24} />
                        </FooterSocialIcon>
                    </FooterSocial>

                    <FooterButton>
                        <Button
                            size="lg"
                            onClick={() => window.open("https://wa.me/5548988579612", "_blank")}
                            style={{
                                backgroundColor: "#ec4899",
                                color: "white",
                                borderRadius: "8px",
                                padding: "0.75rem 2rem",
                                fontWeight: 600,
                                border: "none"
                            }}
                        >
                            AGENDAR CONSULTA
                        </Button>
                    </FooterButton>

                    <FooterCopyright>
                        © 2026 Nutri Beatrice Orthmann. Todos os direitos reservados.
                    </FooterCopyright>
                </FooterCenter>

                {/* Seção Direita - Mapa */}
                <FooterSection>
                    <FooterMap>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.912954265932!2d-48.522854324536574!3d-27.596228176246456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273855a5beb00d%3A0xeb6c0f366f505a04!2sShopping%20Max%26Flora%20Center!5e0!3m2!1sen!2sbr!4v1770786540221!5m2!1sen!2sbr" width="600" height="450"
                        style={{ border: 0, borderRadius: "8px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização do consultório - Max & Flora Center, Trindade, Florianópolis"
                    />
                        <FooterMapLink 
                            href="https://share.google/6ZUxsWHBzOfz7eiNk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Ver mapa ampliado
                        </FooterMapLink>
                    </FooterMap>
                </FooterSection>
            </FooterContent>
        </FooterContainer>
    );
}
