import { Container, Grid, Hidden, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import _ from 'lodash'

import MainLayout from '../layout/main'
import { primary, blackMain } from '../utils/lib'

class App extends MainLayout {

  render() {
    const { classes } = this.props

    return super.render(
      <Container>
        <Grid container spacing={2} style={{ marginTop: 72, padding: '24px 0' }}>

          {/* First Section */}
          <Grid sm={12} md={6} style={{ padding: '48px 0' }}>
            <img src="/assets/img/index/illustration_1_2x.png" style={{ width: '100%' }} />
          </Grid>

          <Grid item sm={12} md={6} style={{ alignItems: 'flex-end', display: 'flex', marginBottom: 8 }}>
            <Grid container alignContent="center">
              <Typography className={classes.detailText}>tracker-19 / ˈtrakər . nīnˈtēn</Typography>
              <Typography className={classes.heroText}>
                "<span style={{ color: primary, fontSize: 28 }}>TRACKER-19</span> adalah layanan yang menyediakan informasi terkait perkembangan virus <span style={{ color: primary, fontSize: 28 }}>Covid-19</span>"
                </Typography>
              <Typography className={classes.detailText}>- tracker-19 team -</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Section */}
        <Grid container spacing={2} style={{ alignItems: 'center', display: 'flex', margin: '24px 0' }}>
          <Hidden mdUp>
            <Grid sm={12} md={6} style={{ padding: '48px 0' }}>
              <img src="/assets/img/index/illustration_2.png" style={{ width: '100%' }} />
            </Grid>
          </Hidden>

          <Grid item sm={12} md={6}>
            <Grid item style={{ paddingRight: 16 }}>
              <Typography className={classes.heroText} style={{ marginBottom: 8 }}>
                Sahabat anda dikala <span style={{ color: primary, fontSize: 28 }}>pandemi</span> berlangsung
              </Typography>
              <Typography className={classes.detailText}>
                Dapatkan informasi mengenai perkembangan covid-19 dari seluruh dunia. Ketahui status daerah yang sedang anda tempati. Ikuti juga test sederhana dari kami untuk mendeteksi infeksi covid-19.
              </Typography>
            </Grid>
          </Grid>

          <Hidden smDown>
            <Grid item sm={12} md={6} style={{ backgroundColor: blackMain, height: 500, padding: '48px 0' }}>
              <div style={{ alignItems: 'center', display: 'flex', height: 500, justifyContent: 'center' }}>
                <img src="/assets/img/index/illustration_2.png" />
              </div>
            </Grid>
          </Hidden>
        </Grid>

        {/* Third Section */}
        <Grid container spacing={2} style={{ alignItems: 'center', display: 'flex', margin: '24px 0' }}>
          <Grid sm={12} md={6} style={{ padding: '48px 0' }}>
            <img src="/assets/img/index/illustration_3.png" style={{ width: '100%' }} />
          </Grid>

          <Grid item sm={12} md={6}>
            <Typography className={classes.heroText} style={{ marginBottom: 8 }}>
              “Sederhana testnya, <span style={{ color: primary, fontSize: 28 }}>besar manfaatnya</span>“
              </Typography>
            <Typography className={classes.detailText}>
              Anda bisa mendeteksi infeksi covid-19 mulai dari diri anda sendiri! Deteksi gejala-gejala covid-19 dan lakukan tindakan yang diperlukan untuk mencegah penyebaran covid-19. Perubahan dimulai dari anda!
              </Typography>
          </Grid>
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
  detailText: {
    color: theme.typography.color,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 300,
    fontSize: 20
  },
})

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)