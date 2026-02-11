import { Check, Sparkles, Heart, AlertCircle, MessageCircle } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
    IntroContainer,
    IntroContent,
    IntroImage,
    IntroText,
    IntroTitle,
    IntroDescription,
    IntroList,
    IntroListItem
} from "./style";

export function Intro() {
    const problemas = [
        "Você se sente **cansado, lutando contra o peso ou frustrado** por não conseguir atingir os resultados que deseja?",
        "Já tentou várias dietas e mesmo assim não consegue **manter os resultados**?",
        "A **ansiedade, a fome emocional e a culpa** após comer estão sabotando o seu progresso?",
        "Tem dificuldade em **conciliar uma alimentação saudável** com sua rotina agitada?",
        "Sente que **perdeu o controle** sobre suas escolhas alimentares e não sabe por onde começar?"
    ];

    const beneficios = [
        "Reeducação alimentar sem **radicalismos**",
        "Pensado para pessoas comuns, com **rotinas agitadas**, que precisam de **praticidade**",
        "**Planos personalizados** para você e sua rotina",
        "Visão 360°: **um olhar integral** para a sua saúde",
        "Ganhos além do peso: **melhora da disposição, energia e cognição**",
        "Relacionamento **leve e equilibrado** com a comida",
        "Sem deixar de socializar e **aproveitar os momentos da vida**",
        "É para virar a chave!: **autonomia alimentar** para que você nunca mais precise de dietas"
    ];

    return (
        <IntroContainer id="intro">
            <IntroContent $reverse={false}>
                <IntroImage>
                    <img src={`${import.meta.env.BASE_URL}photos/sobreMimNew1.png`} alt="Beatrice Orthmann" />
                </IntroImage>
                <IntroText>
                    <IntroList>
                        {problemas.map((problema, index) => {
                            // Processar texto para destacar palavras em negrito
                            const parts = problema.split(/(?=\*\*)|(?<=\*\*)/);
                            const processedText = parts.map((part, i) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={i}>{part.slice(2, -2)}</strong>;
                                }
                                return part;
                            });

                            return (
                                <IntroListItem key={index}>
                                    <AlertCircle size={20} color="#ec4899" />
                                    <span>{processedText}</span>
                                </IntroListItem>
                            );
                        })}
                    </IntroList>
                    <Card style={{ 
                        background: "linear-gradient(135deg, #fef3f8 0%, #fce7f3 100%)",
                        border: "1px solid #fbcfe8",
                        borderRadius: "12px",
                        padding: "1.5rem",
                        marginTop: '1.5rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0
                            }}>
                                <Heart size={24} color="white" fill="white" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <IntroTitle style={{ margin: 0, fontSize: '1.1rem' }}>
                                    Se alimentar não deveria ser uma fonte de estresse, e sim de <strong>prazer e equilíbrio!</strong>
                                </IntroTitle>
                                <p style={{ 
                                    margin: '0 0 0.5rem 0', 
                                    fontSize: '0.95rem', 
                                    color: '#6b7280',
                                    lineHeight: '1.6'
                                }}>
                                    Comece agora sua jornada para uma relação saudável com a alimentação. 
                                    Vamos juntos transformar sua saúde e bem-estar!
                                </p>
                                <Button 
                                    onClick={() => window.open("https://wa.me/5548988579612", "_blank")}
                                    style={{
                                        background: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
                                        color: "white",
                                        border: "none",
                                        padding: "0.75rem 1.5rem",
                                        borderRadius: "8px",
                                        fontSize: "0.95rem",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 4px 12px rgba(236, 72, 153, 0.3)"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(236, 72, 153, 0.4)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(236, 72, 153, 0.3)";
                                    }}
                                >
                                    <MessageCircle size={18} />
                                    Fale Comigo
                                </Button>
                            </div>
                        </div>
                    </Card>
                </IntroText>
            </IntroContent>

            <IntroContent $reverse={true}>
                <IntroImage>
                    <img src={`${import.meta.env.BASE_URL}photos/bea-profile-new.jpg`} alt="Beatrice Orthmann" />
                </IntroImage>
                <IntroText>
                    <IntroDescription>
                        Assuma o <strong>controle da sua alimentação e do seu corpo</strong> de forma
                        <strong> leve e definitiva</strong>.
                    </IntroDescription>
                    <IntroList>
                        {beneficios.map((beneficio, index) => {
                            // Processar texto para destacar palavras em negrito
                            const parts = beneficio.split(/(?=\*\*)|(?<=\*\*)/);
                            const processedText = parts.map((part, i) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={i}>{part.slice(2, -2)}</strong>;
                                }
                                return part;
                            });

                            return (
                                <IntroListItem key={index}>
                                    <Check size={20} color="#ec4899" />
                                    <span>{processedText}</span>
                                </IntroListItem>
                            );
                        })}
                    </IntroList>
                    <Card style={{ 
                        background: "linear-gradient(135deg, #fef3f8 0%, #fce7f3 100%)",
                        border: "1px solid #fbcfe8",
                        borderRadius: "12px",
                        padding: "1.5rem",
                        display: 'inline'
                    }}>
                        <div style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            float: 'left',
                            marginRight: '0.5rem'
                        }}>
                            <Sparkles size={24} color="white" />
                        </div>
                            <IntroDescription style={{ margin: 0 }}>
                                Com uma abordagem cientificamente embasada, você pode transformar sua
                                relação com a comida e conquistar o corpo que deseja!
                            </IntroDescription>
                    </Card>
                </IntroText>
            </IntroContent>
        </IntroContainer>
    );
}
