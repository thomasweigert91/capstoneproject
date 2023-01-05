import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import React from "react";
import {Details} from "../../components/Exercises/Details";
import {exerciseOptions, fetchData} from "../../components/Utils/fetchData";
import {ExerciseDetailsHeader} from "../../components/Exercises/ExerciseDetailsHeader";

const Exercise = () => {
  const router = useRouter();
  const {id} = router.query;

  const [exerciseDetail, setExerciseDetail] = useState({});

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercisesData();
  }, [id]);

  return (
    <>
      <ExerciseDetailsHeader />
      <Details exerciseDetail={exerciseDetail} />
    </>
  );
};

export default Exercise;
