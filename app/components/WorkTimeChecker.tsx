"use client";
import React, { useState } from "react";
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";

const WorkTimeChecker: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item sx={{ padding: "20px" }}>
          <h1 className="mt-14 p-2 text-center font-sans text-gray-600 font-extrabold text-2xl ">
            TimeChecker
          </h1>
          <h2 className="p-1 text-center text-xm">法定超過時間チェッカー</h2>
        </Grid>

        <Grid item>
          <TextField
            label="社員番号:"
            variant="outlined"
            style={{ width: "200px" }}
          />
        </Grid>

        <Grid item>
          <p className="text-left text-xs text-gray-500">対象月：</p>
          <FormControl variant="outlined" style={{ width: "200px" }}>
            <Select>
              <MenuItem value={1}>1月</MenuItem>
              <MenuItem value={2}>2月</MenuItem>
              <MenuItem value={3}>3月</MenuItem>
              <MenuItem value={4}>4月</MenuItem>
              <MenuItem value={5}>5月</MenuItem>
              <MenuItem value={6}>6月</MenuItem>
              <MenuItem value={7}>7月</MenuItem>
              <MenuItem value={8}>8月</MenuItem>
              <MenuItem value={9}>9月</MenuItem>
              <MenuItem value={10}>10月</MenuItem>
              <MenuItem value={11}>11月</MenuItem>
              <MenuItem value={6}>6月</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <TextField
            label="合計勤務時間:"
            variant="outlined"
            style={{ width: "200px" }}
          />
        </Grid>

        <Grid item>
          <TextField
            label="法定休日時間:"
            variant="outlined"
            style={{ width: "200px" }}
          />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "200px" }}
          >
            登録
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WorkTimeChecker;
