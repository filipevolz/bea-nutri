import {
    SobreMimContainer,
    SobreMimContent,
    SobreMimImage,
    SobreMimText,
    SobreMimTitle,
    SobreMimDescription,
    SobreMimLink
} from "./style";

export function SobreMim() {
    return (
        <SobreMimContainer id="sobre-mim">
            <SobreMimContent $reverse={true}>
                <SobreMimImage>
                    <img src={`${import.meta.env.BASE_URL}photos/sobreMim2.jpg`} alt="Beatrice Orthmann" />
                </SobreMimImage>
                <SobreMimText>
                    <SobreMimTitle>Sobre mim</SobreMimTitle>
                    <SobreMimDescription>
                        Nutricionista pela Universidade Federal de Santa Catarina, pós-graduada, com premiação por mérito acadêmico. Possuo 4 anos de experiência em atendimentos clínicos e faço mestrado na área de neurociências aplicada ao comportamento alimentar. Tenho como um dos meus princípios a Prática Baseada em Evidências (PBE), considerando a ciência aliada à individualidade de cada paciente na minha prática clínica.
                    </SobreMimDescription>
                    <SobreMimLink 
                        href="https://lattes.cnpq.br/5285803581399419"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SAIBA MAIS SOBRE A MINHA TRAJETÓRIA
                    </SobreMimLink>
                </SobreMimText>
            </SobreMimContent>
        </SobreMimContainer>
    );
}
