import { Box, TextField } from "@mui/material";
import React from "react";

interface Props {
  searchValue: string;
  handleChangeSearch: (
    _event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Search({ searchValue, handleChangeSearch }: Props) {
  return (
    <>
      <Box>
        <TextField
          size="small"
          hiddenLabel
          fullWidth
          placeholder="찾고 싶은 운동을 검색하세요."
          value={searchValue}
          onChange={(e) => handleChangeSearch(e)}
        ></TextField>
      </Box>
    </>
  );
}
