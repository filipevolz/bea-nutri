import { Card, CardContent, CardHeader } from "../ui/card";
import { Star } from "lucide-react";
import {
    ReviewsContainer,
    ReviewsTitle,
    ReviewsCarousel,
    ReviewCard,
    ReviewHeader,
    ReviewAuthor,
    ReviewRating,
    ReviewText,
    ReviewAvatar
} from "./style";

const reviewItems = [
    {
        name: 'Dra. Geise',
        rating: 5,
        review: 'A Beatrice é perfeita. Tivemos uma consulta há menos de três dias e eu acabo de receber todo meu plano alimentar. E muitos materiais complementares. É uma profissional muito dedicada. Faz atendimento online, estou no Rio de Janeiro. Estou verdadeiramente encantada. Se você precisar de uma profissional compente e dedicada. Essa pessoa é a Nutri Beatrice.',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjX4rjVuym69e5ZNfVVGmec9MLils0GOvSQ0eZF6F-pD3IFldNflLQ=s40-c-rp-mo-br100'
    },
    {
        name: 'Luiza Gontijo',
        rating: 5,
        review: 'Tive uma ótima experiência, sanou minhas dúvidas e foi muito rápida pra me mandar o plano alimentar.',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWdP75j1FfC-gjj3j0UNwbj9iF63-Kp0DKfqfM_XOogQTL9Srp8gg=s40-c-rp-mo-ba2-br100'
    },
    {
        name: 'Filipe Mancilla Fernandes',
        rating: 5,
        review: 'Adorei a consulta. Dra Beatrice é muito atenciosa e atenta às necessidades do paciente. Adorei o plano alimentar o os guias que ela me encaminhou! Super recomendo!',
        imgUrl: 'https://lh3.googleusercontent.com/a/ACg8ocIFwClKutSWKMzCtRGiutbYJ3J-OjfwzQiuSQsYe9gei2atK2A=s40-c-rp-mo-br100'
    },
    {
        name: 'Lucélia Inácio',
        rating: 5,
        review: 'Beatrice, é uma excelente profissional, atenciosa, super atenta aos detalhes, fez um cardápio personalizado e fácil de seguir, estou bem.contente com os resultados.',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXLgWFBB1N06JFmUg_khopss7iMwyqh_aBmCDB353Sh3WdEiTjKGA=s40-c-rp-mo-br100'
    },
    {
        name: 'Vinicius Aragon',
        rating: 5,
        review: 'Excelente atendimento, plano alimentar e sugestões muito adequado a realidade do paciente.',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjV32ul0RNalbO9t5z6ZidgamZv4vLLD9VIz457l2zC75hwTxnM=s40-c-rp-mo-br100'
    },
    {
        name: 'Eloisa Pavesi',
        rating: 5,
        review: 'Excelente profissional. Além do atendimento ser pontual, possui muito conhecimento técnico e científico, e faz um planejamento individualizado, que ajuda muito na adesão.',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWTTnS5dEyBEBLnJfdaO0JOTPbq3na3rCQkpEeqNuBc5XhmLoQ8=s40-c-rp-mo-br100'
    },
    {
        name: 'Greta Gabriela Rychescki',
        rating: 5,
        review: 'Uma nutricionista incrível, ela foi super atenciosa na consulta, tirou todas as minhas dúvidas, me instigou a pensar mais sobre a forma como me alimento, foi além do que eu esperava! Super indico!',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUTDv1xeDWI9lcR5DVvPGqkaDplwEImQrV2Y4AfqqkeW8HVdRI2=s40-c-rp-mo-br100'
    },
    {
        name: 'Grace Correa de Oliveira',
        rating: 5,
        review: 'Eu fiz um acompanhamento nutricional com a Beatrice, que foi maravilhoso! Serei eternamente grata, por tudo o que ela fez eu entender sobre a minha alimentação, meu corpo , minha auto estima e muito mais! SUPER RECOMENDO!!!!!',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjVnEFAoLBjGRFA7xyYRMnKs8CR22CBQ6TPut41JVpP10cwNz3oX=s40-c-rp-mo-br100'
    },
    {
        name: 'Victoria Hellen',
        rating: 5,
        review: 'Amei o atendimento, foi fundamental no meu processo de mudança. Profissional incrível!',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXEadXiuGP47E_qdS7M5bJf3JhrFN0FB9rHVdDYXHm8n81t2qnM6g=s40-c-rp-mo-br100'
    },
    {
        name: 'Natalia Telles',
        rating: 5,
        review: 'Excelente profissional! Atenciosa e competente. Pela primeira vez em muitas tentativas estou sendo acompanhada por uma profissional que escuta e se preocupa com a dieta adequada.',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjX38iipCL16bcMooOCZv_CSRNZOYeMDnC7YoS9UrKNwz6D72lmrtQ=s40-c-rp-mo-br100'
    },
    {
        name: 'Erondina Caetano',
        rating: 5,
        review: 'Muito atenciosa e expert em seus conteúdos. Demonstra conhecimento, acompanha e auxilia de perto o paciente, trazendo resultados excelentes logo no começo do tratamento.',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjVlgwf5Yh5msahKU8d6bb1T-DMVogasby-nXrzFVreupcHd6NFQ=s40-c-rp-mo-br100'
    },
    {
        name: 'Denise Farias Silva',
        rating: 5,
        review: 'Fui na consulta com a Beatrice Orthmann gostei muito do atendimento dela muito atenciosa e dedicada em ouvir a minha necessidade e estou muito feliz por começar o meu plano alimentar, não tem como passar fome é só comer comida saudável, muito obrigada Beatrice.',
        imgUrl: 'https://lh3.googleusercontent.com/a/ACg8ocIEn6fEuKE3x9qCYqxYJKLhDYG75PwRxxdcjQ_H8jCGAR3zZQ=s40-c-rp-mo-br100'
    },
    {
        name: 'Guilherme Vieira',
        rating: 5,
        review: 'Profissional excelente! Atendimento com muita atenção e qualidade. Todos os procedimentos e tomadas de decisões foram explicados para que respeitasse minhas preferências. Grato demais por ter encontrado uma profissional tão cuidadosa!',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjW_N8IFvngD2jvja9XS87ki7QOLmqQgz-OpWK8k4ntptkIFq0rSuA=s40-c-rp-mo-br100'
    },
    {
        name: 'Maria Luiza Freitas',
        rating: 5,
        review: 'Adorei a consulta! Profissional muito atenciosa e disponível para tirar dúvidas. Montou um plano alimentar personalizado e adequado para minha rotina e enviou também diversos materiais informativos para auxiliar no processo!',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUv9u7pE6S15qGP8ovK9evOjEd375LFepkcUz6DXJSkSa099l4=s40-c-rp-mo-br100'
    },
    {
        name: 'Fabiana Wudarski',
        rating: 5,
        review: 'A Beatrice é uma profissional incrível! Muito atenciosa, sempre pronta para ouvir e entender minhas necessidades de forma acolhedora. É super qualificada, transmite muita confiança e explica tudo com clareza, o que faz toda diferença no acompanhamento. Além de excelente nutricionista, é uma pessoa doce e carinhosa, que faz com que cada consulta seja leve e motivadora. Sou muito grata por todo o cuidado e dedicação dela! 💚',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXHYOYatmRKQNRlO4rgplaj05a0GBHy-UbiQo5Z0yPXUWa3SvRR=w72-h72-p-rp-mo-br100'
    },
    {
        name: 'Mariana Alves Pereira',
        rating: 5,
        review: 'A melhor nutricionista que já conheci! 🥰 A Beatrice é super atenciosa, humana, ela escuta a gente de verdade e monta um plano que faz sentido com a rotina e com o bolso! E ainda dá aquele incentivo que a gente precisa nos dias difíceis. Tô aprendendo a me alimentar melhor sem culpa e com equilíbrio. Já senti diferença na disposição, na autoestima e até no humor. Super indico de olhos fechados!',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXyWUpHX7sDkApFaZjTyk35EBEmUX8v1GwEupTSfzUZDgOaGqU=w72-h72-p-rp-mo-br100'
    },
    {
        name: 'Christiane Marcelo',
        rating: 5,
        review: 'Temos feito nosso acompanhamento online e mesmo à distância, estou feliz com o resultado que tenho alcançado a partir das orientações da Beatrice.',
        imgUrl: 'https://lh3.googleusercontent.com/a/ACg8ocI5_gNj8wDqi_OjPK6h-HMGqps5tUKHiJSHhAxc2kQenV_eig=w72-h72-p-rp-mo-br100'
    },
    {
        name: 'Andressa Campos',
        rating: 5,
        review: 'Gostaria de expressar minha admiração pelo trabalho da Nutricionista Beatrice Orthmann. Sua abordagem acolhedora, profissionalismo e conhecimento tornam cada orientação clara, eficaz e inspiradora. É visível o cuidado e a dedicação com que conduz cada caso, sempre buscando o bem-estar real de seus pacientes. Uma profissional que realmente faz a diferença!',
        imgUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJB2gHrcHUxUHAVXXbCenCu4MxndZ-sbocNg8MuntkvrC0puA=w72-h72-p-rp-mo-br100'
    },
    {
        name: 'Mariana Lohn Andriani',
        rating: 5,
        review: 'A consulta com a nutricionista Beatrice foi excelente. O plano alimentar que recebi superou as minhas expectativas, pois é saboroso, variado e com mais de uma opção de sugestão, o que tem sido ótimo para o dia a dia. Testei as novas receitas e estou adorando seguir o plano. É uma alegria sentir que posso cuidar da minha saúde com refeições que me agradam.',
        imgUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWTIAAtGb60O7OEgaLNPFoC5eNCYNhDuBpGyDb7Og4irSTqqsxw=w72-h72-p-rp-mo-ba2-br100'
    },
].sort((a, b) => (b.review.length - a.review.length));

export function Reviews() {
    return (
        <ReviewsContainer>
            <ReviewsTitle>Reviews do Google</ReviewsTitle>
            <ReviewsCarousel>
                {reviewItems.map((item, index) => (
                    <ReviewCard key={index}>
                        <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardHeader>
                                <ReviewHeader>
                                    <div>
                                        <ReviewAuthor>{item.name}</ReviewAuthor>
                                        <ReviewRating>
                                            {Array.from({ length: item.rating }).map((_, i) => (
                                                <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                                            ))}
                                        </ReviewRating>
                                    </div>
                                    <ReviewAvatar src={item.imgUrl} alt={item.name} />
                                </ReviewHeader>
                            </CardHeader>
                            <CardContent style={{ flex: 1 }}>
                                <ReviewText>{item.review}</ReviewText>
                            </CardContent>
                        </Card>
                    </ReviewCard>
                ))}
            </ReviewsCarousel>
        </ReviewsContainer>
    );
}
