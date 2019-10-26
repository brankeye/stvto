import React from 'react';
import { Layout, SEO, Typography } from 'components';

const Classes = () => (
  <Layout>
    <SEO title="Class Times" />
    <Typography type={'title'}>Classes</Typography>
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 0.5 }}>
          <Typography type={'subtitle'}>Day</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 0.5 }}>
          <Typography type={'subtitle'}>Time</Typography>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 0.5 }}>
          <Typography type={'body'}>Monday</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 0.5 }}>
          <Typography type={'body'}>7:30 PM to 9:30 PM</Typography>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 0.5 }}>
          <Typography type={'body'}>Wednesday</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 0.5 }}>
          <Typography type={'body'}>7:30 PM to 9:30 PM</Typography>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 0.5 }}>
          <Typography type={'body'}>Saturday</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 0.5 }}>
          <Typography type={'body'}>10:00 AM to 12:00 PM</Typography>
        </div>
      </div>
    </div>
  </Layout>
);

export default Classes;
