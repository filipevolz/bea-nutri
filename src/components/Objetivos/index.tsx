import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import {
    ObjetivosContainer,
    ObjetivosTitle,
    ObjetivosContent,
    ObjetivosListItem,
    ObjetivosItemIcon
} from "./style";
import { 
    User, 
    Scale, 
    Brain, 
    Heart, 
    Zap, 
    Dumbbell, 
    Stethoscope, 
    Shield, 
    Sparkles, 
    AlertCircle 
} from "lucide-react";

const beneficios = [
    {
        title: "Reeducação Alimentar",
        description: "Aprenda a fazer escolhas mais inteligentes e saudáveis, atendendo suas necessidades individuais.",
        icon: User,
    },
    {
        title: "Emagrecimento",
        description: "Emagrecer vai muito além de um plano alimentar reduzido em calorias. Busco entender todas as dimensões que envolvem a sua alimentação para te empoderar para a verdadeira mudança. Se você sente que existe algum bloqueio ou sabotador mental que está te dificultando, tenho um trabalho focado em ajudar a destravar esses sabotadores para acelerar o seu emagrecimento. Perca peso de forma saudável e sem privação, recuperando sua autoestima. Encontre comigo estratégias nutricionais que promovam a perda de peso sustentável, para um emagrecimento eficiente e duradouro.",
        icon: Scale,
    },
    {
        title: "Comportamento Alimentar",
        description: "Melhore sua relação com a comida e desenvolva comportamentos mais funcionais.",
        icon: Brain,
    },
    {
        title: "Saúde e Bem Estar",
        description: "Tenha uma nutrição que te ajude no tratamento de doenças e melhore sua qualidade de vida.",
        icon: Heart,
    },
    {
        title: "Disposição e Energia",
        description: "Tenha uma alimentação que contribua para sua disposição diária e melhora sua cognição e tomada de decisão.",
        icon: Zap,
    },
    {
        title: "Ganho de massa muscular",
        description: "Ganhar massa muscular vai muito além de comer mais ou aumentar a proteína. O acompanhamento é focado em entender sua rotina, alimentação e possíveis bloqueios que dificultam sua evolução. Com estratégias nutricionais personalizadas, o objetivo é promover o ganho de massa muscular de forma saudável, consistente e sustentável, melhorando força, composição corporal e disposição ao longo do processo.",
        icon: Dumbbell,
    },
    {
        title: "Tratamento do Diabetes",
        description: "A alimentação é um ponto chave no tratamento do diabetes. Aprenda como regular os níveis de glicose no sangue sem precisar cortar totalmente o carboidrato da sua alimentação, mas sim fazendo escolhas mais inteligentes e eficazes.",
        icon: Stethoscope,
    },
    {
        title: "Doenças Autoimunes",
        description: "Vamos juntos melhorar sua qualidade de vida combinando mudanças na dieta, prática de atividade física, suplementação específica e técnicas de gerenciamento de estresse para restaurar o equilíbrio imunológico, reduzir a inflamação e o estresse oxidativo e melhorar a qualidade de vida.",
        icon: Shield,
    },
    {
        title: "Estética",
        description: "Tenha uma alimentação e suplementação individualizada para melhorar sua composição corporal, tratar gordura localizada e aspecto da pele em conjunto com performance na saúde e longevidade.",
        icon: Sparkles,
    },
    {
        title: "Intolerâncias e Alergias",
        description: "Minha conduta busca te empoderar e munir com conhecimento para entender como funciona sua alergia ou intolerância, e como lidar de forma a promover inclusão e qualidade de vida.",
        icon: AlertCircle,
    },
];

export function Objetivos() {
    const [selectedItem, setSelectedItem] = useState<typeof beneficios[0] | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const openDialog = (index: number) => {
        setSelectedItem(beneficios[index]);
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
        setSelectedItem(null);
    };

    return (
        <ObjetivosContainer>
            <ObjetivosTitle>
                Se você busca algum desses objetivos, meu acompanhamento foi feito para você!
            </ObjetivosTitle>

            <ObjetivosContent>
                {beneficios.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <ObjetivosListItem key={index}>
                            <Card style={{ backdropFilter: "blur(4px)", backgroundColor: "rgba(255, 255, 255, 0.5)", height: "100%" }}>
                                <CardHeader>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                        <ObjetivosItemIcon>
                                            <Icon size={32} />
                                        </ObjetivosItemIcon>
                                        <CardTitle style={{ fontSize: "1.125rem", margin: 0 }}>
                                            {item.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Button
                                        variant="default"
                                        size="sm"
                                        onClick={() => openDialog(index)}
                                        style={{ backgroundColor: "#ec4899", color: "white" }}
                                    >
                                        Saiba mais
                                    </Button>
                                </CardContent>
                            </Card>
                        </ObjetivosListItem>
                    );
                })}
            </ObjetivosContent>

            {/* Diálogo */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{selectedItem?.title}</DialogTitle>
                        <DialogDescription>{selectedItem?.description}</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={closeDialog}>
                            Fechar
                        </Button>
                        <Button
                            onClick={() => window.open("https://wa.me/5548988579612", "_blank")}
                        >
                            Agendar Consulta
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </ObjetivosContainer>
    );
}
