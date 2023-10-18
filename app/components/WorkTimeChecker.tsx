"use client";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Container,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";

const WorkTimeChecker: React.FC = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [month, setMonth] = useState("");
  const [workTime, setWorkTime] = useState("");
  const [holidayTime, setHolidayTime] = useState("");
  const [open, setOpen] = useState(false);

  // ダイアログを開く
  const handleClickOpen = () => {
    setOpen(true);
  };

  // ダイアログを閉じる
  const handleClose = () => {
    setOpen(false);
  };

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
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </Grid>

        <Grid item>
          <p className="text-left text-xs text-gray-500">対象月：</p>
          <FormControl variant="outlined" style={{ width: "200px" }}>
            <Select value={month} onChange={(e) => setMonth(e.target.value)}>
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
              <MenuItem value={12}>12月</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <TextField
            label="合計勤務時間:"
            variant="outlined"
            style={{ width: "200px" }}
            onChange={(e) => setWorkTime(e.target.value)}
          />
        </Grid>

        <Grid item>
          <TextField
            label="法定休日時間:"
            variant="outlined"
            style={{ width: "200px" }}
            onChange={(e) => setHolidayTime(e.target.value)}
          />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px", width: "200px" }}
            onClick={handleClickOpen}
          >
            登録
          </Button>
        </Grid>
      </Grid>
      {/* ダイアログの定義 */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"登録情報"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`社員番号：${employeeId}`}
            <br />
            {`対象月：${month}月`}
            <br />
            {`合計勤務時間：${workTime}`}
            <br />
            {`法定休日時間：${holidayTime}`}
            <br />
            <br />
            {"上記の内容で登録しました。"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default WorkTimeChecker;
