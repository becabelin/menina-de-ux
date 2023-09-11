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
]

export const properties = {
  filtros,
  bootcampObjetc,
}
