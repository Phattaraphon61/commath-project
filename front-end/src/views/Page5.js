import React, { useState } from "react";
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
import { getIntegration } from "../functions/axios";


export default function Page5() {

  const [result, setresult] = useState("");
  const [a, seta] = useState(0);
  const [b, setb] = useState(3);

  const generate = () => {
    const data = {
      a: a,
      b: b,
    };
    getIntegration(data).then((res) => {
      setresult(res);
    });
  };
  return (

    <React.Fragment>
      <div class="container text-center" style={{marginTop:"80px"}}>
        <h1>บทที่ 5 Integration</h1>
      </div>
      <div>


        <CardContent class="container text-center" style={{marginTop:"180px"}}>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                value={a}
                label="ค่า A"
                variant="outlined"
                onChange={(e) => seta(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                value={b}
                label="ค่า B"
                variant="outlined"
                onChange={(e) => setb(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
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
        <CardActions>
        </CardActions>
        <div class="container text-center">

          <Button variant="contained" color="primary" disableElevation onClick={generate}>
            generate
</Button>
        </div>

      </div>
    </React.Fragment>
  )
}
