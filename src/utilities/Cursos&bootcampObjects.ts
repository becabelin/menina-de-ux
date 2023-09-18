type Filtro = {
  label: string
  key: string
}

const filtros: Filtro[] = [
  { label: 'Todos', key: 'todos' },
  { label: 'Back-End', key: 'backend' },
  { label: 'Front-End', key: 'frontend' },
  { label: 'Design', key: 'design' },
  { label: 'Cloud e Dados', key: 'cloud' },
  { label: 'Marketing e Bussiness', key: 'marketing' },
  { label: 'Idiomas', key: 'idiomas' },
  { label: 'Para mulheres', key: 'mulher' },
  { label: 'Para jovens', key: 'jovens' },
]

const bootcampObjetc = [
  {
    id: 1,
    image: 'https://meninadeux.com/assets/img/bootcamps/bootcampinhouiux.webp',
    title: 'Bootcampinho UI/UX',
    description: `O Bootcampinho Gratuito UI/UX Design tem como objetivo te ajudar nos primeiros 
            passos de sua jornada. Formulado com o objetivo de ser um ponto de partida o 
            curso é dividido entre etapas teóricas e práticas.
            Além disso, você será desafiado(a) durante todo o curso a criar um projeto de 
            UI/UX Design do início ao fim. Todas as aulas também contam com desafios e 
            materiais de aprofundamento para ajudar você a continuar seus estudos.
    `,
    link: 'https://sheisacreative.com.br/curso/bootcampinho-ui-ux-design',
    category: ['todos', 'design'],
  },

  {
    id: 2,
    image: 'https://meninadeux.com/assets/img/bootcamps/proztecnologia.webp',
    title: 'Capacitação Gratuita em Introdução à Programação',
    description: `A Proz Tecnologia está oferecendo uma capacitação gratuita em 
                  Introdução a Programação. Você não precisa saber programar, mas se souber, 
                  vem também! Você vai começar aprendendo conceitos básicos, e será levado até 
                  que possa desenvolver seus próprios projetos.
    `,
    link: 'https://pages.prozeducacao.com.br/proz-tecnologia',
    category: ['todos', 'backend'],
  },
  {
    id: 3,
    image: 'https://meninadeux.com/assets/img/bootcamps/gamaacademy.webp',
    title: '6 cursos grátis da Gama Academy',
    description: `A Gama Academy está de cara nova! Enquanto celebram sua nova marca, 
                  querem premiar você, que torna isso possível, com acesso gratuito a 
                  alguns dos nossos conteúdos mais bem avaliados de Desenvolvimento Web 
                  e Product Design. Aproveitem!
    `,
    link: 'https://app.gama.academy/',
    category: ['todos'],
  },
  {
    id: 4,
    image:
      'https://meninadeux.com/assets/img/bootcamps/cursosprefeituradebh.webp',
    title: 'Cursos de TI da Prefeitura de BH',
    description: `A Prefeitura de Belo Horizonte está com mais de 2.500 vagas 
                  disponíveis para cursos de inclusão digital nos formatos presencial e EAD
                  para a área de tecnologia da informação.


                  São cinco cursos disponíveis, cada um deles com 500 vagas. O aluno pode c
                  ursar todos eles, iniciando com Introdução às Novas Tecnologias, 
                  Planilha Eletrônica, Ferramentas para Home Office, chegando à Programação Web, 
                  sendo que esse último ainda terá uma versão direcionada para mulheres, 
                  com mais 100 vagas disponíveis.
    `,
    link: 'https://app.gama.academy/',
    category: ['todos'],
  },

  {
    id: 5,
    image: 'https://meninadeux.com/assets/img/bootcamps/startbycapgemini.webp',
    title: 'Programa Start by Capgemini',
    description: `O Programa START da Capgemini foi criado para ajudar quem já é da área de TI ou  
            quem deseja mudar de carreira, a ingressar no mercado e conquistar independência 
            financeira para realizar seus sonhos, independentemente da sua idade.
            Você escolhe sua trilha nas principais plataformas e ainda tem a possibilidade 
            de contratação no final do treinamento! 
    `,
    link: 'https://startcapgemini.com.br/',
    category: ['todos', 'backend', 'cloud'],
  },

  {
    id: 6,
    image:
      'https://meninadeux.com/assets/img/bootcamps/institutodaoportunidadesocial.webp',
    title: 'Instituto da Oportunidade Social (IOS)',
    description: `O Instituto da Oportunidade Social (IOS) abriu as inscrições 
    para o segundo semestre de cursos de tecnologia presenciais e online!

    Tem curso de Programação Web, Gestão empresarial com software ERP, Suporte em TI e muitos outros!
    `,
    link: 'https://ios.org.br/inscricao/',
    category: ['todos', 'backend', 'marketing'],
  },
]

