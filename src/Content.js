import React from "react";
import CarCard from "./CarCard";
import { Grid } from "@material-ui/core";
import carCardList from "./constants";


const Content = () => {
  const getCarCard = carCardObj => {

    return (
      <Grid item xs={12} sm={4}>
        <CarCard key={carCardObj.id}{...carCardObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {carCardList.map(carCardObj => getCarCard(carCardObj))}
    </Grid>
  );
};

export default Content;
