import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import ReactFusionCharts from 'react-fusioncharts'

import { ChartItem } from '../../types/chart'

ReactFusionCharts.fcRoot(FusionCharts, Charts, FusionTheme)

type Props = {
  title: string
  data: ChartItem[]
}

export const PieChart = ({ title, data }: Props) => {
  const chartConfigs = {
    type: 'pie2d',
    width: '100%',
    height: 400,
    dataFormat: 'JSON',
    dataSource: {
      chart: {
        caption: title,
        showlegend: '1',
        showpercentvalues: '1',
        legendposition: 'bottom',
        usedataplotcolorforlabels: '1',
        theme: 'fusion',
      },
      data,
    },
  }
  return <ReactFusionCharts {...chartConfigs} />
}
