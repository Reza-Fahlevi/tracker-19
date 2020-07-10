import { Container, Grid, Typography } from '@material-ui/core'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { getCountriesCases, getCovidIndonesia } from '../store/actions/covidAction'
import MainLayout from '../layout/main'
import { primary, disabled, white, blackMain, danger, success, formatNumber, loading } from '../utils/lib'
import ChartMapIndonesia from '../components/ChartMapIndonesia';


class Indonesia extends MainLayout {
  componentDidMount() {
    const { getCountriesCases, getCovidIndonesia } = this.props

    getCountriesCases('indonesia')
    getCovidIndonesia()
  }

  // rendering custom swiper data
  renderData = (data, color, status) => {
    const { classes } = this.props

    return (
      <Grid item xs={12} sm={4} alignItems='center' justify='center'>
        <div className={classes.swiperCard} style={{ borderTop: `16px solid ${color}` }}>
          <div style={{ padding: 16 }}>
            <Typography className={classes.heroText}>Kasus {status}</Typography>
          </div>
          <div className={classes.swiperCardData} />
          <Typography className={classes.heroText} style={{ padding: 16 }}>{formatNumber(data || 0)}</Typography>
        </div>
      </Grid>
    )
  }

  render() {
    const { covid, classes } = this.props
    let data = covid.listCovidIndonesia

    return super.render(
      <Container>
        {/* <Grid container spacing={3} style={{ marginTop: 48, padding: '72px 0' }}>
          <Grid item xs={12} direction='column' alignItems='center' justify='center' style={{ marginBottom: 16 }}>
            <img src='/assets/img/indonesia/illustration.png' alt='Indonesia Map' style={{ width: '100%' }} />
            <Typography className={classes.heroText} style={{ textAlign: 'center' }}>Perkembangan virus <span className={classes.heroTextPrimary}>Covid-19</span> di <br /><span className={classes.heroTextPrimary}>Indonesia</span></Typography>
          </Grid>
        </Grid> */}

        <Grid container spacing={3} style={{ marginTop: 48, padding: '72px 0' }} alignItems='center' justify='center'>
          <Grid item xs={12} direction='column' alignItems='center' justify='center'>
            <ChartMapIndonesia data={data} />
            <Typography className={classes.heroText} style={{ textAlign: 'center', marginTop: 16 }}>Perkembangan virus <span className={classes.heroTextPrimary}>Covid-19</span> di <br /><span className={classes.heroTextPrimary}>Indonesia</span></Typography>
          </Grid>

          {/* render data countri with 3 condition, [loading, not empty data, and default statement for failed request] */}
          {covid.loadingCountriesCases ? (
            <Grid item xs={12} sm={12} style={{ padding: '16px 0', textAlign: 'center' }}>
              {loading('50%')}
            </Grid>
          ) : !_.isEmpty(covid.listCountriesCases) ? (
            <>
              {this.renderData(covid.listCountriesCases.cases, blackMain, 'Positif')}
              {this.renderData(covid.listCountriesCases.deaths, danger, 'Meninggal')}
              {this.renderData(covid.listCountriesCases.recovered, success, 'Sembuh')}
            </>
          ) : covid.listCountriesCases == 'Country not found' ? (
            <Grid item xs={12} sm={12}>
              <Typography className={classes.heroText} style={{ padding: 16, textAlign: 'center' }}>Gagal mendapatkan data atau tidak ada data yang dapat ditampilkan.</Typography>
            </Grid>
          ) : (
                  ''
                )}
        </Grid>
      </Container>
    )
  }
}

const styles = theme => ({
  heroText: {
    color: theme.typography.color,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    fontSize: 24
  },
  heroTextPrimary: {
    color: primary,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    fontSize: 24
  },
  swiperCard: {
    backgroundColor: white,
    borderRadius: 16,
    border: `2px solid ${disabled}`,
    margin: '0 16px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    }
  },
  swiperCardData: {
    backgroundColor: disabled,
    height: 2,
    width: '100%'
  },
})

Indonesia.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = store => ({
  covid: store.covid
})

const mapDispatchToProps = dispatch => {
  return {
    getCountriesCases: bindActionCreators(getCountriesCases, dispatch),
    getCovidIndonesia: bindActionCreators(getCovidIndonesia, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Indonesia))