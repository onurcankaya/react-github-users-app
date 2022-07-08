import { useContext } from 'react'
import styled from 'styled-components'

import { PieChart } from '../components/Charts'
import { GithubContext } from '../context'
import { ChartItem } from '../types'

export const Repos = (): JSX.Element => {
  const { repos } = useContext(GithubContext)

  const languages = repos.reduce((total: Record<string, ChartItem>, item) => {
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

  const languagesArray = Object.values(languages)
    .sort((a, b) => a.value - b.value)
    .slice(0, 5)

  return (
    <Wrapper>
      <PieChart title='Languages' data={languagesArray} />
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
