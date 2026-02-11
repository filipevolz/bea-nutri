import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { 
    PlanosContainer, 
    PlanosSection, 
    PlanosTitle, 
    PlanosSubtitle, 
    PlanosDescription,
    PlanosGrid,
    PlanoCard,
    PlanoPrice,
    PlanoFeatures,
    PlanoFeatureItem
} from "./style";
import { Check } from "lucide-react";

export function Planos() {
    const planos = [
        {
            name: "Acompanhamento Mensal",
            description: "Ideal para quem busca resultados consistentes",
            price: "R$ 350",
            period: "/mês",
            features: [
                "1 consulta por mês",
                "Plano alimentar personalizado",
                "Avaliação da composição corporal",
                "Acompanhamento via aplicativo",
                "Suporte online entre consultas",
                "Feedback quinzenal",
                "Ajustes no plano conforme evolução"
            ],
            popular: false
        },
        {
            name: "Acompanhamento Quinzenal",
            description: "Para quem precisa de suporte mais frequente",
            price: "R$ 650",
            period: "/mês",
            features: [
                "2 consultas por mês",
                "Plano alimentar personalizado",
                "Avaliação da composição corporal",
                "Acompanhamento via aplicativo",
                "Suporte online prioritário",
                "Feedback semanal",
                "Ajustes frequentes no plano",
                "Orientações comportamentais"
            ],
            popular: true
        },
        {
            name: "Acompanhamento Semanal",
            description: "Para casos que exigem atenção intensiva",
            price: "R$ 1.200",
            period: "/mês",
            features: [
                "4 consultas por mês",
                "Plano alimentar personalizado",
                "Avaliação da composição corporal",
                "Acompanhamento via aplicativo",
                "Suporte online diário",
                "Feedback contínuo",
                "Ajustes semanais no plano",
                "Trabalho comportamental intensivo",
                "Prioridade no agendamento"
            ],
            popular: false
        }
    ];

    return (
        <PlanosContainer id="planos">
            <PlanosSection>
                <PlanosTitle>
                    Escolha o plano de acompanhamento ideal para você
                </PlanosTitle>
                <PlanosSubtitle>
                    Planos flexíveis adaptados às suas necessidades
                </PlanosSubtitle>
                <PlanosDescription>
                    O Conselho Federal de Nutricionistas não permite a divulgação pública dos valores. 
                    Entre em contato para conhecer os valores e escolher o melhor plano para você.
                </PlanosDescription>

                <PlanosGrid>
                    {planos.map((plano, index) => (
                        <PlanoCard key={index} $popular={plano.popular}>
                            <Card style={{ height: "100%", position: "relative", display: "flex", flexDirection: "column" }}>
                                {plano.popular && (
                                    <Badge 
                                        style={{ 
                                            position: "absolute", 
                                            top: "-12px", 
                                            left: "50%", 
                                            transform: "translateX(-50%)",
                                            background: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
                                            color: "white",
                                            border: "none",
                                            zIndex: 10
                                        }}
                                    >
                                        Mais Popular
                                    </Badge>
                                )}
                                <CardHeader>
                                    <CardTitle style={{ fontSize: "1.5rem" }}>{plano.name}</CardTitle>
                                    <CardDescription>{plano.description}</CardDescription>
                                    <PlanoPrice>
                                        <span style={{ fontSize: "2.5rem", fontWeight: "700" }}>
                                            {plano.price}
                                        </span>
                                        {plano.period && (
                                            <span style={{ fontSize: "1rem", color: "#718096" }}>
                                                {plano.period}
                                            </span>
                                        )}
                                    </PlanoPrice>
                                </CardHeader>
                                <CardContent style={{ flex: 1 }}>
                                    <PlanoFeatures>
                                        {plano.features.map((feature, featureIndex) => (
                                            <PlanoFeatureItem key={featureIndex}>
                                                <Check size={20} color="#ec4899" />
                                                <span>{feature}</span>
                                            </PlanoFeatureItem>
                                        ))}
                                    </PlanoFeatures>
                                </CardContent>
                                <CardFooter style={{ marginTop: "auto" }}>
                                    <Button 
                                        variant={plano.popular ? "default" : "outline"} 
                                        size="lg" 
                                        style={{ width: "100%" }}
                                        onClick={() => window.open("https://wa.me/5548988579612", "_blank")}
                                    >
                                        Agendar
                                    </Button>
                                </CardFooter>
                            </Card>
                        </PlanoCard>
                    ))}
                </PlanosGrid>
            </PlanosSection>
        </PlanosContainer>
    );
}
