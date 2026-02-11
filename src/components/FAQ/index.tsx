import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import {
    FAQContainer,
    FAQTitle,
    FAQContent
} from "./style";

const faqItems = [
    {
        title: "Onde você atende presencialmente?",
        text: "O consultório fica localizado no Max & Flora Center, no bairro Trindade (região central de Florianópolis). Em alguns casos específicos também faço atendimento domiciliar (famílias ou idosos com dificuldade de locomoção). Fale comigo para verificar a melhor possibilidade para você.",
    },
    {
        title: "Quanto tempo dura a consulta?",
        text: "A primeira consulta costuma durar 1h30 pois conversamos sobre toda a sua história alimentar. As consultas de manutenção duram em torno de 50min a 1h, a depender a complexidade do caso.",
    },
    {
        title: "Qual o valor das consultas?",
        text: "O Conselho Federal de Nutricionistas não permite a divulgação pública dos valores de consulta. Você pode solicitar diretamente via WhatsApp.",
    },
    {
        title: "Como funciona a avaliação física no atendimento online?",
        text: "No formato online, você contará com uma avaliação física realizada por inteligência artificial, complementada por medidas antropométricas que poderão ser feitas em casa, com toda a minha orientação. É importante destacar que a avaliação antropométrica não é a única forma de automonitoramento. Ao longo do acompanhamento, utilizamos diversas outras ferramentas para avaliar sua evolução de forma completa, segura e individualizada.",
    },
    {
        title: "Como funciona a avaliação física no atendimento presencial?",
        text: "A avaliação da composição corporal pode ser realizada por dobras cutâneas (avaliação antropométrica) ou por bioimpedância, a depender de qual método é mais adequado para você.",
    },
    {
        title: "Você atende vegetarianos/veganos?",
        text: "Sim! Apesar de eu não ser vegetariana, sou simpatizante do movimento e aprecio a redução no consumo de alimentos do reino animal. Possuo formação em nutrição vegetariana e estou apta a te atender!",
    },
    {
        title: "Quantas consultas são necessárias para alcançar meus objetivos?",
        text: "O tempo de acompanhamento varia muito de acordo com os objetivos e necessidades de cada paciente, além da própria dedicação e execução do planejamento pelo paciente. É comum também que os objetivos mudem ao longo do tempo, e que novas metas sejam traçadas. Portanto, não há um número exato de consultas para atingir seus objetivos e isso é discutido durante o acompanhamento.",
    },
    {
        title: "Qual o período aconselhável entre uma consulta e outra?",
        text: "Depende muito de cada caso e as dificuldades observadas no processo, esse também é um aspecto discutido na consulta. O aconselhável é que as consultas sejam mais frequentes no início do processo (semanal ou quinzenal) e que vá se espaçando ao longo do tempo conforme o paciente for melhorando seu comportamento alimentar.",
    },
    {
        title: "Em quanto tempo recebo o plano alimentar?",
        text: "A partir da primeira consulta você receberá o plano alimentar em até 2 dias úteis. Em alguns casos, quando necessita de apenas alguns ajustes simples você recebe na própria consulta. Outros ajustes são feitos durante o período de acompanhamento.",
    },
    {
        title: "Como você acompanha a evolução ao longo do acompanhamento?",
        text: "Temos diversos métodos para acompanhar a evolução além da avaliação física (peso e composição corporal). Acompanhamos também por registro alimentar, diminuição de sintomas e medidas de comportamento.",
    },
];

export function FAQ() {
    return (
        <FAQContainer id="faq">
            <FAQContent>
                <FAQTitle>Perguntas frequentes</FAQTitle>
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent>
                                {item.text}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </FAQContent>
        </FAQContainer>
    );
}
