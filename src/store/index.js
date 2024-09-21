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
            "Desenvolvemos sites profissionais, blogs, portfólios, landing pages, e-commerce entre outros",
        },

        {
          id: 2,
          icon: "fa-object-group",
          multiploevento1: "",
          title: "Desenvolvimento de sistema",
          text:
            " Criação de sistemas complexos nas mais diversas stacks de desenvolvimento do mercado, promovendo a integração de todas as áreas do seu negócio.",
        },
        {
          id: 3,
          icon: "fa-pencil",
          multiploevento1: "",
          title: "Desenvolvimento de app ",
          text:
            "Desenvolvemos aplicativos híbridos Android e iOS de ponta a ponta. Auxiliamos desde a criação e configuração das contas nas stores até o desenvolvimento final da solução.",
        },

      ],
      work: [  
        {
          id: 1,
          img: "marketing/marketing.png",
          img2: "marketing/marketing2.png",
          img3: "marketing/marketing3.png",
          categoria: "website",
          showCard: "",
          description: "Page Captura simples, com foco em vende cursos de marketing online do nivel basico ao avançado além disso o projeto traz  elegancia,  simplicidade e obetividade. Aprendizado: Nesse projeto foi utilizado slot, componentes entre outros",
          title: "MarketingPage",
          linguagem: {
            // 2: "fa-brands:vuejs",
            // 3: "typcn:css3",
          },
          href: ""
        },
        {
          id: 2,
          img: "vinho/docevinho1.png",
          img2: "vinho/docevinho2.png",
          img3: "vinho/docevinho3.png",
          categoria: "website",
          showCard: "",
          description: "Explore a nossa seleção exclusiva de vinhos premiados na Doce Vinhos. Cada garrafa é uma obra-prima, cuidadosamente elaborada para oferecer uma experiência de degustação incomparável. Desde vinhos tintos encorpados até brancos refrescantes, nossa coleção atende aos paladares mais exigentes.",
          title: "Loja Doce Vinho",
          linguagem: {
            // 1: "grommet-icons:figma",
          },
        },
      
        {
          id: 3,
          img: "odonto/dentalcare.png",
          img2: "odonto/dentalcare2.png",
          img3: "odonto/dentalcare3.png",
          categoria: "website",
          showCard: "",
          description: "Lading Page, projeto criado para um consultorio dentario, buscando sempre o foco de levar a informação para o cliente de forma objetiva.",
        
          title: "DentalCare.",
          linguagem: {
            // 2: "fluent:javascript-24-regular",
            // 3: "ant-design:html5-filled",
            // 4: "typcn:css3",
          },
          href: ""
        },

        {
          id: 4,
          img: "webdesigner/webDesigner_frente.png",
          img2: "webdesigner/webDesigner.png",
          img3: "webdesigner/webDesigner_full.png",
          categoria: "IU Designer",
          showCard: "",
          description: "Com uma abordagem criativa e orientada para resultados, oferecemos soluções personalizadas em design web que capturam a essência da sua marca e encantam seus visitantes. Seja para um site impressionante, uma loja online ou uma reformulação visual, nós entregamos projetos que não apenas se destacam, mas também geram resultados ",
          
          title: "WebDesigner",
          linguagem: {
            // 1: "grommet-icons:figma",
          },
          href: ""
        },
        {
          id: 5,
          img: "cosmetic/cosmetic_frente.png",
          img2: "cosmetic/cosmetic.png",
          img3: "cosmetic/cosmetic_full.png",
          categoria: "IU Designer",
          showCard: "",
          description: "Na Cosmetic, somos especialistas em desenvolvimento e terceirização de cosméticos de alta qualidade. Colaboramos com marcas para criar produtos inovadores e eficazes, desde fórmulas exclusivas até embalagens elegantes. Nossa equipe de especialistas garante que cada produto atenda aos mais altos padrões de qualidade e segurança.  ",
          
          title: "cosmetic.",
          linguagem: {
            // 1: "grommet-icons:figma",
          },
          href: ""
        },
        {
          id: 6,
          img: "ase/ase_frente.png",
          img2: "ase/ase.png",
          img3: "ase/ase_full.png",
          categoria: "IU Designer",
          showCard: "",
          description: "Descubra a essência da tradição e exclusividade com a Império Nossa marca oferecendo produtos e experiências que capturam a verdadeira essência da cultura. Desde itens sofisticados até ofertas especiais, garantimos qualidade e um toque de originalidade em cada detalhe.",
          
          title: "Imperio",
          linguagem: {
            // 1: "grommet-icons:figma",
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
          icon: "fa6-brands:sass",
          showCard: "",
          multiploevento1: "",
          title: "Design de Interface e Usabilidade",
          text:
            "definindo a arquitetura geral, a estrutura de dados, as interfaces do usuário e os principais componentes do sistema. Isso ajudará a ter uma visão clara da estrutura do software antes de iniciar o desenvolvimento. ",
        },
        {
          id: 3,
          icon: "simple-icons:tailwindcss",
          showCard: "",
          multiploevento1: "",
          title: "Desenvolvimento",
          text:
            "Com o design em mãos, inicie o desenvolvimento do software. Escolha uma linguagem de programação adequada e comece a escrever o código, implementando as funcionalidades e os componentes definidos nos estágios anteriores.",
        },
       
        {
          id: 4,
          icon: "fluent:javascript-24-regular",
          showCard: "",
          multiploevento1: "",
          title: "Testes e entrega",
          text:
            "O teste identifica bugs e falhas, enquanto a entrega envolve a disponibilização segura do software para uso, assegurando que ele atenda às expectativas dos usuários finais.",
        },      
       
      ],
      differential:[
        {
        id: 1,
        img: "image-calendar.png",
        icon: "ant-design:html5-filled",
        showCard: "",
        title: "Pazo certeiro",
        text:
          "Entregamos o software no prazo acordado, com pontualidade e eficiência.",
      },
      {
        id: 2,
        img: "image-qualidade.png",
        icon: "ant-design:html5-filled",
        showCard: "",
        title: "Qualidade",
        text:
          "Oferecemos produtos e serviços de alta qualidade, sempre superando expectativas.",
      },
      {
        id: 3,
        img: "image-foco.png",
        icon: "ph:instagram-logo",
        showCard: "",
        title: "Foco no cliente",
        text:
          "Focamos em soluções inovadoras e personalizadas para nossos clientes.",
      },
      {
        id: 4,
        img: "experiencia.png",
        icon: "ph:instagram-logo",
        showCard: "",
        title: "Experiência",
        text:
          "Com anos de experiência, oferecemos soluções confiáveis e eficazes.",
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

