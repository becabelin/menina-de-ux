// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import SubTitle from '@/components/common/Subtitle/SubTitle'
import Card from '@/components/common/Card'

// Styles
import styled from '@/styles/Home.module.scss'
import styledCursos from '@/styles/Cursos.module.scss'

// Utilities
import React, { useState } from 'react'

// Hooks
// Interfaces

type Filtro = {
  label: string
  key: string
}

const filtros: Filtro[] = [
  { label: 'Todos', key: 'todos' },
  { label: 'Cloud e Data Science', key: 'cloud' },
  { label: 'Desenvolvimento', key: 'desenvolvimento' },
  { label: 'Games', key: 'games' },
  { label: 'Marketing', key: 'marketing' },
  { label: 'Idiomas', key: 'idiomas' },
  { label: 'Soft-Skills', key: 'softskills' },
  { label: 'UI/UX Design', key: 'uiux' },
  { label: 'UX Writing', key: 'uxwriting' },
]

export default function Cursos() {
  const [filtroSelecionado, setFiltroSelecionado] = useState<string>('Todos')

  const handleClickFiltro = (filtro: string) => {
    setFiltroSelecionado(filtro)
  }

  return (
    <>
      <Head>
        <title>Cursos</title>
      </Head>
      <main className={styled.containerHome}>
        <section className={styledCursos.hero}>
          <div className={styledCursos.text_wrapper}>
            <div>
              <Title type="Xl">Cursinhos Tops e Gratuitos</Title>
            </div>
            <div className={styledCursos.text_subtit_01}>
              <SubTitle type="Default">
                Os melhores de tech (e outras áreas, hein)
              </SubTitle>
            </div>
            <div className={styledCursos.text_subtit_02}>
              <SubTitle type="Default">
                Você pode filtrar os cursos por uma área específica, <br />
                mas tem que têm todos os tipos de cursos!
              </SubTitle>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className={styledCursos.cursos}>
          <div className={styledCursos.categorias_wrapper}>
            <ul className={styledCursos.categorias_list}>
              {filtros.map((filtro) => (
                <li
                  key={filtro.key}
                  onClick={() => handleClickFiltro(filtro.key)}
                  className={`${styledCursos.categorias_item} ${
                    filtroSelecionado === filtro.key ? 'selecionado' : ''
                  }`}
                >
                  {filtro.label}
                </li>
              ))}
            </ul>
          </div>
          {/* Cards com os cursos */}
          <div className={styledCursos.cards_wrapper}>
            <ul className={styledCursos.lista_cards}>
              <li className={styledCursos.card}>
                <Card
                  type="Secondary"
                  src="./CardCourse/image1.svg"
                  alt="1MiO"
                  title="1MiO"
                  description="A iniciativa Um Milhão de Oportunidades (1MiO) é a maior articulação do Brasil pela inclusão produtiva de adolescentes e jovens no mundo do trabalho decente. no site tem diversos cursos, eventos e oportunidades de trabalho divulgadas!"
                  href="#"
                />
              </li>
              <li>
                <Card
                  type="Secondary"
                  src="./CardCourse/image1.svg"
                  alt="1MiO"
                  title="1MiO"
                  description="A iniciativa Um Milhão de Oportunidades (1MiO) é a maior articulação do Brasil pela inclusão produtiva de adolescentes e jovens no mundo do trabalho decente. no site tem diversos cursos, eventos e oportunidades de trabalho divulgadas!"
                  href="#"
                />
              </li>
              <li>
                <Card
                  type="Secondary"
                  src="./CardCourse/image1.svg"
                  alt="1MiO"
                  title="1MiO"
                  description="A iniciativa Um Milhão de Oportunidades (1MiO) é a maior articulação do Brasil pela inclusão produtiva de adolescentes e jovens no mundo do trabalho decente. no site tem diversos cursos, eventos e oportunidades de trabalho divulgadas!"
                  href="#"
                />
              </li>
              <li>
                <Card
                  type="Secondary"
                  src="./CardCourse/image1.svg"
                  alt="1MiO"
                  title="1MiO"
                  description="A iniciativa Um Milhão de Oportunidades (1MiO) é a maior articulação do Brasil pela inclusão produtiva de adolescentes e jovens no mundo do trabalho decente. no site tem diversos cursos, eventos e oportunidades de trabalho divulgadas!"
                  href="#"
                />
              </li>
              <li>
                <Card
                  type="Secondary"
                  src="./CardCourse/image1.svg"
                  alt="1MiO"
                  title="1MiO"
                  description="A iniciativa Um Milhão de Oportunidades (1MiO) é a maior articulação do Brasil pela inclusão produtiva de adolescentes e jovens no mundo do trabalho decente. no site tem diversos cursos, eventos e oportunidades de trabalho divulgadas!"
                  href="#"
                />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
