import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Search from "../Search";
import MuscleTab from "./MuscleTab";
import WorkoutList from "./WorkoutList";

export default function WorkoutAddButton() {
  const [open, setOpen] = useState(false);
  const [muscleValue, setMuscleValue] = useState(0);
  const [searchValue, setSearch] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMuscleValue(0);
    setSearch("");
  };

  const handleChangeMuscleValue = (
    _event: React.SyntheticEvent,
    newTarget: number
  ) => {
    setMuscleValue(newTarget);
  };

  const handleChangeSearch = (
    _event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(_event.target.value);
  };

  const workoutView = useRef<HTMLUListElement>(null);
  useEffect(() => {
    workoutView.current?.scrollTo({ top: 0 });
  }, [muscleValue]);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        NEW
      </Button>
      <Dialog open={open} onClose={handleClose} scroll="paper">
        <DialogTitle>
          <Typography fontSize="30px">운동 목록</Typography>

          <Search
            searchValue={searchValue}
            handleChangeSearch={handleChangeSearch}
          />

          <MuscleTab
            muscleValue={muscleValue}
            handleChangeMuscleValue={handleChangeMuscleValue}
          />
        </DialogTitle>

        <DialogContent ref={workoutView}>
          <WorkoutList muscleValue={muscleValue} searchValue={searchValue} />
        </DialogContent>

        <DialogActions>
          <Button size="large">확인</Button>

          <Button onClick={handleClose} color="inherit" size="large">
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
