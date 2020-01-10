import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from 'react-router-dom';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function VerticalTabs(props) {
  const { categories } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const categoryClickHandler = id => {
    if (id === 0) {
      props.history.push(`/`);
    } else {
      props.history.push(`/categories/${id}`);
    }
  };

  const renderCategories = categories => {
    return categories.map(category => {
      const { name, id } = category;
      return (
        <Tab
          label={name}
          {...a11yProps(id)}
          key={id}
          onClick={() => categoryClickHandler(id)}
        />
      );
    });
  };

  return (
    <div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {renderCategories(categories)}
      </Tabs>
    </div>
  );
}

export default withRouter(VerticalTabs);
