import React from "react";
import { Grid } from "@material-ui/core";
import PharmacyContent from "./PharmacyContent";

const PharmacyProductList = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={11}>
          <PharmacyContent />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PharmacyProductList;
