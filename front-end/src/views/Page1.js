import React, { useState,useEffect } from "react";

import {
  Card,
  Button,
  CardContent,
  Grid,
  TextField,
} from "@material-ui/core";
import { getB2s } from "../functions/axios";


export default function Page1() {
  const [bit2string, setBit2string] = useState(111111111111111);
  const [result, setResult] = useState("");
  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };

  useEffect(() => {
    getB2s(bit2string).then((res) => {
      
    });
  },[] )
  return (
    <React.Fragment>
      <div class="container text-center" style={{ marginTop: "80px" }}>
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
      </div>
    </React.Fragment>
  )
}
