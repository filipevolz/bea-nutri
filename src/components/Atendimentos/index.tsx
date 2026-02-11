import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle2 } from "lucide-react";
import {
    AtendimentosContainer,
    AtendimentosSection,
    AtendimentosHeader,
    AtendimentosHeaderImage,
    AtendimentosHeaderText,
    AtendimentosTitle,
    AtendimentosDescription,
    AtendimentosList,
    AtendimentosListItem,
    AtendimentosImages,
    AtendimentosImageCard,
    AtendimentosImageText
} from "./style";

const beneficios = [
    "Atendimento personalizado voltado aos seus objetivos",
    "Plano alimentar adequado à sua rotina e preferências",
    "Orientações e tarefas para trabalhar suas principais dificuldades",
    "Avaliação da composição corporal por bioimpedância, dobras cutâneas ou Body3d (online)",
    "Avaliação de exames",
    "Indicações de produtos e alimentos",
    "Prescrições de suplemento quando necessário",
    "Materiais exclusivos",
    "Lista de compras",
    "Plataforma de treinos",
    "Acompanhamento das refeições pelo diário alimentar",
    "Feedback quinzenal",
    "Receitas práticas",
    "Acesso ao aplicativo exclusivo",
    "Suporte online"
];

export function Atendimentos() {
    return (
        <AtendimentosContainer id="atendimentos">
            <AtendimentosSection>
                <AtendimentosHeader>
                    <AtendimentosHeaderImage>
                        <img src="/photos/atendimentoNova.jpg" alt="Atendimento" />
                    </AtendimentosHeaderImage>
                    <AtendimentosHeaderText>
                        <AtendimentosTitle>Atendimentos</AtendimentosTitle>
                        <AtendimentosDescription>
                    <p>
                        Nos meus atendimentos, busco criar um <strong>espaço seguro de acolhimento</strong> e entender qual é a sua história,
                        seus objetivos, sua rotina e dificuldades. Quero que você não apenas
                        tenha resultado, mas que esse <strong>resultado se mantenha e funcione pro resto da sua vida</strong>.
                    </p>
                    <p>
                        Você recebe um <strong>plano alimentar individualizado</strong>, sem privação,
                        voltado a sua rotina, realidade e preferências. Você também recebe
                        <strong> orientações e materiais exclusivos</strong>, além do meu
                        <strong> suporte on-line</strong> ao longo do processo. O objetivo é que você não
                        se sinta sozinho!
                    </p>
                    <p>
                        Você terá um <strong>plano de ação personalizado</strong> já na primeira consulta.
                        Ao longo das consultas vamos acompanhando a sua evolução, trabalhando os
                        pontos de dificuldade e <strong>progredindo as estratégias</strong> ao longo do
                        tempo. Você recebe tarefas ao longo do tratamento que auxiliarão na
                        consolidação do hábito. Dessa forma, você cria
                        <strong> resultados consistentes</strong>
                        que se manterão na sua rotina.
                    </p>
                        </AtendimentosDescription>
                    </AtendimentosHeaderText>
                </AtendimentosHeader>

                <Card style={{ marginTop: "3rem", padding: "1.5rem 0" }}>
                    <CardHeader>
                        <CardTitle style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
                            Você recebe:
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <AtendimentosList>
                            {beneficios.map((beneficio, index) => (
                                <AtendimentosListItem key={index}>
                                    <CheckCircle2 size={24} color="#ec4899" />
                                    <span>{beneficio}</span>
                                </AtendimentosListItem>
                            ))}
                        </AtendimentosList>
                    </CardContent>
                </Card>

                <AtendimentosImages>
                    <AtendimentosImageCard>
                        <AtendimentosImageText>
                            Atendimento presencial em Florianópolis, com um espaço acolhedor
                            para você.
                        </AtendimentosImageText>
                        <img src="/photos/bea-presencial.jpg" alt="Atendimento presencial" />
                    </AtendimentosImageCard>
                    <AtendimentosImageCard>
                        <AtendimentosImageText>
                            Atendimento on-line no conforto e praticidade da sua casa, com a
                            mesma eficácia do atendimento presencial.
                        </AtendimentosImageText>
                        <img src="/photos/atendimentos.jpg" alt="Atendimento online" />
                    </AtendimentosImageCard>
                </AtendimentosImages>
            </AtendimentosSection>
        </AtendimentosContainer>
    );
}
