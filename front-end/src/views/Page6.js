
import React, { useState } from 'react'
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
import { getRootFinding } from "../functions/axios";

export default function Page5() {
  const [a, seta] = useState(0);
  const [b, setb] = useState(1);
  const [dx, setdx] = useState(0.001);
  const [result, setresult] = useState("");

  const generate = () => {
    const data = {
      a: a,
      b: b,
      dx: dx
    };
    getRootFinding(data).then((res) => {
      setresult(res);
    });
  };
  return (
    <React.Fragment>
      <div class="container text-center" style={{ marginTop: "80px" }}>
        <h1>บทที่ 6 Root-finding</h1>
      </div>
      <div>
        <CardContent class="container text-center" style={{ marginTop: "150px" }}>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                value={a}
                label="ค่า A"
                variant="outlined"
                onChange={(e) => seta(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                value={b}
                label="ค่า B"
                variant="outlined"
                onChange={(e) => setb(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                value={dx}
                label="ค่าใกล้เคียง"
                variant="outlined"
                onChange={(e) => setdx(e.target.value)}
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
                style={{width:"365px"}}
              />
            </Grid>
          </Grid>
        </CardContent>
        <div class="container text-center" style={{marginTop:"50px"}}>

          <Button variant="contained" color="primary" disableElevation onClick={generate}>
            generate
</Button>
        </div>
      </div>
    </React.Fragment>

  )
}
