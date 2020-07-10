import React from 'react'
import { Chart } from 'react-google-charts'

class ChartMapIndonesia extends React.PureComponent {
  render() {
    const { data } = this.props

    if (data) {
      let covidPoint = [['Province', 'Positif','Sembuh']]

      data.map((item) => {
        covidPoint.push([item.attributes.Provinsi, item.attributes.Kasus_Posi, item.attributes.Kasus_Semb])
      })

      return (
        <Chart
          width={'100%'}
          height={'400px'}
          chartType='GeoChart'
          data={
            covidPoint
          }
          mapsApiKey='YOUR_KEY_HERE'
          rootProps={{ 'data-testid': '1' }}
          options={
            {
              region: 'ID',
              resolution: 'provinces',
              colorAxis: { colors: ['#ffd600', '#ffab00', '#ff6d00', '#dd2c00'] }
            }
          }
        />
      )
    } else return <></>
  }
}

export default ChartMapIndonesia