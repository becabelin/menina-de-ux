// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import SubTitle from '@/components/common/Subtitle/SubTitle'
import Card from '@/components/common/Card'

// Styles
import styledCursos from '@/styles/Cursos.module.scss'

// Utilities
import React, { useState } from 'react'
import { properties } from '@/utilities/Cursos&bootcampObjects'
import Filter from '@/utilities/Filter'

// Hooks
// Interfaces

export default function Cursos() {
  const [filtroSelecionado, setFiltroSelecionado] = useState<string>('Todos')
  const [dataWithFilter, setDataWithFilter] = useState(properties.cursoObjetc)

  const handleClickFiltro = (filtro: string) => {
    const result = Filter(properties.cursoObjetc, filtro)
    setDataWithFilter(result)
    setFiltroSelecionado(filtro)
  }

  return (
    <>
      <Head>
        <title>Cursos</title>
      </Head>
      <main className={styledCursos.wrapper}>
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
              {properties.filtros.map((filtro) => (
                <li
                  key={filtro.key}
                  onClick={() => handleClickFiltro(filtro.key)}
                  className={`${styledCursos.categorias_item} ${filtroSelecionado === filtro.key
                      ? `${styledCursos.selecionado}`
                      : ''
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
              {dataWithFilter.map((item) => (
                <li key={item.id} className={styledCursos.card}>
                  <Card
                    key={item.id}
                    type="Secondary"
                    src={item.image}
                    alt={` imagem do ${item.title} `}
                    title={item.title}
                    description={item.description}
                    href={item.link}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
