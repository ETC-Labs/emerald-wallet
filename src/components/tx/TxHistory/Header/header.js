// @flow
import React from 'react';
import { Search as SearchIcon } from 'emerald-js-ui/lib/icons3';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from '../../../../elements/Form/TextField';
import Filter from './filter';

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '20px',
  },

  headerTitle: {
    textTransform: 'uppercase',
    color: 'rgb(177, 191, 183)',
  },

  filter: {
  },

  headerMain: {
    display: 'flex',
    alignItems: 'center',
  },

  search: {
    maxHeight: '40px',
  },

  searchIcon: {
    width: '14px',
    height: '14px',
  },
};

const Header = ({onTxFilterChange, onSearchChange, muiTheme}) => {
  return (
    <div style={ styles.headerContainer }>
      <div style={ styles.headerTitle }>History</div>

      <div style={ styles.filter }>
        <Filter onChange={onTxFilterChange} />
      </div>

      <div style={ styles.search }>
        <TextField
          rightIcon={ <SearchIcon style={ styles.searchIcon } /> }
          onChange={onSearchChange}
          style={{ maxHeight: '40px' }}
          hintText="Search for amount or hash"
          hintStyle={{color: muiTheme.palette.primary3Color, fontWeight: '200', fontSize: '15px'}}
          underlineShow={ false }
        />
      </div>
    </div>
  );
};

export default muiThemeable()(Header);
