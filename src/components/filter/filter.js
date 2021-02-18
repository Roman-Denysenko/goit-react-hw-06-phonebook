import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

import s from './Filter.module.css';

const Filter =({value,onFilter })=> {
   
    return (
      <>
        <label className={s.lable}>
          Find contact by name
          <input
            className={s.input}
            type="text"
            name="filter"
            value={value}
            onChange={onFilter}
          ></input>
        </label>
      </>
    );
  }


const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
   onFilter: e=> dispatch(actions.filter(e.target.value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter) ;
