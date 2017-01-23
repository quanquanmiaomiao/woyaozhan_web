/**
 * Created by Caowenjuan on 16/12/29.
 */
/**
 * Created by Caowenjuan on 16/12/28.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import { Grid } from '../../../node_modules/antd-mobile/lib/index.web';
import CorpsItem from './corpsItem';

const data = Array.from(new Array(7)).map((_val, i) => ({
  img: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png',
  name: `地表最强${i}`,
  win: '80%',
  rank:`${i}`,
  captain:'我放的一个防御塔'
}));

class CorpsList extends Component{


  render(){
    return(
      <Grid
        isCarousel
        carouselMaxRow={1}
        data={data} columnNum={3} hasLine={false}
        renderItem={(dataItem, index) => (
         <CorpsItem data={dataItem}/>
        )}
      />
    );
  }
}

export default CorpsList;