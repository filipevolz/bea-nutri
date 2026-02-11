import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { 
    CRMContainer, 
    CRMSection, 
    CRMTitle, 
    CRMSubtitle, 
    CRMDescription,
    CRMFeatures,
    CRMFeatureCard
} from "./style";
import { CheckCircle2, Users, Calendar, FileText, BarChart3, MessageSquare } from "lucide-react";

export function CRM() {
    const features = [
        {
            icon: Users,
            title: "Gestão de Pacientes",
            description: "Organize todos os seus pacientes em um só lugar com informações completas e acessíveis."
        },
        {
            icon: Calendar,
            title: "Agendamento Inteligente",
            description: "Sistema de agendamento automático com lembretes e confirmações para reduzir faltas."
        },
        {
            icon: FileText,
            title: "Prontuários Digitais",
            description: "Prontuários completos e seguros, com histórico de consultas e evoluções."
        },
        {
            icon: BarChart3,
            title: "Relatórios e Análises",
            description: "Acompanhe métricas importantes e visualize o crescimento do seu negócio."
        },
        {
            icon: MessageSquare,
            title: "Comunicação Integrada",
            description: "Mantenha contato com seus pacientes através de mensagens e notificações."
        },
        {
            icon: CheckCircle2,
            title: "Automação de Processos",
            description: "Automatize tarefas repetitivas e foque no que realmente importa: seus pacientes."
        }
    ];

    return (
        <CRMContainer>
            <CRMSection>
                <Badge variant="secondary" style={{ marginBottom: "1rem", fontSize: "0.875rem", padding: "0.5rem 1rem" }}>
                    Sistema CRM Completo
                </Badge>
                <CRMTitle>
                    Tudo que você precisa para gerenciar sua clínica
                </CRMTitle>
                <CRMSubtitle>
                    Um CRM desenvolvido especialmente para nutricionistas
                </CRMSubtitle>
                <CRMDescription>
                    Simplifique sua rotina, aumente sua produtividade e ofereça um atendimento 
                    de excelência aos seus pacientes com ferramentas profissionais.
                </CRMDescription>

                <CRMFeatures>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <CRMFeatureCard key={index}>
                                <Card>
                                    <CardHeader>
                                        <div style={{ 
                                            width: "48px", 
                                            height: "48px", 
                                            borderRadius: "12px",
                                            background: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "1rem"
                                        }}>
                                            <Icon size={24} color="white" />
                                        </div>
                                        <CardTitle>{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{feature.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </CRMFeatureCard>
                        );
                    })}
                </CRMFeatures>
            </CRMSection>
        </CRMContainer>
    );
}
