import { Check } from "lucide-react";
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

export function Atendimentos() {
    return (
        <AtendimentosContainer id="atendimentos">
            <AtendimentosSection>
                <AtendimentosHeader>
                    <AtendimentosHeaderImage>
                        <img src={`${import.meta.env.BASE_URL}photos/atendimentoNova.jpg`} alt="Atendimento" />
                    </AtendimentosHeaderImage>
                    <AtendimentosHeaderText>
                        <AtendimentosTitle>Atendimentos</AtendimentosTitle>
                        <AtendimentosDescription>
                            <p>
                                Nos meus atendimentos, busco criar um <strong>espaço seguro de acolhimento</strong> e entender qual é a sua história,
                                seus objetivos, sua rotina e dificuldades. Quero que você não apenas
                                tenha resultado, mas que esse <strong>resultado se mantenha e funcione pro resto da sua vida</strong>.
                            </p>
                        </AtendimentosDescription>
                        <AtendimentosList>
                            {[
                                "**Plano alimentar individualizado**, sem privação, voltado à sua rotina, realidade e preferências",
                                "**Orientações e materiais exclusivos** para te apoiar no processo",
                                "**Suporte on-line** ao longo de todo o tratamento - você não estará sozinho!",
                                "**Plano de ação personalizado** já na primeira consulta",
                                "Acompanhamento da sua evolução e **progressão das estratégias** ao longo do tempo",
                                "Tarefas ao longo do tratamento para **consolidação do hábito**",
                                "**Resultados consistentes** que se manterão na sua rotina"
                            ].map((item, index) => {
                                // Processar texto para destacar palavras em negrito
                                const parts = item.split(/(?=\*\*)|(?<=\*\*)/);
                                const processedText = parts.map((part, i) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={i}>{part.slice(2, -2)}</strong>;
                                    }
                                    return part;
                                });

                                return (
                                    <AtendimentosListItem key={index}>
                                        <Check size={20} color="#ec4899" />
                                        <span>{processedText}</span>
                                    </AtendimentosListItem>
                                );
                            })}
                        </AtendimentosList>
                    </AtendimentosHeaderText>
                </AtendimentosHeader>

                <AtendimentosImages>
                    <AtendimentosImageCard>
                        <AtendimentosImageText>
                            Atendimento presencial em Florianópolis, com um espaço acolhedor
                            para você.
                        </AtendimentosImageText>
                        <img src={`${import.meta.env.BASE_URL}photos/bea-presencial.jpg`} alt="Atendimento presencial" />
                    </AtendimentosImageCard>
                    <AtendimentosImageCard>
                        <AtendimentosImageText>
                            Atendimento on-line no conforto e praticidade da sua casa, com a
                            mesma eficácia do atendimento presencial.
                        </AtendimentosImageText>
                        <img src={`${import.meta.env.BASE_URL}photos/atendimentos.jpg`} alt="Atendimento online" />
                    </AtendimentosImageCard>
                </AtendimentosImages>
            </AtendimentosSection>
        </AtendimentosContainer>
    );
}
