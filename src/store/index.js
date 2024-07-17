import { createStore } from 'vuex'

export default createStore({
  state: {
      images: [
        {
          id: 1,
          image: "frame4.png",
          text: 'lorem 1'
        },
        {
          id: 2,
          image: "frame1.png",
          text: 'lorem 2'
        },
        {
          id: 3,
          image: "frame2.png",
          text: 'lorem 3'
        },
        {
          id: 4,
          image: "frame3.png",
          text: 'lorem 4'
        },
      ],
      service: [
        {
          id: 1,
          icon: "fa-terminal",
          multiploevento1: "",
          title: "Desenvovimento Web",
          text:
            "Desenvolvo sites profissionais, blogs, portfólios, landing pages e e-commerce",
        },

        {
          id: 2,
          icon: "fa-object-group",
          multiploevento1: "",
          title: "Back-End",
          text:
            "Com python faço uso do back-end, e junto com o framework django desenvolvo aplicações web",
        },
        {
          id: 3,
          icon: "fa-pencil",
          multiploevento1: "",
          title: "Design de Interfaces (UI) ",
          text:
            " Crio interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.",
        },

      ],
      work: [  
        {
          id: 1,
          img: "marketing.png",
          img2: "marketing2.png",
          img3: "marketing3.png",
          type: "Front-End",
          showCard: "",
          description: "Page Captura simples, criada com foco em vende cursos de marketing online do nivel basico ao avançado além disso o projeto traz  elegancia,  simplicidade e obetividade. Aprendizado: Nesse projeto foi utilizado slot, componentes entre outros",
          title: "MarketingPage",
          linguagem: {
            2: "fa-brands:vuejs",
            3: "typcn:css3",
          },
          href: "https://marketing-page-jasmim-mii.vercel.app/"
        },
        {
          id: 2,
          img: "docevinho1.png",
          img2: "docevinho2.png",
          img3: "docevinho3.png",
          type: "UI Design",
          showCard: "",
          description: "Wareframe de uma loja de vinho, com mais  pagina , esse wareframefo criado para desenvolvimento pessoal e gosto por criar design. Aprendizado: O conhecimento funcional do figma ajuda muito a hora de desenvolver um projeto com linha de codigo",
          title: "Loja Doce Vinho",
          linguagem: {
            1: "grommet-icons:figma",
          },
        },
      
        {
          id: 3,
          img: "dentalcare.png",
          img2: "dentalcare2.png",
          img3: "dentalcare3.png",
          showCard: "",
          description: "Lading Page, projeto criado para um consultorio dentario, buscando sempre o foco de levar a informação para o cliente de forma objetiva. projeto simples. Aprendizado: Lading page criado com html, bootstrap e css",
          type: "Front-End",
          title: "DentalCare.",
          linguagem: {
            2: "fluent:javascript-24-regular",
            3: "ant-design:html5-filled",
            4: "typcn:css3",
          },
          href: "https://dentalcare-alpha.vercel.app/"
        },

        {
          id: 4,
          img: "webDesigner_frente.png",
          img2: "webDesigner.png",
          img3: "webDesigner_full.png",
          showCard: "",
          description: "Lading Page, criado com figma ",
          type: "UI Design",
          title: "WebDesigner",
          linguagem: {
            1: "grommet-icons:figma",
          },
          href: ""
        },
        {
          id: 5,
          img: "cosmetic_frente.png",
          img2: "cosmetic.png",
          img3: "cosmetic_full.png",
          showCard: "",
          description: "Lading Page, criado com figma ",
          type: "UI Design",
          title: "cosmetic.",
          linguagem: {
            1: "grommet-icons:figma",
          },
          href: ""
        },
        {
          id: 6,
          img: "ase_frente.png",
          img2: "ase.png",
          img3: "ase_full.png",
          showCard: "",
          description: "Lading Page, criado com figma ",
          type: "UI Design",
          title: "asé",
          linguagem: {
            1: "grommet-icons:figma",
          },
          href: ""
        },
      ],
      step_by_steps: [
        {
          id: 1,
          icon: "ant-design:html5-filled",
          showCard: "",
          multiploevento1: "",
          title: "Definição do objetivo",
          text:
            " Determine claramente o propósito e as funcionalidades do software que você deseja criar. Identifique as necessidades dos usuários e estabeleça os principais objetivos que você espera alcançar com o software.",
        },

        {
          id: 2,
          icon: "typcn:css3",
          showCard: "",
          multiploevento1: "",
          title: "Pesquisa",
          text:
            "Identifique e documente todos os requisitos funcionais e não funcionais do software. Isso inclui recursos específicos, plataformas de destino, desempenho, segurança, entre outros.",
        },
        {
          id: 3,
          icon: "fa6-brands:sass",
          showCard: "",
          multiploevento1: "",
          title: "Design de Interface e Usabilidade",
          text:
            "definindo a arquitetura geral, a estrutura de dados, as interfaces do usuário e os principais componentes do sistema. Isso ajudará a ter uma visão clara da estrutura do software antes de iniciar o desenvolvimento. ",
        },
        {
          id: 5,
          icon: "simple-icons:tailwindcss",
          showCard: "",
          multiploevento1: "",
          title: "Desenvolvimento",
          text:
            "Com o design em mãos, inicie o desenvolvimento do software. Escolha uma linguagem de programação adequada e comece a escrever o código, implementando as funcionalidades e os componentes definidos nos estágios anteriores.",
        },
        {
          id: 5,
          icon: "fluent:javascript-24-regular",
          showCard: "",
          multiploevento1: "",
          title: "Testes",
          text:
            "À medida que o desenvolvimento progride, realize testes contínuos para verificar se o software está funcionando corretamente. Isso pode incluir testes de unidade, testes de integração, testes de aceitação e testes de desempenho.",
        },
        {
          id: 6,
          icon: "devicon-plain:vuetify",
          showCard: "",
          multiploevento1: "",
          title: "Entrega",
          text:
         "Após a conclusão do desenvolvimento, realizamos testes finais para identificar e corrigir possíveis problemas. A entrega pode envolver a colaboração com equipes de marketing, desenvolvedores e outros profissionais para garantir que a solução seja lançada com sucesso para os usuários finais, seguindo fielmente o design criado.",
        },
       
      ],
      skill: [
        {
          id: 1,
          icon: "ant-design:html5-filled",
          showCard: "",
          multiploevento1: "",
          title: "html5",
          text:
            "HTML é uma linguagem de marcação utilizada na construção de páginas na Web",
        },

        {
          id: 2,
          icon: "typcn:css3",
          showCard: "",
          multiploevento1: "",
          title: "css3",
          text:
            "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web.",
        },
        {
          id: 3,
          icon: "fa6-brands:sass",
          showCard: "",
          multiploevento1: "",
          title: "Sass",
          text:
            "O SASS é um pré-processador de CSS que permite escrever estilos usando uma sintaxe mais fácil e intuitiva, ",
        },
        {
          id: 5,
          icon: "simple-icons:tailwindcss",
          showCard: "",
          multiploevento1: "",
          title: "Tailwind",
          text:
            " O Tailwind CSS é uma ferramenta útil para personalizar rapidamente o estilo de seus projetos sem ter que escrever CSS",
        },
        {
          id: 5,
          icon: "fluent:javascript-24-regular",
          showCard: "",
          multiploevento1: "",
          title: "javascript",
          text:
            "JavaScript é uma linguagem de programação usada por desenvolvedores para fazer páginas interativas da Internet.",
        },
        {
          id: 6,
          icon: "devicon-plain:vuetify",
          showCard: "",
          multiploevento1: "",
          title: "vuetify",
          text:
            "O Vuetify é um framework responsivo em Vuejs, baseado no Material Design",
        },
        {
          id: 7,
          icon: "fa-brands:vuejs",
          showCard: "",
          multiploevento1: "",
          title: "vuejs",
          text:
            "VueJs é um framework front-end para a construção de interfaces de usuário",
        },
        {
          id: 8,
          icon: "tabler:brand-cypress",
          showCard: "",
          multiploevento1: "",
          title: "cypress",
          text:
            "Cypress é uma ferramenta de teste ",
        },
        {
          id: 9,
          icon: "grommet-icons:figma",
          showCard: "",
          multiploevento1: "",
          title: "figma",
          text:
            "Figma é um aplicativo de criação de interfaces e protótipos baseado na web ",
        },
      ],
      faq: [
        {
          id: 1,
          showCard: false,
          isActive: false,
          title: "Por que eu preciso de um site?",
          text:
            "Um site é uma presença online para sua empresa, marca ou projeto pessoal. Ele permite que você seja encontrado na internet, promova seus produtos ou serviços, forneça informações sobre sua empresa e se conecte com seu público-alvo.",
          icon: "credit-card",
        },
        {
          id: 2,
          showCard: false,
          isActive: false,
          title: "Como funciona construir um projeto de software sob medida? ",
          text:
            "O desenvolvimento de um software sob medida inicia com o entendimento do projeto, através do mapeamento das funcionalidades e criação de um layout (telas). Após o entendimento do esforço de tempo e de horas para desenvolver, inicia-se o processo de desenvolvimento, podendo ser em cascata (modelo mais tradicional) ou na metodologia ágil (modelo mais recente com entregas quinzenais).  Para mais detalhes, confira este artigo de como tirar um projeto de software do papel.",
          icon: "square-check",
        },
        {
          id: 3,
          showCard: false,
          isActive: false,
          title: "Qual o investimento para fazer um projeto de site?",
          text:
            "O custo de criação de um site pode variar bastante, dependendo de vários fatores, como o tipo de site, a complexidade do design, recursos adicionais, funcionalidades e a experiência do profissional ou agência contratada. É possível criar um site básico por um preço relativamente baixo, mas sites mais complexos ou personalizados podem exigir um investimento maior.",
          icon: "tv",
        },
        {
          id: 4,
          showCard: false,
          isActive: false,
          title: "Quais são as etapas envolvidas na criação de um site?",
          text:
            "As etapas típicas para a criação de um site incluem o planejamento, a criação do design, o desenvolvimento do site, a codificação, a criação de conteúdo, o teste e a implantação. Depois disso, é importante realizar manutenção regular e atualizações conforme necessário.",
        },
        {
          id: 5,
          showCard: false,
          isActive: false,
          title: "Como faço para registrar um nome de domínio?",
          text:
            "Para registrar um nome de domínio, você precisa escolher uma empresa de registro de domínios confiável e verificar se o nome de domínio que você deseja está disponível. Você pode pesquisar e registrar domínios através de registradores de domínio online. Normalmente, você precisará pagar uma taxa anual para manter o registro do domínio.",
          icon: "headset",
        },
        {
          id: 6,
          showCard: false,
          isActive: false,
          title: "Como faço para colocar meu site na internet?",
          text:
            "Depois de criar seu site, você precisará de um serviço de hospedagem na web para armazenar os arquivos do site e torná-los acessíveis na internet. Ao contratar um serviço de hospedagem, você receberá informações sobre como enviar seus arquivos para o servidor de hospedagem e vincular seu nome de domínio ao servidor.",
          icon: "headset",
        },
      ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
