import React from 'react';
import { Layout, SEO, Typography } from 'components';
import lineageImage from 'images/lineage.png';

const OurSchool = ({ data }) => (
  <Layout>
    <SEO title="Our School" />
    <Typography type={'title'}>Our School</Typography>
    <Typography type={'body'}>
      Our school maintains a close relationship with Sunny Tang (Dunn Wah) in
      Toronto. We believe in creating a safe supportive environment to study
      Kung Fu. We are a helpful tight knit group. We believe immersion is the
      best way to learn anything.
    </Typography>
    <Typography type={'title'}>Our Lineage</Typography>
    <Typography type={'body'}>
      Though lineage isn't everything, we believe it's important for the drinker
      to consider the source of his water, in that spirit here is our lineage.
    </Typography>
    <img
      src={lineageImage}
      alt={'lineage'}
      width={284}
      height={198}
      style={{ width: 250, margin: '0 auto' }}
    />
    <Typography type={'title'}>Our Sifu</Typography>
    <Typography type={'body'}>
      A 4th generation student of Yip Man, Sifu started training martial arts in
      1984. He came to Ving Tsun in early 1994. He has studied Tae Kwon Do,
      Greco-Roman Wrestling and Tai Chi.
    </Typography>
    <Typography type={'body'}>
      He attained his Gold Sash under{' '}
      <a href={'http://ottawakungfucentre.com/'}>John Peluso</a> in 2001. He
      currently holds a Martial Artist's Achievement Award Master Level 6 from
      the Confederation of Canadian Wushu Organizations.
    </Typography>
    <Typography type={'body'}>
      Sifu believes firmly that the true value of Ving Tsun is in the living of
      it.
    </Typography>
  </Layout>
);

export default OurSchool;
