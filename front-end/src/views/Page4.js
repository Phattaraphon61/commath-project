
import React, { useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from "@material-ui/core";
import { getDifferentiation } from "../functions/axios";


export default function Page4() {
  const [h, seth] = useState(0.64);
  const [p, setp] = useState(2);

  const [result, setresult] = useState("");

  const generate = () => {
    const data = {
      h: h,
      p: p

    };
    getDifferentiation(data).then((res) => {
      setresult(res)
    });
  };
  return (

    <React.Fragment>
      <div class="container text-center" style={{marginTop:"80px"}}>
        <h1>บทที่ 4 Differentiation</h1>
      </div>
      <div class="container text-center" style={{marginTop:"120px"}}>
        <CardContent>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                value={h}
                label="ค่า H"
                variant="outlined"
                onChange={(e) => seth(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                value={p}
                label="ค่า P"
                variant="outlined"
                onChange={(e) => setp(e.target.value)}
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
