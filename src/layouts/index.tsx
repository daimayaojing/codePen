import React from 'react';
import styles from './index.css';
import * as BizCharts from "bizcharts";

const FONT_FAMILY = '"DINalternate-bold", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", Helvetica, Arial, "PingFang SC","-apple-system", "Hiragino Sans GB", "Source Han Sans CN", Noto Sans CJK SC, Microsoft YaHei, Microsoft Jhenghei, SimHei, STXihei, YouYuan, sans-serif';
// G2.Global.fontFamily = FONT_FAMILY 
const Theme = {
    fontFamily: FONT_FAMILY,
    tooltip:{
        ['g2-tooltip']:{
            fontFamily: FONT_FAMILY,
        }
    },
}
BizCharts.setTheme(Theme);


const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>codeOpen</h1>
      {props.children}
    </div>
  );
};

export default BasicLayout;
