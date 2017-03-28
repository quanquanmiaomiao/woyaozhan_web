/**
 * Created by Caowenjuan on 17/3/22.
 */
import React,{
  Component,
} from 'react';
import Summary from '../component/carousel/Summary';
import AboutMe from '../component/my';
import CorpsList from '../component/corps';
import MatchList from '../component/match';
import ToTop from '../component/backTop/ToTop';
class HomePageContainer extends Component {


  render() {
    return (
      <div>
        <Summary />
        <AboutMe />
        <CorpsList />
        <MatchList />
        <ToTop />
      </div>
    )
  }
}

export default HomePageContainer;