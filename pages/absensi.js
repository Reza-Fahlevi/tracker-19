import React, { PureComponent } from 'react'
import MainLayout from '../layout/main'
import { Button, Checkbox, Radio , RadioGroup, FormLabel, FormControlLabel, FormControl, Switch, TextField, Container, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { primary, disabled, white, blackMain, danger, success, formatNumber, loading } from '../utils/lib'
// import { value, state, handleChange } from '../components/UserForm'

class Absensi extends MainLayout {


  // RadioProdi() {
  //   const [value, setValue] = this.state('female');

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   }

  //   return (
  //     <RadioGroup aria-label="prodi" name="prodi" value={value} onChange={handleChange}>
  //       <FormControlLabel value="tp3" control={<Radio />} label="Teknik Pembuatan Perkakas Presisi" />
  //       <FormControlLabel value="tm" control={<Radio />} label="Teknim Manufaktur" />
  //       <FormControlLabel value="mi/si" control={<Radio />} label="Manajemen Informatika/Sistem Informasi" />
  //       <FormControlLabel value="pmo" control={<Radio />} label="Pembuatan Mesin Otomotif" />
  //       <FormControlLabel value="mk" control={<Radio />} label="Mekatronika" />
  //       <FormControlLabel value="tkbg" control={<Radio />} label="Teknik Konstruksi Bangunan Gedung" />
  //     </RadioGroup>
  //   )
  // }
  constructor(props) {
    super(props);

    this.state = {
      option: '',
      checkedA: true,
      checkedB: true,
      hipertensi: false,
      diabetes: false,
      jantung: false,
      asma: false,
      ginjal: false,
      lever: false,
      kosong: false
    };
  }

  handleChangeRadio = (e) => {
    this.setState({option: e.target.name})
  }

  handleChangeSwitch = (e) => {
    this.setState({[e.target.name]: e.target.checked})
  }

  handleChangeCheckBox = (e) => {
    this.setState({[e.target.name]: e.target.checked})
  }  


  render() {
    const { classes } = this.props
    const { hipertensi, diabetes, jantung, asma, ginjal, lever, kosong } = this.state

    return super.render (
      <Container>
        <Grid container spacing={3} style={{ marginTop: 24, padding: '72px 0' }} alignItems='left' justify='left'>
          <Grid item xs={12} direction='column' alignItems='left' justify='left'>
          <Typography className={classes.heroText} style={{ textAlign: 'left', marginTop: 16, marginBottom: 16 }}>Form <span className={classes.heroTextPrimary}>Absensi</span> </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>NIM </Typography>
              <TextField required id="nim" label="Masukkan NIM anda" type="number" helperText="Harap masukkan NIM yang valid" fullWidth variant="outlined" />
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Nama </Typography>
              <TextField required id="nama" label="Masukkan nama anda" helperText="Harap masukkan nama lengkap yang sesuai dengan akun SIA" fullWidth variant="outlined" />
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Program studi </Typography>
              {/* <FormLabel component="legend">Pilih program studi</FormLabel> */}
              <FormControl component="fieldset">
                <RadioGroup aria-label="prodi" name="prodi" value={this.state.option} onChange={this.handleChangeRadio}>
                  <FormControlLabel value="tp3" control={<Radio />} label="Teknik Pembuatan Perkakas Presisi" />
                  <FormControlLabel value="tm" control={<Radio />} label="Teknik Manufaktur" />
                  <FormControlLabel value="mi/si" control={<Radio />} label="Manajemen Informatika/Sistem Informasi" />
                  <FormControlLabel value="pmo" control={<Radio />} label="Pembuatan Mesin Otomotif" />
                  <FormControlLabel value="mk" control={<Radio />} label="Mekatronika" />
                  <FormControlLabel value="tkbg" control={<Radio />} label="Teknik Konstruksi Bangunan Gedung" />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Nomor telepon </Typography>
              <TextField required id="telepon" label="Masukkan nomor telepon" helperText="Harap masukkan nomor telepon yang valid" fullWidth type="number" variant="outlined" />
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Alamat</Typography>
              <TextField required id="telepon" label="Masukkan alamat lengkap" multiline helperText="Harap masukkan alamat yang lengkap (kota, kecamatan, kabupaten, provinsi)" fullWidth rows={4} variant="outlined" />
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Apakah ada anggota keluarga inti yang baru pulang dari luar negeri? (Sejak akhir Desember 2019 sampai hari ini)?</Typography>
              <FormLabel style={{margin : '-20px 20px 20px 0px'}}>Tidak ada</FormLabel>
              <FormControlLabel
                control={<Switch checked={this.state.checkedA} onChange={this.handleChangeSwitch} name="status_keluarga_overseas" />}
              />
              <FormLabel>Ada</FormLabel>
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Bagaimana kondisi kesehatan anda saat ini?</Typography>
              <FormLabel style={{margin : '-20px 20px 20px 0px'}}>Sehat</FormLabel>
              <FormControlLabel
                control={<Switch checked={this.state.checkedA} onChange={this.handleChangeSwitch} name="status_kondisi_kesehatan" />}
              />
              <FormLabel>Sakit</FormLabel>
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Bagaimana kondisi kesehatan keluarga Anda/kerabat Anda saat ini? (Jika berada di rumah orang tua/kerabat)</Typography>
              <FormLabel style={{margin : '-20px 20px 20px 0px'}}>Sehat</FormLabel>
              <FormControlLabel
                control={<Switch checked={this.state.checkedA} onChange={this.handleChangeSwitch} name="status_keluarga_sakit" />}
              />
              <FormLabel>Sakit</FormLabel>
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Apakah di dalam keluarga Anda (termasuk Anda), ada anggota keluarga yang terpapar virus Corona/COVID-19? (ODP/PDP/Suspect/Positif)</Typography>
              <FormLabel style={{margin : '-20px 20px 20px 0px'}}>Tidak ada</FormLabel>
              <FormControlLabel
                control={<Switch checked={this.state.checkedA} onChange={this.handleChangeSwitch} name="status_keluarga_covid19" />}
              />
              <FormLabel>Ada</FormLabel>
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Apakah di lingkungan Anda (termasuk Anda), ada warga yang terpapar virus Corona/COVID-19? (ODP/PDP/Suspect/Positif, terbatas dalam RT/Blok dan ada data resmi dari pengurus RT/penanggung jawab setempat)</Typography>
              <FormLabel style={{margin : '-20px 20px 20px 0px'}}>Tidak ada</FormLabel>
              <FormControlLabel
                control={<Switch checked={this.state.checkedA} onChange={this.handleChangeSwitch} name="status_lingkungan_covid19" />}
              />
              <FormLabel>Ada</FormLabel>
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Apakah Anda menderita penyakit di bawah ini?</Typography>
                <FormControlLabel
                  control={<Checkbox checked={hipertensi} onChange={this.handleChangeCheckBox} name="hipertensi" />}
                  label="Hipertensi"
                />
                <FormControlLabel
                  control={<Checkbox checked={jantung} onChange={this.handleChangeCheckBox} name="jantung" />}
                  label="Gangguan jantung"
                />
                <FormControlLabel
                  control={<Checkbox checked={asma} onChange={this.handleChangeCheckBox} name="paru" />}
                  label="Gangguan paru-paru (asma)"
                />
                <FormControlLabel
                  control={<Checkbox checked={ginjal} onChange={this.handleChangeCheckBox} name="ginjal" />}
                  label="Ginjal"
                />
                <FormControlLabel
                  control={<Checkbox checked={lever} onChange={this.handleChangeCheckBox} name="lever" />}
                  label="Lever"
                />
                <FormControlLabel
                  control={<Checkbox checked={kosong} onChange={this.handleChangeCheckBox} name="kosong" />}
                  label="Tidak ada satupun diatas"
                />
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Apakah saat ini Anda sedang OJT/Magang/Bekerja?</Typography>
              <FormLabel style={{margin : '-20px 20px 20px 0px'}}>Tidak</FormLabel>
              <FormControlLabel
                control={<Switch checked={this.state.checkedA} onChange={this.handleChangeSwitch} name="status_lingkungan_covid19" />}
              />
              <FormLabel>Ya</FormLabel>
            </div>
            <div>
              <Typography className={classes.description} style={{ margin: '8px 0' }}>Apakah anda pernah keluar rumah/tempat umum, menggunakan transportasi umum, keluar kota/negeri, mengikuti kegiatan yang melibatkan orang banyak, melakukan kontak fisik dengan orang yang dinyatakan ODP, PDP, atau konfirm COVID-19, atau mengalami demam/batuk/pilek/sakit tenggorokan/sesak dalam 14 hari terakhir?</Typography>
              <FormLabel style={{margin : '-20px 20px 20px 0px'}}>Tidak</FormLabel>
              <FormControlLabel
                control={<Switch checked={this.state.checkedA} onChange={this.handleChangeSwitch} name="status_lingkungan_covid19" />}
              />
              <FormLabel>Ya</FormLabel>
            </div>
            <Button variant='contained' className={classes.buttonOk} onClick={() => this.setState({ startCheckup: false, step: 0, valueYes: 0, valueNo: 0, finish: false })}>SUBMIT</Button>
          </form>


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
    }
  })   
  
  export default (withStyles(styles)(Absensi))