import React from "react";
import PharmacyProductCard from "./PharmacyProductCard";
import { Grid } from "@material-ui/core";
import PharmacyConstants from "./PharmacyConstants";

const PharmacyContent = () => {
  const petMakerCard = (petMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <PharmacyProductCard {...petMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={3}>
      {PharmacyConstants.map((petMakerObj) => petMakerCard(petMakerObj))}
    </Grid>
  );
};

export default PharmacyContent;
