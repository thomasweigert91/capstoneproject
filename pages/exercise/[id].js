import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import React from "react";
import {Details} from "../../components/Exercises/Details";
import {SimilarExercises} from "../../components/Exercises/SimilarExercises";
import {exerciseOptions, fetchData} from "../../components/Utils/fetchData";
import {ExerciseDetailsHeader} from "../../components/Exercises/ExerciseDetailsHeader";

const Exercise = () => {
  const router = useRouter();
  const {id} = router.query;

  const [exerciseDetail, setExerciseDetail] = useState({});

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <>
      <ExerciseDetailsHeader />
      <Details exerciseDetail={exerciseDetail} />
      <SimilarExercises />
    </>
  );
};

export default Exercise;
