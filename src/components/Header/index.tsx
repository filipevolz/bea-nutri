import { useState } from "react";
import { Button } from "../ui/button";
import { Menu as MenuIcon, MessageCircle, X } from "lucide-react";
import {
    HeaderContainer,
    Logo,
    Menu,
    MenuLink,
    MobileMenuButton,
    MobileMenu,
    MobileMenuOverlay,
    MobileMenuContent,
    MobileMenuLink,
    MobileMenuButtonWrapper
} from "./style";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMobileMenuOpen(false);
    };

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/5548988579612", "_blank");
        setIsMobileMenuOpen(false);
    };

    return (
        <HeaderContainer>
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
                <img src={`${import.meta.env.BASE_URL}logotipo2.svg`} alt="Logo" />
                <img src={`${import.meta.env.BASE_URL}logoMarca.svg`} alt="Marca" />
            </Logo>

            <Menu>
                <MenuLink onClick={() => scrollToSection("atendimentos")}>
                    Atendimentos
                </MenuLink>
                <MenuLink onClick={() => scrollToSection("planos")}>
                    Planos de Acompanhamento
                </MenuLink>
                <MenuLink onClick={() => scrollToSection("agendar")}>
                    Agendar
                </MenuLink>
                <MenuLink onClick={() => scrollToSection("faq")}>
                    FAQ
                </MenuLink>
                <Button
                    variant="default"
                    onClick={() => window.open("https://wa.me/5548988579612", "_blank")}
                    style={{
                        backgroundColor: "#ec4899",
                        color: "white",
                        borderRadius: "8px",
                        padding: "0.5rem 1.5rem",
                        fontWeight: 600,
                        border: "none",
                        marginLeft: "1rem"
                    }}
                >
                    <MessageCircle size={20} />
                    Fale Comigo
                </Button>
            </Menu>

            <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </MobileMenuButton>

            {isMobileMenuOpen && (
                <>
                    <MobileMenuOverlay onClick={() => setIsMobileMenuOpen(false)} />
                    <MobileMenu>
                        <MobileMenuContent>
                            <MobileMenuLink onClick={() => scrollToSection("atendimentos")}>
                                Atendimentos
                            </MobileMenuLink>
                            <MobileMenuLink onClick={() => scrollToSection("planos")}>
                                Planos de Acompanhamento
                            </MobileMenuLink>
                            <MobileMenuLink onClick={() => scrollToSection("agendar")}>
                                Agendar
                            </MobileMenuLink>
                            <MobileMenuLink onClick={() => scrollToSection("faq")}>
                                Perguntas frequentes
                            </MobileMenuLink>
                            <MobileMenuButtonWrapper>
                                <Button
                                    variant="default"
                                    onClick={handleWhatsAppClick}
                                    style={{
                                        backgroundColor: "#ec4899",
                                        color: "white",
                                        borderRadius: "8px",
                                        padding: "0.75rem 1.5rem",
                                        fontWeight: 600,
                                        border: "none",
                                        width: "100%"
                                    }}
                                >
                                    Fale Comigo
                                </Button>
                            </MobileMenuButtonWrapper>
                        </MobileMenuContent>
                    </MobileMenu>
                </>
            )}
        </HeaderContainer>
    )
}