/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
} from 'react';
import Summary from '../component/carousel/Summary';
import AboutMe from '../component/my';
import styles from '../assets/style/homePage.css';
import CorpsList from '../component/corps';

class HomePageContainer extends Component {


  render() {
    return (
      <div>
        <Summary />
        <AboutMe />
        <CorpsList />
      </div>
    )
  }
}

export default HomePageContainer;