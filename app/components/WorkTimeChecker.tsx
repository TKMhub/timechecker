import React from 'react';
import { Container, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

// WorkTimeChecker コンポーネントの定義
const WorkTimeChecker: React.FC = () => {
  return (
    <Container>
      {/* タイトル */}
      <h1>法定超過時間チェッカー</h1>
      
      {/* 社員番号 */}
      <div>
        <label>■社員番号:</label>
        <TextField variant="outlined" />
      </div>

      {/* 対象月 */}
      <div>
        <FormControl variant="outlined">
          <InputLabel>■対象月：</InputLabel>
          <Select>
            <MenuItem value={1}>1月</MenuItem>
            <MenuItem value={2}>2月</MenuItem>
            {/* 他の月も追加できます */}
          </Select>
        </FormControl>
      </div>

      {/* 勤務時間入力 */}
      <h2>■勤務時間入力：</h2>

      <div>
        {/* 合計勤務時間 */}
        <div>
          <label>合計勤務時間:</label>
          <TextField variant="outlined" />
        </div>

        {/* 法定休日時間 */}
        <div>
          <label>法定休日時間（日曜勤務）:</label>
          <TextField variant="outlined" />
        </div>
      </div>

      {/* チェックボタン */}
      <Button variant="contained" color="primary">
        チェック
      </Button>
    </Container>
  );
};

export default WorkTimeChecker;
