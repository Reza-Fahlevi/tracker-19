import React, { PureComponent } from 'react'
import MainLayout from '../layout/main'
import * as Survey from 'survey-react'
import { FormGroup, FormControlLabel, Switch, Container, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { primary, disabled, white, blackMain, danger, success, formatNumber, loading } from '../utils/lib';

class Absensi extends MainLayout {
  
  constructor(props){
    super(props)
    this.state = {
      
    }
    this.onCompleteComponent = this.onCompleteComponent.bind(this)
  }
  
  onCompleteComponent = () => {
    this.setState({
      isCompleted : true
    })
  }
  
  render() {
    const { covid, classes } = this.props
    
    var json = {
      questions: [
        {
          name: "nama",
          type: "text",
          title: "Masukkan nama anda:",
          isRequired: true
        }, {
          type: "dropdown",
          name: "prodi",
          title: "Program studi",
          isRequired: true,
          colCount: 0,
          choices: [
            "TP3",
            "TM",
            "MI/SI",
            "PMO",
            "MK",
            "TKBG"
          ]
        }, {
          name: "telepon",
          type: "text",
          title: "Nomor telepon:",
          isRequired: true
        }, {
          type: "comment",
          name: "alamat",
          title: "Alamat lengkap"
        }, {
          name: "telepon2",
          type: "text",
          title: "Nomor telepon lain yang bisa dihubungi:",
          isRequired: true
        }, {
          type: "boolean",
          name: "bool",
          title: "Please answer the question",
          label: "Apakah ada anggota keluarga inti yang baru pulang dari luar negeri?",
          isRequired: true
        }, {
          type: "boolean",
          name: "bool",
          title: "Please answer the question",
          label: "Apakah anda sedang dalam keadaan sakit?",
          isRequired: true
        }, {
          type: "boolean",
          name: "bool",
          title: "Please answer the question",
          label: "Apakah ada kerabat anda yang sedang dalam keadaan sakit?",
          isRequired: true
        }, {
          type: "boolean",
          name: "bool",
          title: "Please answer the question",
          label: "Apakah ada di keluarga anda yang sedang terpapar covid-19 (ODP/PDP/Suspect/Positif)?",
          isRequired: true
        }, {
          type: "boolean",
          name: "bool",
          title: "Please answer the question",
          label: "Apakah ada di lingkungan yang sedang terpapar covid-19 (ODP/PDP/Suspect/Positif) ?",
          isRequired: true
        }, {
          type: "checkbox",
          name: "car",
          title: "Apakah Anda menderita penyakit di bawah ini?",
          isRequired: true,
          hasNone: true,
          colCount: 4,
          choices: [
            "Hirpetensi",
            "Diabetes",
            "Jantung",
            "Gangguan paru-paru (Asma)",
            "Ginjal",
            "Lever",
            "Tidak ada satupun diatas"
          ]
        }, {
          type: "boolean",
          name: "bool",
          title: "Please answer the question",
          label: "Apakah saat ini Anda sedang OJT/Magang/Bekerja?",
          isRequired: true
        }, {
          type: "matrix",
          name: "Quality",
          title: "Dalam 14 hari terakhir, apakah Anda pernah mengalami hal hal berikut.",
          columns: [
            {
              value: 1,
              text: "Ya"
            }, {
              value: 2,
              text: "Tidak"
            }
          ],
          rows: [
            {
              value: "affordable",
              text: "Apakah pernah keluar rumah/tempat umum (pasar, fasyankes, kerumunan orang, dan lain-lain)?"
            }, {
              value: "does what it claims",
              text: "Apakah pernah menggunakan transportasi umum?"
            }, {
              value: "better then others",
              text: "Apakah pernah melakukan perjalanan ke luar kota/internasional? (wilayah yang terjangkit/zona merah)"
            }, {
              value: "easy to use",
              text: "Apakah anda mengikuti kegiatan yang melibatkan orang banyak?"
            }, {
              value: "zzz",
              text: "Apakah memiliki riwayat kontak erat dengan orang yang dinyatakan ODP, PDP atau konfirm COVID-19 (berjabat tangan, berbicara, berada dalam satu ruangan/satu rumah)?"
            }, {
              value: "saf",
              text: "Apakah pernah mengalami demam/batuk/pilek/sakit tenggorokan/sesak dalam 14 hari terakhir?"
            }
          ]
        }
        
        
      ]
    };
    
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
      json={json}
      showCompletedPage={false}
      onComplete={this.onCompleteComponent}
      />
      ) : null
      
      var onSurveyCompleted = this.state.isCompleted? (
        <div>
        Thanks for completing da fkin survey
        </div>
        ) : null;
        
        return super.render (
          <Container>
          <Grid container spacing={10} style={{ marginTop: 20, padding: '72px 0' }}>
          <Typography className={classes.heroText} style={{ textAlign: 'center' }}>
          Form <span className={classes.heroTextPrimary}>Absen</span> 
          </Typography>
          </Grid>
          <div>
          {surveyRender}
          {onSurveyCompleted}
          </div>
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
      
      export default (withStyles(styles)(Absensi))