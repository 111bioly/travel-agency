import React from 'react';
import PropType from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({values, currentValue, required, setOptionValue}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div value={currentValue}
        className={styles.icon}
        onChange={() => setOptionValue('')}
      >
        <Icon name={'times-circle'}/>
      </div>  
    )} 
    {values.map(value => (
      <div className={currentValue === value.id ? styles.iconActive : styles.icon}
        key = {value.id}
        value = {value.id}
        onClick = {() => setOptionValue(value.id)}
      >
        <Icon name={value.icon}/>
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropType.any,
  currentValue: PropType.node,
  required: PropType.bool,
  setOptionValue: PropType.func,
};

export default OrderOptionIcons;