import { useContext } from 'react'
import styled from 'styled-components'

import { GithubContext } from '../context'
import { ChartItem } from '../types'

import { Chart } from './'

type ChartData = Record<string, ChartItem>

const formatChartData = (data: ChartData) => {
  return Object.values(data)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)
}

export const Repos = (): JSX.Element => {
  const { repos } = useContext(GithubContext)

  const languages = repos.reduce((total: ChartData, item) => {
    const { language } = item

    if (!language) return total

    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
      }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      }
    }

    return total
  }, {})

  const mostPopularRepos = repos.reduce((total: ChartData, item) => {
    const { name, stargazers_count } = item
    total[name] = {
      label: name,
      value: stargazers_count,
    }
    return total
  }, {})

  return (
    <Wrapper>
      <Chart
        type='pie2d'
        title='Languages'
        data={formatChartData(languages)}
        customSettings={{
          showlegend: '1',
          showpercentvalues: '1',
          legendposition: 'bottom',
          usedataplotcolorforlabels: '1',
        }}
      />
      <Chart
        type='column2d'
        title='Most popular repos'
        data={formatChartData(mostPopularRepos)}
        customSettings={{
          yaxisname: 'Stars',
          aligncaptionwithcanvas: '0',
          plottooltext: 'This repo has $dataValue stars',
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  /* Makes charts responsive */
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`
