import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PharmacyProductList from "./PharmacyProductList";
import { Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 800
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: "50px"
  },
  alignSet: {
    paddingLeft: "100px"
  }
}));

export default function SideBarForPharmacy() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <Grid item container>
        <Grid item xs={false} sm={2}>
        <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Allergy & Antihistamines" {...a11yProps(0)} />
        <br/>
        <Tab label="Antibiotics" {...a11yProps(1)} />
        <br/>
        <Tab label="Anti-Cancer & Tumor" {...a11yProps(2)} />
        <br/>
        <Tab label="Anti-Fungal" {...a11yProps(3)} />
        <br/>
        <Tab label="Anxiety & Behavior" {...a11yProps(4)} />
        <br/>
        <Tab label="Arthritis Pain & Inflammation" {...a11yProps(5)} />
        <br/>
        <Tab label="Asthma & Respiratory" {...a11yProps(6)} />
        <br/>
        <Tab label="Colic & Musculoskeletal" {...a11yProps(7)} />
        <br/>
        <Tab label="Cushing's Disease" {...a11yProps(8)} />
        <br/>
        <Tab label="Diabetes & Insulin" {...a11yProps(9)} />
        <br/>
        <Tab label="Digestive Tract, Liver & Pancr" {...a11yProps(10)} />
        <br/>
        <Tab label="Ear Medications" {...a11yProps(11)} />
        <br/>
        <Tab label="Epilepsy & Seizure" {...a11yProps(12)} />
      </Tabs>

        </Grid>
        <Grid item xs={12} sm={8}>
          <TabPanel value={value} index={0} className={classes.alignSet}>
            <PharmacyProductList />
          </TabPanel>
          <TabPanel value={value} index={1}>
          </TabPanel>
          <TabPanel value={value} index={2}>
          </TabPanel>
          <TabPanel value={value} index={3}>
          </TabPanel>
          <TabPanel value={value} index={4}>
          </TabPanel>
          <TabPanel value={value} index={5}>
          </TabPanel>
          <TabPanel value={value} index={6}>
          </TabPanel>
          <TabPanel value={value} index={7}>
          </TabPanel>
          <TabPanel value={value} index={8}>
          </TabPanel>
          <TabPanel value={value} index={9}>
          </TabPanel>
          <TabPanel value={value} index={10}>
          </TabPanel>
          <TabPanel value={value} index={11}>
          </TabPanel>
          <TabPanel value={value} index={12}>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