const cursoObjetc = [
  {
    id: 1,
    image: 'https://meninadeux.com/assets/img/cursos/1mio.webp',
    title: '1MiO',
    description:
      'A iniciativa Um Milhão de Oportunidades (1MiO) é a maior articulação do Brasil pela inclusão produtiva de adolescentes e jovens no mundo do trabalho decente. No site tem diversos cursos, eventos e oportunidades de trabalho divulgadas!',
    link: 'https://1mio.com.br/feeds',
    category: ['todos'],
  },
  {
    id: 2,
    image: 'https://meninadeux.com/assets/img/cursos/adobeeduca.webp',
    title: 'Adobe Educa',
    description:
      'A Adobe Educa é a plataforma de educação gratuita para todos os professores do Brasil! Aqui você encontra cursos com especialistas em todos os programas da Adobe Creative Cloud: design, ilustração, animação, produção de vídeo, editoração e muito mais.',
    link: 'https://por.adobe-educa.com',
    category: ['todos'],
  },
  {
    id: 3,
    image: 'https://meninadeux.com/assets/img/cursos/avamec.webp',
    title: 'AVAMEC',
    description:
      'A AVAMEC é um ambiente virtual colaborativo de aprendizagem que permite a concepção, administração e desenvolvimento de diversos tipos de ações formativas, como cursos a distância, complemento a cursos presenciais, projetos de pesquisa, projetos colaborativos e diversas outras formas de apoio educacional à distância ao processo ensino-aprendizagem!',
    link: 'https://avamec.mec.gov.br/#/',
    category: ['todos'],
  },
  {
    id: 4,
    image: 'https://meninadeux.com/assets/img/cursos/amazonalexa.webp',
    title: 'Alexa Skills: Design de Voz',
    description:
      'Aprenda as melhores práticas de design para skills da Alexa, você aprenderá a criar experiências de voz naturais e enriquecedoras.',
    link: 'https://build.amazonalexadev.com/cursoalexa-designdevoz.html',
    category: ['todos'],
  },
  {
    id: 5,
    image: 'https://meninadeux.com/assets/img/cursos/awari.webp',
    title: 'Cursos Introdutórios na Awari',
    description:
      'A Awari oferece cursos gratuitos em Data Science, Programação, UX/UI design e outros. Para acessá-los, basta você clicar rolar até a seção de "Cursos em destaque"!',
    link: 'https://awari.com.br/#categorias',
    category: ['todos'],
  },
  {
    id: 6,
    image: 'https://meninadeux.com/assets/img/cursos/awsskillbuilder.webp',
    title: 'AWS Skill Builder',
    description:
      'A Amazon criou o AWS Skill Builder, que é o seu centro de aprendizado para o desenvolvimento das habilidades de nuvem mais desejadas! A plataforma tem vários cursos sobre a cloud AWS',
    link: 'https://explore.skillbuilder.aws/learn',
    category: ['todos'],
  },
  {
    id: 7,
    image: 'https://meninadeux.com/assets/img/cursos/bancocentraldobrasil.webp',
    title: 'Branco Central do Brasil',
    description:
      'O Banco Central do Brasil está oferecendo dois cursos online e gratuitos sobre finanças: Gestão de Finanças Pessoais e Formação de Multiplicadores da Série "Eu e Meu Dinheiro".',
    link: 'https://www.bcb.gov.br/cidadaniafinanceira/cursos',
    category: ['todos'],
  },
  {
    id: 8,
    image: 'https://meninadeux.com/assets/img/cursos/bolsagratis.webp',
    title: 'Bolsa Grátis',
    description:
      'Aumente suas possibilidades profissionais com cursos exclusivos, de curta duração e totalmente gratuitos!',
    link: 'https://bolsagratis.com.br/busca-cursos/?f=&type=cursos_gratis&presencial=true&ead=true',
    category: ['todos'],
  },
  {
    id: 9,
    image: 'https://meninadeux.com/assets/img/cursos/cieesabervirtual.webp',
    title: 'CIEE - Saber Virtual',
    description:
      'O CIEE Saber Virtual é uma plataforma de cursos que permite a realização totalmente a distância. Nesse portal, é possível realizar 5 trilhas de conhecimento, que foram feitas com a intenção de preparar estudantes para o mundo do trabalho, sendo que, aqueles que concluírem os cursos, terão direito a um certificado.',
    link: 'https://portal.ciee.org.br/para-voce/saber-virtual/',
    category: ['todos'],
  },
]

export const properties = {
  filtros,
  bootcampObjetc,
  cursoObjetc,
}
