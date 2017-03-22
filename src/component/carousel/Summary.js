/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
} from 'react';
import {Carousel} from 'antd';
import styles from './summary.css';

class Summary extends Component {
  render(){
    return(
      <Carousel
        autoplay={true}
        className={styles.ant_carousel}
      >
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    );
  }
}

export default Summary;