import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import ReactFusionCharts from 'react-fusioncharts'

import { ChartItem } from '../types/chart'

ReactFusionCharts.fcRoot(FusionCharts, Charts, FusionTheme)

type ChartType = 'pie2d' | 'column2d'

type Props = {
  type: ChartType
  title: string
  data: ChartItem[]
  customSettings: Record<string, string>
}

export const Chart = ({ type, title, data, customSettings }: Props) => {
  const chartConfigs = {
    type,
    width: '100%',
    height: 400,
    dataFormat: 'JSON',
    dataSource: {
      chart: {
        caption: title,
        theme: 'fusion',
        ...customSettings,
      },
      data,
    },
  }
  return <ReactFusionCharts {...chartConfigs} />
}
