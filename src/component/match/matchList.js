/**
 * Created by Caowenjuan on 16/12/28.
 */
import React,{
  Component,
  PropTypes,
} from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { Pagination,Icon,Card } from 'antd';
import styles from './match.css';

// 假数据
const textData = {
  content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
  ' the motorcycle referred to in the mainland, Hong Kong and Southeast' +
  ' Asia known as motorcycles.',
  title: 'Motorcycle',
};
let dataArray = Array.from(new Array(8)).map((_val, i) => ({
  img_one: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
  img_two: 'https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png',
  name_one: `地表最强${i}`,
  name_two: `地表最强${i}`,
  date: '12:50',
}));

dataArray = dataArray.map(item => {
  const img_one = item.img_one;
  const img_two = item.img_two;
  const name_one = item.name_one;
  const name_two = item.name_two;
  const date = item.date;
  const content = textData.content;
  const title = textData.title;
  return {img_one, img_two, name_one, name_two, date, content, title}
});

class MatchList extends Component {
  constructor(props) {
    super(props);
    this.pageSize = 1;
    this.state = {
      open: {},
      curPage: 1,
    };
    this.renderChildren = this.renderChildren.bind(this);
    this.renderCard = this.renderCard.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onTweenEnd = this.onTweenEnd.bind(this);
    this.getDelay = this.getDelay.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  onItemClick(i) {
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

  onClose(i) {
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
  }

  getDelay(e) {
    //延迟播放
    const i = e.index + dataArray.length % 3;
    return (i % 3) * 200 + Math.floor(1 / 3) * 100 + 200;
  }

  onPageChange(page, pageSize) {
    this.setState({
      curPage: page,
    })
  }

  renderCard(img_one, img_two, name_one, name_two, date) {
    return (
      <div>
        <p>{date}</p>
      </div>

    );
  }

  renderChildren() {
    const imgWidth = 250;
    const imgHeight = 150;
    const imgBoxWidth = 270;
    const imgBoxHeight = 160;
    return dataArray.map((item, i) => {
      const { img_one, img_two,name_one,name_two,date,title, content } = item;
      const isEnter = typeof this.state.open[i] === 'boolean';
      const isOpen = this.state.open[i];
      const left = isEnter ? 0 : imgBoxWidth * (i % 3); // 决定列数
      const imgLeft = isEnter ? imgBoxWidth * (i % 3) : 0;
      const isRight = Math.floor((i % 3) / 2);
      const isTop = Math.floor(i / 3);
      let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
      top = isEnter ? top : imgBoxHeight * isTop;
      let imgTop = isTop ? imgBoxHeight : 0;
      imgTop = isEnter ? imgTop : 0;
      const liStyle = isEnter ? {width: "80%", height: 160, zIndex: 1, left: left, top: top} :
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
          left: imgBoxWidth * (i % 3),
          top: isTop ? imgBoxHeight : 0,
        }) : null;
      aAnimation = isOpen ?
        ({
          ease: 'easeInOutCubic',
          left: isRight ? (imgBoxWidth * 2) - 10 : 0,
          width: '40%',
          height: 160,
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
            onClick={e => this.onItemClick(i)}
            style={{
            left: imgLeft,
            top: imgTop,
          }}
            animation={aAnimation}
          >
            {this.renderCard(img_one, img_two, name_one, name_two, date)}
          </TweenOne>
          <TweenOneGroup
            enter={[
            { opacity: 0, duration: 0, type: 'from', delay: 400 },
            { ease: 'easeOutCubic', type: 'from', left: isRight ? '50%' : '0%' },
          ]}
            leave={{ ease: 'easeInOutCubic', left: isRight ? '50%' : '0%' }}
          >
            {isOpen && <p
              className={styles.pic_details_demo_text_wrapper}
              key="text"
              style={{
              left: isRight ? '8%' : '50%',
            }}
            >
              <h1>{title}</h1>
              <Icon type="cross" onClick={e => this.onClose(i)} />
              <em />
              <p>{content}</p>
            </p>}
          </TweenOneGroup>
        </TweenOne>
      )
    })
  }


  render() {
    return (
      <div>
        <div className={styles.pic_details_demo_wrapper} >
          <div className={styles.pic_details_demo} >
            <QueueAnim
              delay={this.getDelay}
              component="ul"
              interval={0} //动画时间间隔
              className={styles.pic_details_demo_image_wrapper}
              type="bottom" // 动画加载方式
            >
              {this.renderChildren()}
            </QueueAnim>
          </div>
        </div>
        <Pagination
          defaultCurrent={1}
          total={dataArray.length}
          defaultPageSize={this.pageSize} />
      </div>
    );
  }
}

export default MatchList;