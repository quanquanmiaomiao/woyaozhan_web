/**
 * Created by Caowenjuan on 17/3/15.
 */
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import {Icon} from 'antd';
import React,{
  Component,
  PropTypes,
} from 'react';
import styles from './match.css';

const textData = {
  content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
  ' the motorcycle referred to in the mainland, Hong Kong and Southeast' +
  ' Asia known as motorcycles.',
  title: 'Motorcycle',
};
let dataArray = [
  {image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/UcVbOrSDHCLPqLG.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/beHtidyjUMOXbkI.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png'},
];
dataArray = dataArray.map(item => {
  const image = item.image
  const content = textData.content
  const title = textData.title
  return {image, content, title}
});


class MatchTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: {}
    };
    this.onItemClick = this.onItemClick.bind(this);
    this.onClose = this.onClose.bind(this);
    this.getDelay = this.getDelay.bind(this);
    this.getLiChildren = this.getLiChildren.bind(this);
    this.onTweenEnd = this.onTweenEnd.bind(this);
  }

  onItemClick(e, i) {
    const open = this.state.open;
    Object.keys(open).forEach((key) => {
      if (key !== i && open[key]) {
        open[key] = false;
      }
    });
    open[i] = true;
    this.setState({
      open,
    });
  }

  onClose(e, i) {
    const open = this.state.open;
    open[i] = false;
    this.setState({
      open,
    });
  }

  onTweenEnd(i) {
    const open = this.state.open;
    delete open[i];
    this.setState({
      open,
    });
  };

  getDelay(e) {
    const i = e.index + dataArray.length % 4;
    return (i % 4) * 100 + Math.floor(1 / 4) * 100 + 200;
  }

  getLiChildren() {
    const imgWidth = 110;
    const imgHeight = 76;
    const imgBoxWidth = 130;
    const imgBoxHeight = 96;

    return dataArray.map((item, i) => {
      const { image, title, content } = item;
      const isEnter = typeof this.state.open[i] === 'boolean';
      const isOpen = this.state.open[i];
      const left = isEnter ? 0 : imgBoxWidth * (i % 4);
      const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
      const isRight = Math.floor((i % 4) / 2);
      const isTop = Math.floor(i / 4);
      let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
      top = isEnter ? top : imgBoxHeight * isTop;
      let imgTop = isTop ? imgBoxHeight : 0;
      imgTop = isEnter ? imgTop : 0;
      const liStyle = isEnter ? {width: '100%', height: 175, zIndex: 1, left: left, top: top} :
      {left: left, top: top};
      const liAnimation = isOpen ?
        ({boxShadow: '0 2px 8px rgba(140, 140, 140, .35)'}) :
        ({boxShadow: '0 0px 0px rgba(140, 140, 140, 0)'});
      let aAnimation = isEnter ?
        ({
          delay: 400,
          ease: 'easeInOutCubic',
          width: imgWidth,
          height: imgHeight,
          onComplete: this.onTweenEnd.bind(this, i),
          left: imgBoxWidth * (i % 4),
          top: isTop ? imgBoxHeight : 0,
        }) : null;
      aAnimation = isOpen ?
        ({
          ease: 'easeInOutCubic',
          left: isRight ? (imgBoxWidth * 2) - 10 : 0,
          width: '50%',
          height: 176,
          top: 0,
        }) : aAnimation;

      return (
        <TweenOne
          key={i}
          style={liStyle}
          component="li"
          className={isOpen?'open':''}
          animation={liAnimation}
        >
          <TweenOne
            component="a"
            onClick={e => this.onItemClick(e, i)}
            style={{
            left: imgLeft,
            top: imgTop,
          }}
            animation={aAnimation}
          >
            <img src={image} width="100%" height="100%" />
          </TweenOne>
          <TweenOneGroup
            enter={[
            { opacity: 0, duration: 0, type: 'from', delay: 400 },
            { ease: 'easeOutCubic', type: 'from', left: isRight ? '50%' : '0%' },
          ]}
            leave={{ ease: 'easeInOutCubic', left: isRight ? '50%' : '0%' }}
            component=""
          >
            {isOpen && <div
              className={styles.pic_details_demo_text_wrapper}
              key="text"
              style={{
              left: isRight ? '-8%' : '50%',
            }}
            >
              <h1>{title}</h1>
              <Icon type="cross" onClick={e => this.onClose(e, i)} />
              <em />
              <p>{content}</p>
            </div>}
          </TweenOneGroup>
        </TweenOne>
      )
    })
  }

  render() {
    return (
      <div>
        <div className={styles.pic_details_demo_wrapper} >
          <QueueAnim type="bottom" className={styles.pic_details_demo_title} >
            <h1 key="h1" >比赛队列</h1>
          </QueueAnim>
          <div className={styles.pic_details_demo} >

            <QueueAnim
              delay={this.getDelay}
              component="ul"
              interval={0}
              className={styles.pic_details_demo_image_wrapper}
              type="bottom"
            >
              {this.getLiChildren()}
            </QueueAnim>
          </div>
        </div>
      </div>
    )
  }
}

export default MatchTest;