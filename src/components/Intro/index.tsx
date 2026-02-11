import { Check, Sparkles } from "lucide-react";
import { Card, CardContent } from "../ui/card";
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
                    <IntroTitle>
                        Você se sente <strong>cansado, lutando contra o peso ou frustrado</strong> por não
                        conseguir atingir os resultados que deseja? Já tentou várias dietas e
                        mesmo assim não consegue <strong>manter os resultados</strong>? A ansiedade, a
                        fome emocional e a culpa após comer estão
                        <strong> sabotando o seu progresso</strong>? Se alimentar não deveria ser uma fonte
                        de estresse, e sim de <strong>prazer e equilíbrio!</strong>
                    </IntroTitle>
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
