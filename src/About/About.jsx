/**
 * @Author: kim
 * @Date: 2019-12-08 14:43:08
 * @LastEditors: kim
 * @LastEditTime: Do not edit
 * @Description: 描述
 */
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../utils/utils';

class About extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
    } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
            <div className="title-line-wrapper page1-line">
              <div className="title-line" />
            </div>
          </div>
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={childWrapper}
            >
              {childWrapper.children.map((block, i) => {
                const { children: item } = block;
                return (
                  <div key={i.toString()} {...item}>
                    {item.children.map(getChildrenToRender)}
                  </div>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default About;
