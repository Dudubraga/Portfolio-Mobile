type Project = {
  id: number;
  title: string;
  description: string;
  image: any;
  link: any;
  linkText?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Jogo da Senha",
    description: 
`Este projeto é um jogo simples onde o usuário precisa adivinhar uma senha. A senha é uma sequência de 4 números. O usuário tem várias tentativas para adivinhar a senha.


O jogo foi desenvolvido usando React Native e Typescript. É uma ótima maneira de praticar as habilidades de programação e se divertir ao mesmo tempo.
            

Você pode jogar clicando no botão abaixo.`,
    image: require("../../assets/images/jogo-da-senha.png"),
    link: "./password-game",
    linkText: "Jogar",
  },
  {
    id: 2,
    title: "Programação Competitiva",
    description:
`A Programação Competitiva é onde programadores competem para resolver problemas usando linguagens de programação como o C++. É uma forma de aprimorar suas habilidades de resolução de problemas e aprender novos algoritmos e estruturas de dados.
        
Nos últimos dois anos, participei de diversas competições realizadas pela Sociedade Brasileira de Computação e pelo International Collegiate Programming Contest (ICPC). 
        
Saiba mais sobre programação competitiva clicando no botão abaixo.`,
    image: require("../../assets/images/maratona.png"),
    link: "https://maratona.sbc.org.br/sobre/index.html",
    linkText: "Saiba mais",
  },
  {
    id: 3,
    title: "Lounge do Açaí",
    description: 
`Este projeto consiste em um sistema de autoatendimento desenvolvido para melhorar a eficiência e a experiência do usuário no Lounge do Açaí, localizado na Universidade Católica de Pernambuco.

O sistema permite que os usuários façam pedidos por meio de um aplicativo móvel, que são enviados para a cozinha via uma impressora bluetooth. Essa integração otimiza o processo de pedidos e melhora a comunicação entre clientes e funcionários.

Confira o projeto no GitHub clicando no botão abaixo.`,
    image: require("../../assets/images/lounge-logo.png"),
    link: "https://github.com/seuusuario/projeto2",
    linkText: "Acesse o GitHub",
  },
];