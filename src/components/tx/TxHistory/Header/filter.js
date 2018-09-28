import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginRight: '15px',
  },
  radioButtonGroup: {
    display: 'inline-flex',
  },
  color: {
    color: 'rgb(177, 191, 183)'
  }
};

class Filter extends React.Component {
  filterChanged = (ev) => {
    return this.props.onChange(ev.target.value);
  }

  render() {
    return (
      <RadioButtonGroup style={styles.radioButtonGroup} name="options" defaultSelected="ALL" onChange={this.filterChanged} selectedValue={this.props.value}>
        <RadioButton value="ALL" label="ALL" style={styles.radioButton}
          labelStyle={styles.color}
        />
        <RadioButton value="IN" label="IN" style={styles.radioButton}
          labelStyle={styles.color}
        />
        <RadioButton value="OUT" label="OUT" style={styles.radioButton}
          labelStyle={styles.color}
        />
      </RadioButtonGroup>
    );
  }
}

export default muiThemeable()(Filter);
