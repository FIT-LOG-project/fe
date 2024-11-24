import { Button, Stack, Typography } from "@mui/material";
import WorkoutAddButton from "../components/workout/WorkoutAddButton";

export default function Home() {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">기록지</Typography>
        <Stack direction="row" spacing={1}>
          <WorkoutAddButton></WorkoutAddButton>
          <Button variant="outlined">LOAD</Button>
        </Stack>
      </Stack>
    </>
  );
}