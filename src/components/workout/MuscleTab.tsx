import { Box, Tab, Tabs } from "@mui/material";
import { Muscle } from "../../models/Muscle";

interface Props {
    muscleValue: number,
    handleChangeMuscleValue: (event: React.SyntheticEvent, newTarget: number)=>void
}

export default function MuscleTab({muscleValue, handleChangeMuscleValue}: Props) {

  const muscles: Muscle[] = [
    new Muscle(0, "전체"),
    new Muscle(1, "가슴"),
    new Muscle(2, "등"),
    new Muscle(3, "하체"),
    new Muscle(4, "팔"),
    new Muscle(5, "복근"),
  ];

  const muscleList = muscles.map((muscle) => (
    <Tab label={muscle.getName()}></Tab>
  ));

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider"
        }}
      >
        <Tabs value={muscleValue} onChange={handleChangeMuscleValue}>
          {muscleList}
        </Tabs>
      </Box>
    </>
  );
}
