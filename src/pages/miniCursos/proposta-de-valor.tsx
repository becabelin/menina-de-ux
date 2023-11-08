// Components
import Head from 'next/head'
import Image from 'next/image'
import Title from '@/components/common/Title/Title'
import SubTitle from '@/components/common/Subtitle/SubTitle'
import Button from '@/components/common/Button'

// Styles
import styles from '@/styles/PropostaDeValor.module.scss'

// Utilities
// Hooks
// Interfaces

export default function PropostaDeValor() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.PropostaDeValor}>
        <section className={`container ${styles.proposta}`}>
          <div className={styles.propostaContainer}>
            <div className={styles.propostaText}>
              <div className={styles.textStyle}>
                <span>
                  <a href="/estude" className={styles.textA}>
                    {`${'Estude  '}`}
                  </a>
                  / Proposta de Valor
                </span>
              </div>
              <div className={styles.espaçoEntreTextos}>
                <Title type="Default">Proposta de Valor</Title>
              </div>
              <SubTitle type="Default">
                O que é, como fazer e como ela pode mudar o seu negócio. Hoje,
                no Menina de UX repórter!
              </SubTitle>
            </div>
            <div className={styles.propostaImage}>
              <Image
                className={styles.img}
                src="../imgPropostaDeValor/homem-de-negocios.webp.svg"
                width={612}
                height={408}
                alt="Imagem de um homem de negócios"
                priority={true}
              />
            </div>
          </div>
        </section>

        <section className={`container ${styles.bemVindos}`}>
          <div className={styles.propostaContainer}>
            <div className={styles.propostaImage}>
              <Image
                className={styles.img}
                src="../imgPropostaDeValor/homem-cadeirante-acenando.webp.svg"
                width={445.19}
                height={445.19}
                alt="Imagem de um homem cadeirante acenando"
              />
            </div>
            <div className={styles.propostaText}>
              <Title type="Sm">Seja bem-vindo(a)!</Title>
              <div>
                <SubTitle type="Default">
                  Esse é um mini curso sobre Proposta de Valor
                </SubTitle>
              </div>
              <div>
                <SubTitle type="Default">
                  Logo abaixo você vai aprender sobre o que ele é, como fazer e
                  qual a importância dele num projeto!
                </SubTitle>
              </div>
              <div>
                <SubTitle type="Default">Preparado(a)? Vamos lá!</SubTitle>
              </div>
            </div>
          </div>
        </section>

        <section className={`container ${styles.valor}`}>
          <div className={styles.propostaContainer}>
            <div className={styles.propostaText}>
              <Title type="Sm">Proposta de Valor</Title> <br />
              <SubTitle type="Default">
                O objetivo da proposta de valor é dar para o usuário uma ideia
                bem clara de como o negócio pode ser relevante.
              </SubTitle>
              <br />
              <SubTitle type="Default">
                De acordo com David Aaker, no livro{' '}
                <a
                  href="https://www.amazon.com.br/Construindo-Marcas-Fortes-David-Aaker/dp/8560031952"
                  target="_blank"
                  className={styles.textA}
                  rel="noreferrer"
                >
                  Construindo Marcas Fortes
                </a>
                :
              </SubTitle>
              <div className={styles.espaçoEntreTextos}>
                <SubTitle type="Default">
                  “A proposta de valor é uma afirmação dos benefícios
                  funcionais, emocionais e de auto-expressão oferecidos pela
                  marca que proporcionam valor ao cliente”.
                </SubTitle>
              </div>
              <div className={styles.espaçoEntreTextos}>
                <SubTitle type="Default">
                  E uma vez definida a sua proposta de valor, você deve
                  transmiti-la para a pessoa usuária de forma clara,
                  transparente e com linguagem adequada.
                </SubTitle>
              </div>
              <SubTitle type="Default">Artigos úteis:</SubTitle>
              <SubTitle type="Default">
                <div className={styles.espaçoEntreTextos}>
                  <a
                    href="https://uxdesign.blog.br/como-criar-uma-boa-proposta-de-valor-para-o-seu-produto-67b2188df4af"
                    target="_blank"
                    className={styles.textA}
                    rel="noreferrer"
                  >
                    - Como criar uma boa proposta de valor para o seu produto
                    (Mergo)
                  </a>
                </div>
                <div className={styles.espaçoEntreTextos}>
                  <a
                    href="https://fia.com.br/blog/card-sorting-o-que-e-e-como-utilizar-guia-completo/"
                    target="_blank"
                    className={styles.textA}
                    rel="noreferrer"
                  >
                    - #PegaaDica: Canvas de proposta de valor bem explicadinho!
                    (Mergo)
                  </a>
                </div>
                <div className={styles.espaçoEntreTextos}>
                  <a
                    href="https://brasil.uxdesign.cc/a-import%C3%A2ncia-em-definir-a-proposi%C3%A7%C3%A3o-de-valor-de-um-produto-e8c5c70a46d6"
                    target="_blank"
                    className={styles.textA}
                    rel="noreferrer"
                  >
                    - A importância em definir a Proposição de Valor de um
                    produto (Fabricio Teixeira)
                  </a>
                </div>

                <a
                  href="https://medium.com/@deployexperience/como-inovar-usando-o-canvas-de-proposta-de-valor-95e0e34280c0"
                  target="_blank"
                  className={styles.textA}
                  rel="noreferrer"
                >
                  - Como inovar usando o Canvas de Proposta de Valor (Deploy UX)
                </a>
              </SubTitle>
            </div>
            <div className={styles.propostaImage}>
              <Image
                className={styles.img}
                src="../imgPropostaDeValor/homem-escrevendo.webp.svg"
                width={445.19}
                height={445.19}
                alt="Imagem de um homem escrevendo"
              />
            </div>
          </div>
        </section>

        <section className={`container ${styles.aspectos}`}>
          <div className={styles.propostaContainer}>
            <div className={styles.propostaText}>
              <div className={styles.marginBottom10}>
                <Title type="Sm">Os 4 aspectos de uma proposta de valor</Title>
              </div>

              <SubTitle type="Default">
                Uma boa proposta de valor possui alguns aspectos que a tornam
                mais eficiente. E observá-los facilita, inclusive, a sua
                criação. Caso você não identifique um desses 4 elementos na sua
                proposta, saberá que é preciso revisá-las.
                <div className={styles.margin20}>
                  <SubTitle type="Default">São eles:</SubTitle>
                </div>
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Clareza</Title>
              </div>
              <SubTitle type="Default">
                Quanto mais clara for a proposta, mais fácil fica transmitir sua
                mensagem e mais rápido a pessoa pode se conectar com ela. A
                clareza é um dos parâmetros principais de bons conteúdos. Uma
                proposta clara é aquela que vai direto ao ponto, que expõe a
                ideia central da empresa e que apresenta fácil compreensão.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Linguagem</Title>
              </div>
              <SubTitle type="Default">
                É preciso saber como se comunicar com seu público-alvo de forma
                adequada. Isso irá impactar diretamente na compreensão da sua
                mensagem e no quando a pessoa usuária se conectará com ela.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Concorrência</Title>
              </div>
              <SubTitle type="Default">
                É preciso analisar a concorrência para entender o que eles
                entregam, quais as falhas dessa entrega, as oportunidades, as
                estratégias, como você pode crescer no mercado… Compare com o
                que você faz e entenda como pode melhorar o seu serviço de
                acordo com esse comparativo.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Transparêncial</Title>
              </div>
              <SubTitle type="Default">
                Outro ponto importante é a transparência nas informações
                apresentadas na proposta de valor. Ela deve ser baseada no que a
                empresa faz ou no que o produto entrega. Exageros podem resultar
                em expectativas que você pode suprir e na consequente fuga
                dessas pessoas para a concorrência.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Direcionamento</Title>
              </div>
              <SubTitle type="Default">
                Sabe como direcionar a pessoa usuária para os seus benefícios e
                para o que ela vai encontrar ao interagir com seu produto ou
                empresa. É nesse momento em que o valor é reforçado e destacado,
                juntamente com seus diferenciais.
              </SubTitle>
            </div>
            <div className={styles.propostaImage}>
              <Image
                className={styles.img}
                src="../imgPropostaDeValor/homem-e-mulher-analisando-dados.webp.svg"
                width={445.19}
                height={431.38}
                alt="Imagem de um homem e uma mulher analisando dados"
              />
            </div>
          </div>
        </section>

        <section className={`container ${styles.tipoDevalor}`}>
          <div className={styles.propostaContainer}>
            <div className={styles.propostaText}>
              <div className={styles.marginBottom10}>
                <Title type="Sm">Tipos de proposta de valor</Title>
              </div>
              <SubTitle type="Default">
                Uma proposta de valor pode ter diferentes focos, como:
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Desempenho</Title>
              </div>
              <SubTitle type="Default">
                Foca na qualidade e na performance do produto.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Novidade</Title>
              </div>
              <SubTitle type="Default">
                Apresenta alguma inovação no produto, que o destaca muito da
                concorrência.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Preço</Title>
              </div>
              <SubTitle type="Default">
                Trabalha o preço do produto ou nas possibilidades de compra,
                como desconto, parcelamento etc. A ideia é sempre trazer um
                preço melhor do que a média.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Personalização</Title>
              </div>
              <SubTitle type="Default">
                Se o seu diferencial é adaptar o produto para o que a pessoa
                usuária precisa, a sua proposta de valor é essa! Quem foca nesse
                ponto, consegue entregar diferenciais e exclusividade.
              </SubTitle>
            </div>
            <div className={styles.propostaImage}>
              <Image
                className={styles.img}
                src="../imgPropostaDeValor/menino-criativo-pensando.webp.svg"
                width={445.19}
                height={445.19}
                alt="Imagem de um homem tendo ideias"
              />
            </div>
          </div>
        </section>

        <section className={`container ${styles.comoMontar}`}>
          <div className={styles.propostaContainer}>
            <div className={styles.propostaText}>
              <div className={styles.margin20}>
                <Title type="Sm">Como montar a sua proposta de valor?</Title>
              </div>
              <SubTitle type="Default">
                Uma proposta de valor geralmente segue uma estrutura e isso
                facilita sua construção. Ela é bem simples, como você pode ver a
                seguir:
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Título</Title>
              </div>
              <SubTitle type="Default">
                É a parte principal da proposta. Deve ser sucinto e claro, sendo
                desenvolvido em, no máximo 2 frases. Aqui vale pensar em frases
                mais impactantes, que prendam a atenção.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Subtítulo</Title>
              </div>
              <SubTitle type="Default">
                Aqui, você vai detalhar um pouco mais a sua proposta, trazendo
                um pouco mais de informação. Mas não é indicado que ela
                ultrapasse mais de 4 frases.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Bulletpoints</Title>
              </div>
              <SubTitle type="Default">
                Eles facilitam a leitura dinâmica ou o escaneamento das
                informações mais importantes. Fica mais fácil captar a atenção
                quando você especifica o que importa em formato de lista. Use-os
                para destacar os principais benefícios e o diferencial.,
                indicando como eles atendem às necessidades do consumidor.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Imagens</Title>
              </div>
              <SubTitle type="Default">
                Imagens possuem um apelo visual e complementam a ideia da
                mensagem do texto. Elas devem ser usadas para dar mais destaque
                à proposta de valor.
              </SubTitle>
            </div>
            <div className={styles.propostaImage}>
              <Image
                className={styles.img}
                src="../imgPropostaDeValor/mulher-no-computador-com-gato.webp.svg"
                width={445.19}
                height={445.19}
                alt="Imagem de uma mulher no computador com um gato"
              />
            </div>
          </div>
        </section>

        <section className={`container ${styles.identificarDefinir}`}>
          <div className={styles.propostaContainer}>
            <div className={styles.propostaText}>
              <SubTitle type="Default">
                Para poder trabalhar com esta ferramenta, você deve identificar
                e definir alguns aspectos do seu negócio:
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Público-alvo</Title>
              </div>
              <SubTitle type="Default">
                Definir o seu público-alvo é o primeiro passo. Uma boa
                estratégia é conversar com os clientes que você já tem e
                analisar a razão pela qual eles compram da sua marca. Se você
                está começando do zero, vale fazer uma pesquisa mais ampla, para
                assim, entender quem está disposto a comprar com você. Feito
                isso, você terá mais informações e base para buscar pessoas e
                dados para construir a sua persona, que é o passo seguinte.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Persona</Title>
              </div>
              <SubTitle type="Default">
                A persona é a pessoa usuária ideal do seu produto. Ela é um
                personagem fictício, mas que reúne características muito
                específicas e particulares, como as dores, medos, oportunidades,
                esperanças, necessidades etc.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Concorrência</Title>
              </div>
              <SubTitle type="Default">
                É preciso analisar a concorrência para entender o que eles
                entregam, quais as falhas dessa entrega, as oportunidades, as
                estratégias, como você pode crescer no mercado… Compare com o
                que você faz e entenda como pode melhorar o seu serviço de
                acordo com esse comparativo.
              </SubTitle>
              <div className={styles.margin20}>
                <Title type="Xs">Diferencial</Title>
              </div>
              <SubTitle type="Default">
                Depois de olhar para a concorrência, é hora de olhar pra dentro.
                O que você oferece às suas pessoas usuárias? Quais os benefícios
                e o seu diferencial?
              </SubTitle>
              <SubTitle type="Default">
                A partir dessas respostas, dá para trabalhar o canvas de
                proposta de valor e desenvolver a sua.
              </SubTitle>
              <SubTitle type="Default">
                Pronto para criar a sua proposta de valor? Com todas essas
                informações, a gente garante que fica mais fácil construir esse
                que é um dos pontos principais de qualquer negócio ou produto.
              </SubTitle>
            </div>
            <div className={styles.propostaImage}>
              <Image
                className={styles.img}
                src="../imgPropostaDeValor/homem-e-mulher-juntando-quebra-cabecas.webp.svg"
                width={445.19}
                height={433.78}
                alt="Imagem de uma mulher e um homem com peças de quebra-cabeça que se encaixam"
              />
            </div>
          </div>
        </section>

        <section className={`container ${styles.endParabens}`}>
          <Title type="Sm">Parabéns por ter chegado até aqui!</Title>
          <div className={styles.margin20}>
            <SubTitle type="Lg">
              Agora você já sabe bastante sobre proposta de valor! Espero que
              tenha curtido esse mini curso!
            </SubTitle>
          </div>
          <div className={styles.marginTopBottom20}>
            <SubTitle type="Lg">Até mais!</SubTitle>
          </div>
          <div className={styles.buttons}>
            <Button type="Blue" url="/cursos">
              Voltar para cursos
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
