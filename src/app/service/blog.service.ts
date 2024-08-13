// blog.service.ts
import { Injectable } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  date: Date;

}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private posts: BlogPost[] = [
    {
      id: 1,
      title: 'Tratamentos Faciais: Cuidados Essenciais',
      summary: 'Descubra como manter sua pele sempre radiante com nossas dicas de cuidados faciais.',
      content: `
        <p>A pele do rosto é uma das áreas mais sensíveis e expostas do corpo, exigindo cuidados constantes para manter sua vitalidade e beleza. Nossos tratamentos faciais são projetados para revitalizar e nutrir sua pele, combatendo os sinais de envelhecimento e outros problemas como acne e manchas.</p>
        <p>Na Clínica de Estética, oferecemos uma gama completa de tratamentos faciais, desde a limpeza de pele profunda, que remove impurezas e células mortas, até terapias avançadas como peelings químicos e microagulhamento, que estimulam a renovação celular e a produção de colágeno.</p>
        <p>Cada sessão é personalizada de acordo com as necessidades individuais de sua pele, utilizando produtos de alta qualidade e técnicas modernas. Agende uma consulta conosco para descobrir qual tratamento facial é ideal para você e sinta a transformação em sua pele!</p>
      `,
      imageUrl: 'assets/images/blog-facial.jpeg',
      date: new Date('2023-08-20T14:30:00') // Data de publicação
    },

    {
      id: 2,
      title: 'Dicas de Beleza para o Verão',
      summary: 'Prepare-se para o verão com nossas dicas de beleza e cuidados especiais para esta estação.',
      content: `
  <p>O verão é a estação do ano que todos aguardam com ansiedade. Sol, praia e diversão são os ingredientes perfeitos para momentos inesquecíveis. No entanto, as altas temperaturas e a exposição ao sol podem exigir cuidados especiais com a pele e os cabelos.</p>

  <h2>Cuidando da Pele no Verão</h2>
  <p>Durante o verão, a pele precisa de atenção redobrada para se manter saudável e bonita. Aqui estão algumas dicas essenciais:</p>
  <ul>
    <li><strong>Use Protetor Solar:</strong> Aplique protetor solar com um fator de proteção alto (FPS 30 ou superior) todos os dias, mesmo quando estiver nublado. Reaplique a cada duas horas, especialmente após nadar ou suar.</li>
    <li><strong>Hidrate-se:</strong> Beber muita água é fundamental para manter a pele hidratada de dentro para fora. Além disso, use hidratantes leves que ajudam a reter a umidade da pele.</li>
    <li><strong>Evite a Exposição Solar Direta:</strong> Procure ficar na sombra entre 10h e 16h, quando os raios UV são mais intensos. Use chapéus, óculos de sol e roupas leves para se proteger.</li>
    <li><strong>Cuidado com a Pele Oleosa:</strong> Se você tem pele oleosa, escolha produtos oil-free e lave o rosto duas vezes ao dia para evitar o acúmulo de oleosidade e o surgimento de acne.</li>
  </ul>

  <h2>Protegendo os Cabelos</h2>
  <p>O sol, a água do mar e o cloro da piscina podem causar danos significativos aos cabelos. Siga estas dicas para manter seus fios saudáveis:</p>
  <ul>
    <li><strong>Use Produtos com Filtro UV:</strong> Assim como a pele, os cabelos também precisam de proteção contra os raios solares. Use leave-ins ou sprays com proteção UV.</li>
    <li><strong>Hidrate Regularmente:</strong> Invista em máscaras de hidratação profunda semanalmente para repor os nutrientes perdidos e manter os fios macios e brilhantes.</li>
    <li><strong>Enxágue Após o Mar ou Piscina:</strong> Sempre que sair do mar ou da piscina, enxágue os cabelos com água doce para remover o sal e o cloro, que ressecam e danificam os fios.</li>
    <li><strong>Corte as Pontas:</strong> Aproveite para aparar as pontas regularmente. Isso ajuda a evitar pontas duplas e mantém o cabelo com um aspecto saudável.</li>
  </ul>

  <h2>Cuidados com o Corpo</h2>
  <p>No verão, a pele do corpo também merece atenção especial. Veja como manter sua pele macia e protegida:</p>
  <ul>
    <li><strong>Esfoliação:</strong> Esfolie a pele uma ou duas vezes por semana para remover células mortas e deixar a pele mais suave. Isso também ajuda a garantir um bronzeado mais uniforme.</li>
    <li><strong>Hidratação Intensa:</strong> Use hidratantes corporais com ingredientes como aloe vera e manteiga de karité, que ajudam a acalmar a pele e repor a umidade perdida.</li>
    <li><strong>Cuidado com as Estrias:</strong> Durante o verão, o risco de estrias pode aumentar devido à variação de peso e à exposição solar. Use cremes específicos para prevenir e tratar as estrias.</li>
  </ul>

  <p>Aproveite o verão ao máximo sem descuidar da sua beleza. Com essas dicas, você estará pronta para curtir a estação com confiança e estilo!</p>
`,
      imageUrl: 'assets/images/blog-dicasverao.jpeg',
      date: new Date('2023-08-20T14:30:00') // Data de publicação
    },

    {
      id: 3,
      title: 'Depilação a Laser: O que você precisa saber',
      summary: 'Desfrute de uma pele lisa e sem pelos com nossos tratamentos a laser.',
      content: `
  <p>A depilação a laser é uma das opções mais populares e eficazes para a remoção duradoura dos pelos. Este procedimento avançado utiliza feixes de luz que penetram na pele e atingem o folículo piloso, enfraquecendo-o progressivamente até impedir o crescimento dos pelos.</p>

  <h2>Como Funciona a Depilação a Laser?</h2>
  <p>O procedimento de depilação a laser funciona através da emissão de um feixe de luz concentrada que é absorvido pela melanina (pigmento) presente nos pelos. Essa luz é convertida em calor, que danifica o folículo piloso sem afetar a pele ao redor. Com o tempo, isso resulta na redução significativa dos pelos nas áreas tratadas.</p>

  <h2>Benefícios da Depilação a Laser</h2>
  <p>A depilação a laser oferece uma série de benefícios em comparação com outros métodos de remoção de pelos, como a cera ou a lâmina:</p>
  <ul>
    <li><strong>Resultados Duradouros:</strong> Com algumas sessões, a depilação a laser pode proporcionar uma redução permanente dos pelos.</li>
    <li><strong>Menos Dor:</strong> Embora possa haver algum desconforto, ele é geralmente muito menor do que a dor da depilação com cera.</li>
    <li><strong>Precisão:</strong> O laser pode atingir pelos específicos, tornando-o ideal para áreas pequenas e delicadas como o rosto e a linha do biquíni.</li>
    <li><strong>Pele Suave:</strong> Além de remover os pelos, a depilação a laser pode ajudar a melhorar a textura da pele, deixando-a mais suave.</li>
  </ul>

  <h2>Cuidados Pré-Tratamento</h2>
  <p>Antes de iniciar as sessões de depilação a laser, é importante seguir algumas orientações para garantir a eficácia do tratamento e evitar complicações:</p>
  <ul>
    <li><strong>Evite a Exposição Solar:</strong> Evite tomar sol na área a ser tratada por pelo menos duas semanas antes do procedimento. Pele bronzeada pode aumentar o risco de queimaduras ou alterações na pigmentação.</li>
    <li><strong>Não Remova os Pelos pela Raiz:</strong> Evite depilação com cera, pinça ou qualquer método que remova os pelos pela raiz por pelo menos quatro semanas antes do tratamento. O laser precisa do pelo intacto para ser eficaz.</li>
    <li><strong>Raspe a Área:</strong> É recomendado raspar a área a ser tratada 24 horas antes da sessão. Isso ajuda a evitar que os pelos na superfície absorvam a energia do laser.</li>
    <li><strong>Evite Cremes e Produtos:</strong> Não aplique cremes, loções, ou desodorantes na área no dia do tratamento, a menos que indicado pelo seu profissional.</li>
  </ul>

  <h2>Cuidados Pós-Tratamento</h2>
  <p>Após a sessão de depilação a laser, alguns cuidados são necessários para garantir que sua pele se recupere bem e para maximizar os resultados:</p>
  <ul>
    <li><strong>Evite Exposição ao Sol:</strong> Continue evitando o sol na área tratada por pelo menos duas semanas após o tratamento. Use sempre protetor solar com alto fator de proteção.</li>
    <li><strong>Hidratação:</strong> Hidrate a área tratada regularmente para ajudar a pele a se recuperar.</li>
    <li><strong>Não Remova os Pelos:</strong> Evite métodos de remoção de pelos como cera ou pinça entre as sessões. Se necessário, você pode raspar os pelos que ainda crescerem.</li>
    <li><strong>Use Compressas Frias:</strong> Se houver vermelhidão ou inchaço, aplique compressas frias para aliviar o desconforto.</li>
  </ul>

  <h2>Quantas Sessões são Necessárias?</h2>
  <p>O número de sessões necessárias para a depilação a laser varia de acordo com fatores como o tipo de pele, a cor dos pelos e a área a ser tratada. Em geral, são recomendadas de 6 a 8 sessões para alcançar resultados satisfatórios. Sessões de manutenção podem ser necessárias para garantir a eliminação completa dos pelos.</p>

  <h2>Quem Pode Fazer a Depilação a Laser?</h2>
  <p>A depilação a laser é adequada para a maioria das pessoas, mas é mais eficaz em indivíduos com pele clara e pelos escuros. Isso ocorre porque o contraste entre a cor do pelo e a pele ajuda o laser a identificar e atingir o folículo piloso. No entanto, com a tecnologia moderna, pessoas com diferentes tipos de pele também podem se beneficiar do tratamento, desde que seja feito por profissionais qualificados.</p>

  <p>Se você está cansado dos métodos tradicionais de remoção de pelos e quer uma solução mais duradoura, a depilação a laser pode ser a escolha certa para você. Agende uma consulta em nossa clínica e descubra como podemos ajudá-lo a alcançar a pele lisa e sem pelos que você sempre desejou!</p>
`,
      imageUrl: 'assets/images/blog-depilacao.jpeg',
      date: new Date('2023-08-20T14:30:00') // Data de publicação
    }
  ];

  getPosts() {
    return this.posts;
  }

  getPostById(id: number) {
    return this.posts.find(post => post.id === id);
  }
}
