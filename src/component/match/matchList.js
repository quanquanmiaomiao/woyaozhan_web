/**
 * Created by Caowenjuan on 16/12/28.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import { Grid } from '../../../node_modules/antd-mobile/lib/index.web';
import MatchItem from './matchItem';

const data = Array.from(new Array(7)).map((_val, i) => ({
  imgOne: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
  imgTwo: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
  nameOne: `地表最强${i}`,
  nameTwo: `地表最强${i}`,
  date: '2017-09-08 12:50',
  text: `名字${i}`,
}));

class MatchList extends Component{


  render(){
    return(
        <Grid
          isCarousel
          carouselMaxRow={2}
          data={data} columnNum={2} hasLine={false}
              renderItem={(dataItem, index) => (
         <MatchItem data={dataItem}/>
        )}
        />
    );
  }
}

export default MatchList;