import React, { Component } from 'react';
import { connect } from 'dva';
import { Descriptions, Spin, Divider, Icon, Tooltip } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { bytesToSize } from '@/utils/utils';
import SysChart from './SysChart';
import DetailDrawer from './DetailDrawer';

@connect(({ system, loading }) => ({
  systemInfo: system.systemInfo,
  drawerData: system.drawerData,
  loading: loading.effects['system/fetchSystemInfo'],
}))
class SystemInfo extends Component {

  fetchSystemInfo = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'system/fetchSystemInfo',
    })
  };

  formateTime = uptime => {
    const day = 3600 * 24;
    const hour = 3600;
    const minute = 60;

    const days = Math.floor(uptime / day);
    const leave1 = uptime % day;

    const hours = Math.floor(leave1 / hour);
    const leave2 = leave1 % hour;

    const minutes = Math.floor(leave2 / minute);

    const seconds = leave2 % minute;

    return `${days ? `${days}天` : ''}${hours ? `${hours}小时` : ''}${minutes ? `${minutes}分` : ''}${seconds ? `${seconds}秒` : ''}`

  };

  toogolDrawerVisible = ({ visible, title, data }) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'system/saveState',
      payload: {
        drawerData: {
          visible,
          title,
          data,
        },
      }
    })
  };

  render() {
    const {
      loading,
      systemInfo: {
        mainInfo: {
          platform,
          arch,
          totalmem,
          freemem,
          cpus,
          networkInterfaces,
          loadavg,
          release,
          uptime,
        },
        chartData,
      },
      drawerData: {
        visible, data, title
      },
    } = this.props;

    return (
      <PageHeaderWrapper>
        <Spin spinning={Boolean(loading)}>
          <Descriptions
            title={
              <div>
                <span style={{ marginRight: 10 }}>服务器信息</span>
                <Tooltip placement="right" title={'点击刷新'}>
                  <a>
                    <Icon
                      type="sync"
                      spin={Boolean(loading)}
                      onClick={this.fetchSystemInfo}
                    />
                  </a>
                </Tooltip>
              </div>
            }
          >
            <Descriptions.Item label="平台">{platform}</Descriptions.Item>
            <Descriptions.Item label="架构">{arch}</Descriptions.Item>
            <Descriptions.Item label="版本">{release}</Descriptions.Item>
            <Descriptions.Item label="最近15m平均负载">{loadavg && loadavg[2].toFixed(3)}</Descriptions.Item>
            <Descriptions.Item label="最近5m平均负载">{loadavg && loadavg[1].toFixed(3)}</Descriptions.Item>
            <Descriptions.Item label="最近1m平均负载">{loadavg && loadavg[0].toFixed(3)}</Descriptions.Item>
            <Descriptions.Item label="内存总量">{bytesToSize(totalmem)}</Descriptions.Item>
            <Descriptions.Item label="剩余内存">{bytesToSize(freemem)}</Descriptions.Item>
            <Descriptions.Item label="CPU核心数">
              <a onClick={() => this.toogolDrawerVisible({ visible: true, title: 'CPU信息', data: cpus })}>
                {cpus && cpus.length}
              </a>
            </Descriptions.Item>
            <Descriptions.Item label="网卡数量">
              <a onClick={() => this.toogolDrawerVisible({ visible: true, title: '网卡信息', data: networkInterfaces })}>
                {networkInterfaces && Object.keys(networkInterfaces).length}
              </a>
            </Descriptions.Item>
            <Descriptions.Item label="系统已运行时间">{this.formateTime(uptime)}</Descriptions.Item>
          </Descriptions>
          <Divider/>
          <SysChart data={chartData}/>
          <DetailDrawer visible={visible} title={title} data={data} toogolDrawerVisible={this.toogolDrawerVisible}/>
        </Spin>
      </PageHeaderWrapper>
    );
  }
}

export default SystemInfo;
