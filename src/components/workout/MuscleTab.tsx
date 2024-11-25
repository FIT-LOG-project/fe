import { Box, Tab, Tabs } from "@mui/material";
import { Muscle } from "../../models/Muscle";
import { useEffect, useState } from "react";
import instance from "../../api/axiosInstance";

interface Props {
  muscleValue: number;
  handleChangeMuscleValue: (
    event: React.SyntheticEvent,
    newTarget: number
  ) => void;
}

export default function MuscleTab({
  muscleValue,
  handleChangeMuscleValue,
}: Props) {
  const [muscles, setMuscles] = useState<Muscle[]>([]);

  const getMuscles = async () => {
    instance
      .get("muscle")
      .then(function (response) {
        response.data.data.splice(0, 0, {
          id: 0,
          name: "전체",
        });
        setMuscles(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getMuscles();
  }, []);

  const muscleList = muscles.map((muscle) => (
    <Tab label={muscle.name} key={muscle.id}></Tab>
  ));

  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs value={muscleValue} onChange={handleChangeMuscleValue}>
          {muscleList}
        </Tabs>
      </Box>
    </>
  );
}
