import React from 'react'
import MainLayout from '../layout/main'
import { Container, Grid, Typography, Paper, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { primary, disabled, white, blackMain, danger } from '../utils/lib';

class Checkup extends MainLayout {

  constructor(props) {
    super(props)
    this.state = {
      startCheckup: false,
      step: 1,
      valueYes: 0,
      valueNo: 0,
      finish: false
    }
  }

  renderListItem = (value) => (<li style={{ marginBottom: 4 }}><Typography>- {value}</Typography></li>)

  renderButtonOption = (step, finish) => {
    const { classes } = this.props
    const { valueNo, valueYes } = this.state

    return (
      <div style={{ flexDirection: 'row' }}>
        <Button variant='contained' className={classes.buttonOk} style={{ marginRight: 8 }} onClick={() => this.setState({ step, valueYes: valueYes + 1, finish })}>Ya</Button>
        <Button variant='contained' className={classes.buttonCancel} onClick={() => this.setState({ step, valueNo: valueNo + 1, finish })}>Tidak</Button>
      </div>
    )
  }

  stepOne = () => {
    const { classes } = this.props

    return (
      <>
        <Typography className={classes.description}>Apakah anda memiliki penyakit bawaan?</Typography>
        {this.renderButtonOption(2, false)}
      </>
    )
  }

  stepTwo = () => {
    const { classes } = this.props

    return (
      <>
        <Typography className={classes.description}>Apakah Anda mengalami salah satu dari yang berikut:</Typography>
        <ul style={{ listStyle: 'none', paddingInlineStart: 0, textAlign: 'left' }}>
          {this.renderListItem('Kesulitan bernafas yang parah (Bernafas dengan sangat -cepat atau berbicara dalam satu kata)')}
          {this.renderListItem('Nyeri dada yang parah')}
          {this.renderListItem('Sulit untuk bangun')}
          {this.renderListItem('Merasa kebingungan')}
          {this.renderListItem('Penurunan kesadaran')}
        </ul>
        {this.renderButtonOption(3, false)}
      </>
    )
  }

  stepThree = () => {
    const { classes } = this.props

    return (
      <>
        <Typography className={classes.description}>Apakah Anda mengalami salah satu dari yang berikut:</Typography>
        <ul style={{ listStyle: 'none', paddingInlineStart: 0, textAlign: 'left' }}>
          {this.renderListItem('Nafas yang pendek saat istirahat')}
          {this.renderListItem('Ketidakmampuan untuk berbaring karena kesulitan bernafas')}
          {this.renderListItem('Kondisi kesehatan kronis yang anda alami dirasakan lebih berat karena kesulitan bernapas')}
        </ul>
        {this.renderButtonOption(4, false)}
      </>
    )
  }

  stepFour = () => {
    const { classes } = this.props

    return (
      <>
        <Typography className={classes.description}>Apakah Anda mengalami salah satu dari yang berikut:</Typography>
        <ul style={{ listStyle: 'none', paddingInlineStart: 0, textAlign: 'left' }}>
          {this.renderListItem('Demam')}
          {this.renderListItem('Batuk')}
          {this.renderListItem('Bersin')}
          {this.renderListItem('Sakit Tenggorokan')}
          {this.renderListItem('Sakit Sulit Bernafas')}
        </ul>
        {this.renderButtonOption(5, false)}
      </>
    )
  }

  stepFive = () => {
    const { classes } = this.props

    return (
      <>
        <Typography className={classes.description}>Apakah anda pernah muncul gejala sekitar 14 hari setelah travelling ke luar negeri? atau ke kota terjangkit (Jakarta, Bali, Solo, Yogyakarta, Pontianak, Manado, Bandung dll)?</Typography>
        {this.renderButtonOption(6, false)}
      </>
    )
  }

  stepSix = () => {
    const { classes } = this.props

    return (
      <>
        <Typography className={classes.description}>Apakah anda sempat mengikuti kegiatan yang melibatkan orang banyak dalam 14 hari terakhir?</Typography>
        {this.renderButtonOption(7, false)}
      </>
    )
  }

  stepSeven = () => {
    const { classes } = this.props

    return (
      <>
        <Typography className={classes.description}>Apakah Anda memberikan perawatan atau melakukan kontak dekat dengan seseorang dengan COVID-19 (kemungkinan atau dikonfirmasi) saat mereka sakit (batuk, demam, bersin, atau sakit tenggorokan)?</Typography>
        {this.renderButtonOption(8, false)}
      </>
    )
  }

  stepEight = () => {
    const { classes } = this.props

    return (
      <>
        <Typography className={classes.description}>Apakah Anda memiliki kontak dekat dengan seseorang yang bepergian ke luar Negeri/kota dalam 14 hari terakhir yang menjadi sakit (batuk, demam, bersin, atau sakit tenggorokan)?</Typography>
        {this.renderButtonOption('finish', true)}
      </>
    )
  }

  result = () => {
    const { classes } = this.props
    const { valueYes } = this.state

    let result = (valueYes / 8) * 100

    if (result <= 30) {
      return (
        <div style={{ textAlign: 'left' }}>
          <Typography className={classes.description} style={{ marginBottom: 16 }}>Berdasarkan tes yang telah dilakukan, <span style={{ fontWeight: 'bold' }}>anda memiliki kemungkinan {result}% terkena virus corona</span></Typography>
          <Typography className={classes.description} style={{ marginBottom: 16 }}>Anda <span style={{ fontWeight: 'bold' }}>tidak menunjukkan gejala-gejala infeksi virus corona</span>. Namun, anda tetap harus menjaga kesehatan dan mematuhi protokol kesehatan yang ada</Typography>
          <Button variant='contained' className={classes.buttonOk} onClick={() => this.setState({ startCheckup: false, step: 0, valueYes: 0, valueNo: 0, finish: false })}>OK</Button>
        </div>
      )
    } else if (result <= 60) {
      return (
        <div style={{ textAlign: 'left' }}>
          <Typography className={classes.description} style={{ marginBottom: 16 }}>Berdasarkan tes yang telah dilakukan, <span style={{ fontWeight: 'bold' }}>anda memiliki kemungkinan {result}% terkena virus corona</span></Typography>
          <Typography className={classes.description} style={{ marginBottom: 16 }}>Anda menunjukan beberapa gejala infeksi corona. Hal ini juga didukung dengan tindakan anda yang sempat berpergian. Untuk sekarang, <span style={{ fontWeight: 'bold' }}>anda harus melakukan karantina mandiri selama 14 hari, lalu lakukanlah evaluasi. Apabila anda tidak menunjukan gejala lebih lanjut, maka anda bisa dinyatakan aman. Apabila tidak, maka anda disarankan untuk rujuk ke rumah sakit terdekat.</span></Typography>
          <Button variant='contained' className={classes.buttonOk} onClick={() => this.setState({ startCheckup: false, step: 0, valueYes: 0, valueNo: 0, finish: false })}>OK</Button>
        </div>
      )
    } else {
      return (
        <div style={{ textAlign: 'left' }}>
          <Typography className={classes.description} style={{ marginBottom: 16 }}>Berdasarkan tes yang telah dilakukan, <span style={{ color: danger, fontWeight: 'bold' }}>anda memiliki kemungkinan {result}% terkena virus corona!</span></Typography>
          <Typography className={classes.description} style={{ marginBottom: 16 }}>Anda <span style={{ fontWeight: 'bold' }}>menunjukkan gejala-gejala infeksi virus corona</span>. Segera hubungi hotline covid-19 Indonesia :021-5210411 atau kontak ke 081212123119</Typography>
          <Typography className={classes.description} style={{ marginBottom: 16 }}><span style={{ color: danger, fontWeight: 'bold' }}>PERINGATAN!</span></Typography>
          <Typography className={classes.description} style={{ marginBottom: 16 }}>Karena anda menunjukan banyak gejala infeksi virus corona, ada baiknya anda menerapkan <i>social distancing</i> demi menghindari hal-hal yang tidak di-inginkan pada orang-orang yang ada disekitar anda.</Typography>
          <Button variant='contained' className={classes.buttonOk} onClick={() => this.setState({ startCheckup: false, step: 0, valueYes: 0, valueNo: 0, finish: false })}>OK</Button>
        </div>
      )
    }
  }

  renderStep = (step) => {
    switch (step) {
      case 1:
        return this.stepOne()
      case 2:
        return this.stepTwo()
      case 3:
        return this.stepThree()
      case 4:
        return this.stepFour()
      case 5:
        return this.stepFive()
      case 6:
        return this.stepSix()
      case 7:
        return this.stepSeven()
      case 8:
        return this.stepEight()
      case 'finish':
        return this.result()
    }
  }

  render() {
    const { classes } = this.props
    const { startCheckup, step } = this.state

    return super.render(
      <Container>
        <Grid container spacing={3} style={{ marginTop: 20, padding: '72px 0' }}>
          <Paper elevation={3} className={classes.card}>
            {!startCheckup ? (
              <>
                <Typography className={classes.warning}>Peringatan!</Typography>
                <Typography className={classes.description} style={{ margin: '16px 0' }}>Sebelum anda mulai mengisi form ini, perlu di-ingat bahwa ini hanyalah test sederhana yang hasilnya tidak bisa dijadikan sebagai patokan/data yang valid.</Typography>
                <Typography className={classes.description}>Untuk mendapatkan hasil test covid-19 yang akurat, anda harus melakukannya di rumah sakit yang sudah memiliki fasilitas tersebut</Typography>
                <Button variant='contained' className={classes.buttonNext} onClick={() => this.setState({ startCheckup: true, step: 1 })}>LANJUTKAN</Button>
              </>
            ) : this.renderStep(step)}
          </Paper>
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
  warning: {
    color: theme.typography.color,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    fontSize: 32,
  },
  description: {
    color: '#4a4a4a',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 300,
    fontSize: 20,
    textAlign: 'left'
  },
  buttonNext: {
    background: primary,
    '&:hover': {
      background: primary,
    },
    borderRadius: 32,
    color: blackMain,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    padding: '12px 0',
    width: 175
  },
  buttonOk: {
    background: primary,
    '&:hover': {
      background: primary,
    },
    borderRadius: 32,
    color: blackMain,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    padding: '12px 0',
    width: 150
  },
  buttonCancel: {
    background: blackMain,
    '&:hover': {
      background: blackMain,
    },
    borderRadius: 32,
    color: primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    padding: '12px 0',
    width: 150
  },
  card: {
    alignItems: 'center',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    margin: '48px 16px 0',
    padding: 24,
    textAlign: 'center'
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

export default (withStyles(styles)(Checkup))