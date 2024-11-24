import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Search from "../Search";
import MuscleTab from "./MuscleTab";
import WorkoutList from "./WorkoutList";

export default function WorkoutAddButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [muscleValue, setMuscleValue] = useState(0);

  const handleChangeMuscleValue = (
    _event: React.SyntheticEvent,
    newTarget: number
  ) => {
    setMuscleValue(newTarget);
  };

  const [searchValue, setSearch] = useState("");

  const handleChangeSearch = (
    _event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(_event.target.value);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        NEW
      </Button>
      <Dialog open={open} onClose={handleClose} scroll="paper">
        <DialogTitle>
          <Typography variant="h6">운동 목록</Typography>

          <Search
            searchValue={searchValue}
            handleChangeSearch={handleChangeSearch}
          />

          <MuscleTab
            muscleValue={muscleValue}
            handleChangeMuscleValue={handleChangeMuscleValue}
          />
        </DialogTitle>

        <DialogContent>
          <WorkoutList muscleValue={muscleValue} searchValue={searchValue} />
        </DialogContent>

        <DialogActions>
          <Button size='large'>확인</Button>

          <Button onClick={handleClose} color='inherit' size='large'>
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
