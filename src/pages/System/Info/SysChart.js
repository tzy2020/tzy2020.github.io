import React, { Component } from 'react';
import TimelineChart from '@/components/Charts/TimelineChart';
import moment from 'moment';

class SysChart extends Component {
  getSysMemData = () => {
    const { data } = this.props;
    if (!data || data.length === 0) return [{}];

    const dataSource = data.map(item => {
      return {
        x: moment(item.inputTime).valueOf(),
        y1: Number(item.totalmem),
        y2: Number(item.freemem),
      };
    });

    return dataSource;
  };

  getSysLoadData = () => {
    const { data } = this.props;
    if (!data || data.length === 0) return [{}];

    const dataSource = data.map(item => {
      return {
        x: moment(item.inputTime).valueOf(),
        y1: Number(Number(item.loadavg_1m).toFixed(3)),
        y2: Number(Number(item.loadavg_5m).toFixed(3)),
        y3: Number(Number(item.loadavg_15m).toFixed(3)),
      };
    });

    return dataSource;
  };

  render() {
    return (
      <div>
        <TimelineChart
          title="系统内存信息"
          height={400}
          data={this.getSysMemData()}
          titleMap={{
            y1: '总内存',
            y2: '剩余内存',
          }}
        />

        <TimelineChart
          title="系统负载信息"
          height={400}
          data={this.getSysLoadData()}
          titleMap={{
            y1: '最近1分钟平均负载',
            y2: '最近5分钟平均负载',
            y3: '最近15分钟平均负载',
          }}
        />
      </div>
    );
  }
}

export default SysChart;
