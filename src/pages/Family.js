import React from 'react';
import { Layout, Image, SEO, Typography, Anchor } from 'components';

const Family = () => (
  <Layout>
    <SEO title="Family" />
    <Typography type={'title'}>Our Kung Fu Family</Typography>
    <Typography type={'body'}>* Bolding denotes our direct lineage</Typography>
    <Anchor href={'http://www.vingtsun.org.hk'}>
      <Typography type={'body'} bold>
        Ip Man - Hong Kong
      </Typography>
    </Anchor>
    <div css={styles.tier1}>
      <Typography type={'body'} bold>
        Sijo Moy Yat - New York
      </Typography>
      <div css={styles.tier2}>
        <Anchor href={'http://www.samlau-wingchun.com/en'}>
          <Typography type={'body'}>Si Bat Gong Sam Lau - Hong Kong</Typography>
        </Anchor>
        <Anchor href={'http://sunnytang.com/'}>
          <Typography type={'body'} bold>
            Si Gung Sunny Tang (Dunn Wah) - Toronto, ON
          </Typography>
        </Anchor>
        <div css={styles.tier3}>
          <Anchor href={'http://ottawakungfucentre.com/'}>
            <Typography type={'body'} bold>
              Sifu John Peluso - Ottawa, ON
            </Typography>
          </Anchor>
          <Anchor href={'https://stkfo.weebly.com/'}>
            <Typography type={'body'}>
              Si Suk Walter Jakimczuk - Carp, ON
            </Typography>
          </Anchor>
          <div css={styles.tier4}>
            <Anchor href={'http://www.vingtsunmtl.com/'}>
              <Typography type={'body'}>
                Sifu Darrell Carreon - Montreal, QC
              </Typography>
            </Anchor>
            <Typography type={'body'}>
              Sifu Colin Young - North Bay, ON
            </Typography>
          </div>
          <Typography type={'body'}>
            Si Suk Chris Hader - Hamilton, ON
          </Typography>
          <Typography type={'body'}>
            Si Suk Hugh Wilson - Mississauga, ON
          </Typography>
          <Typography type={'body'}>
            Si Suk Wayne Belonoha - Calgary, AB & Atlanta, GA
          </Typography>
        </div>
        <Typography type={'body'}>
          Si Suk Gong Miguel Hernandez - Brooklyn, NY
        </Typography>
        <Typography type={'body'}>
          Si Suk Gong Pete Pajil - Philadelphia, PA
        </Typography>
        <Typography type={'body'}>
          Si Suk Gong Henry Moy - Brooklyn, NY
        </Typography>
      </div>
    </div>
  </Layout>
);

const styles = {
  tier1: {
    marginLeft: '0.5rem',
  },
  tier2: {
    marginLeft: '1rem',
  },
  tier3: {
    marginLeft: '1.5rem',
  },
  tier4: {
    marginLeft: '2rem',
  },
};

export default Family;
