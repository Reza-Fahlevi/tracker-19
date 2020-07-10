import { Container, Grid, Typography } from '@material-ui/core'
import Carousel from '@brainhubeu/react-carousel'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import { withStyles } from '@material-ui/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import MainLayout from '../layout/main'
import { getAllCases, getAllCountriesCases } from '../store/actions/covidAction'
import { formatNumber, loading, danger, warning, basic, success, dynamicSort, primary, disabled, white, blackMain } from '../utils/lib'

class Global extends MainLayout {

  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      filteredListItem: []
    }
  }

  componentDidMount() {
    const { getAllCases, getAllCountriesCases } = this.props

    // getting all cases & all countries cases data 
    getAllCases()
    getAllCountriesCases()
  }

  // function for filtering countries array from input
  onSearchTextChange = (event) => {
    const { listAllCountriesCases } = this.props.covid

    // filtering array to get data from input
    let filtered = _.filter(listAllCountriesCases, (item) => {
      return item.country.toLowerCase().includes(event.target.value.toLowerCase())
    })

    // set null if empty input
    if (_.isEmpty(event.target.value)) {
      filtered = null
    }

    // change state
    this.setState({ searchText: event.target.value, filteredListItem: filtered })
  }

  // render custom arrow styling for swiper
  renderArrow = (arrow, disabled) => {
    const { classes } = this.props

    return (
      <div className={classes.swiperButton}>
        {arrow == 'left' ? (
          <ChevronLeft color={disabled ? 'disabled' : 'primary'} />
        ) : (
            <ChevronRight color={disabled ? 'disabled' : 'primary'} />
          )}
      </div>
    )
  }

  // rendering custom swiper data
  renderSwiperData = (data, color, status) => {
    const { classes } = this.props

    return (
      <div className={classes.swiperCard} style={{ margin: '0 16px' }}>
        <div style={{ borderRadius: 16, borderTop: `16px solid ${color}`, padding: 16 }}>
          <Typography className={classes.heroText}>Kasus {status}</Typography>
          <Typography className={classes.heroTextPrimary}>Covid-19</Typography>
        </div>
        <div className={classes.swiperCardData} />
        <Typography className={classes.heroText} style={{ padding: 16 }}>{formatNumber(data || 0)}</Typography>
      </div>
    )
  }

  // render input for searching country
  renderSearchCountry = () => {
    const { classes } = this.props
    const { searchText } = this.state

    return (
      <input
        placeholder="Cari negara..."
        className={classes.searchContainer}
        onChange={(e) => this.onSearchTextChange(e)}
        value={searchText} />
    )
  }

  // rendering all countries cases data
  renderAllCountries = (item) => {
    const { classes } = this.props
    const statusHeader = item.cases >= 1000 ? danger : item.cases >= 500 ? warning : item.cases <= 100 ? basic : success

    // not rendering data if country == world
    if (item.country == 'World') return null

    // rendering data except world
    else return (
      <Grid item xs={12} sm={4} alignItems="center" justify="center">
        <div className={classes.swiperCard} style={{ borderTop: `16px solid ${statusHeader}` }}>
          <div style={{ padding: 8 }}>
            <Typography className={classes.heroText}>{item.country}</Typography>
          </div>
          <div className={classes.swiperCardData} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ padding: 16 }}>
              <Typography className={classes.detailText}>Kasus hari ini &nbsp;: <span style={{ fontWeight: 'bold' }}>{formatNumber(item.todayCases || 0)}</span></Typography>
              <Typography className={classes.detailText}>Kematian hari ini &nbsp;: <span style={{ fontWeight: 'bold' }}>{formatNumber(item.todayDeaths || 0)}</span></Typography>
            </div>
            <div style={{ padding: '0 16px' }}>
              <Typography className={classes.detailText}>Total kasus &nbsp;: <span style={{ fontWeight: 'bold' }}>{formatNumber(item.cases || 0)}</span></Typography>
              <Typography className={classes.detailText}>Total kematian&nbsp;: <span style={{ fontWeight: 'bold' }}>{formatNumber(item.deaths || 0)}</span></Typography>
              <Typography className={classes.detailText}>Total positif&nbsp;: <span style={{ fontWeight: 'bold' }}>{formatNumber(item.active || 0)}</span></Typography>
            </div>
            <div style={{ padding: 16 }}>
              <Typography className={classes.detailText}>Sembuh &nbsp;: <span style={{ fontWeight: 'bold' }}>{formatNumber(item.recovered || 0)}</span></Typography>
              <Typography className={classes.detailText}>Kondisi kritis &nbsp;: <span style={{ fontWeight: 'bold' }}>{formatNumber(item.critical || 0)}</span></Typography>
            </div>
          </div>
        </div>
      </Grid>
    )
  }

  render() {
    const { covid, classes } = this.props
    const { filteredListItem } = this.state
    let listCountries = []

    /**
     * create dynamic sort data for array list countries case
     * you can change sort from 'descending [desc]'  to 'ascending [asc]'
     */
    if (!_.isEmpty(covid.listAllCountriesCases)) {
      listCountries = covid.listAllCountriesCases.sort(dynamicSort('cases', 'desc'))
    }

    /**
     * create ternary condition for render filtered countries array or list countries array
     */

    let arrayCountries = !_.isEmpty(filteredListItem) ? filteredListItem : listCountries

    return super.render(
      <Container>
        <Grid container spacing={2} style={{ marginTop: 48, padding: '72px 0' }}>
          <Grid container item spacing={2} xs={12} sm={6} direction="column" alignItems="center" justify="center" style={{ marginBottom: 16 }}>
            <img src="/assets/img/global/illustration.png" alt="Monitoring Global Cases" style={{ width: '100%' }} />
            <Typography className={classes.heroText} style={{ textAlign: 'center' }}>Perkembangan virus <br /> <span className={classes.heroTextPrimary}>Covid-19</span> tingkat global</Typography>
          </Grid>
          <Grid container item spacing={0} xs={12} sm={6} direction="column" alignItems="center" justify="center">

            {/* render swiper / carousel with 3 condition, [loading, not empty data, and default statement for failed request] */}
            {covid.loadingAllCases ? loading() : !_.isEmpty(covid.listAllCases) ? (
              <>
                <Carousel
                  arrowLeft={this.renderArrow('left', false)}
                  arrowLeftDisabled={this.renderArrow('left', true)}
                  arrowRight={this.renderArrow('right', false)}
                  arrowRightDisabled={this.renderArrow('right', true)}
                  addArrowClickHandler>
                  {this.renderSwiperData(covid.listAllCases.cases, blackMain, 'Positif')}
                  {this.renderSwiperData(covid.listAllCases.deaths, danger, 'Meninggal')}
                  {this.renderSwiperData(covid.listAllCases.recovered, success, 'Sembuh')}
                </Carousel>
                {this.renderSearchCountry()}
              </>
            ) : <Typography className={classes.heroText} style={{ padding: 16 }}>Gagal mendapatkan data atau tidak ada data yang dapat ditampilkan.</Typography>}
          </Grid>
          <Grid container spacing={3} style={{ textAlign: 'center', marginTop: 48 }}>

            {/* render list countries data with 3 condition, [loading, not empty data, and default statement for failed request] */}
            {covid.loadingAllCountriesCases ? (
              <Grid item xs={12} sm={12} style={{ padding: '16px 0' }}>
                {loading('50%')}
              </Grid>
            ) : !_.isEmpty(covid.listAllCountriesCases) ? (
              arrayCountries.map((item) => {
                return this.renderAllCountries(item)
              })
            ) : (
              <Grid item xs={12} sm={12}>
                <Typography className={classes.heroText} style={{ padding: 16 }}>Gagal mendapatkan data atau tidak ada data yang dapat ditampilkan.</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    )
  }

}

const styles = theme => ({
  detailText: {
    color: theme.typography.color,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 300,
    fontSize: 14
  },
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
  searchContainer: {
    backgroundColor: disabled,
    border: 'none',
    borderRadius: 24,
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    marginTop: 24,
    outline: 'none',
    padding: '8px 20px',
    width: '75%'
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
  swiperButton: {
    alignItems: 'center',
    backgroundColor: disabled,
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    width: 40
  },
})

Global.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = store => ({
  covid: store.covid
})

const mapDispatchToProps = dispatch => {
  return {
    getAllCases: bindActionCreators(getAllCases, dispatch),
    getAllCountriesCases: bindActionCreators(getAllCountriesCases, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Global))
