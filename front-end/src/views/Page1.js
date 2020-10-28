import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getB2s } from "../functions/axios";

const useStyles = makeStyles((theme) => ({

  colorButton: {
    backgroundColor: ' #f9c5d1 ',
    backgroundImage: 'linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)',
    // color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: 'Mali, cursive',

  },
  colorButton2: {
    backgroundColor: ' #f9c5d1 ',
    backgroundImage: 'linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: theme.spacing(5),
  },

  state: {
    backgroundColor: ' #7f53ac ',
    backgroundImage: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
  },


  card: {
    marginLeft: theme.spacing(25),
    marginRight: theme.spacing(25),
    marginTop: theme.spacing(20),
    backgroundImage: 'linear-gradient(to right, #ffffff 0%, #e7dfe2 100%)',

  },
}));
export default function Page1() {
  const classes = useStyles();
  const [bit2string, setBit2string] = useState(111111111111111);
  const [result, setResult] = useState("");
  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };
  return (
    <React.Fragment>
      <div class="container text-center" style={{marginTop:"80px"}}> 
        <h1>บทที่ 1 Basic Computing</h1>
      </div>
      <div>

        <Card style={{ marginTop: "250px", width: "1200px" }} class="container text-center">
          <CardContent>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  id="outlined-basic"
                  value={bit2string}
                  label="กรอกเลขฐานสอง"
                  variant="outlined"
                  onChange={(e) => setBit2string(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="ผลลัพธ์"
                  value={result === "" ? "" : result}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <div class="container text-center">

          <Button variant="contained" color="primary" disableElevation onClick={generate}>
            generate
                  </Button>
        </div>
        {/* <Grid item xs={12}>
                  <Button
                    onClick={back}
                    fullWidth
                    variant="contained"
                    className={classes.colorButton2}
                  >
                    กลับ
                </Button>
                </Grid> */}





      </div>
    </React.Fragment>
  )
}
