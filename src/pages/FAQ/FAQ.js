import React from 'react';
import { Layout, Image, SEO, Typography } from 'components';

const FAQ = () => (
  <Layout>
    <SEO title="FAQ" />
    <Typography type={'title'}>Frequently Asked Questions</Typography>
    <Typography type={'subtitle'}>What is Kung Fu?</Typography>
    <Typography type={'body'}>
      The words "Kung Fu" technically mean any skill brought about by hard work,
      but practically it refers to the 400 or so styles of martial arts that
      were developed in China. It is not invented, it is handed down, when
      selecting a Kung Fu ALWAYS trace the lineage of the teacher.
    </Typography>
    <Typography type={'subtitle'}>
      Why do you spell "Wing Chun" as "Ving Tsun"?
    </Typography>
    <Typography type={'body'}>
      Ving Tsun is the "older" spelling of Wing Chun, it denotes that we come
      from the more traditional Moy Yat Lineage. The pronunciation is the same,
      though not as well marketed ;)
    </Typography>
    <Typography type={'subtitle'}>What do you mean by traditional?</Typography>
    <Typography type={'body'}>
      Simply put we teach the system as it was laid out by our grand master and
      we follow a "traditional" system of etiquette, which among other things
      solves common problems that arise in martial arts clubs. We are
      disinterested in "martial fads" our focus is on the roots of our system
      and the wisdom within it to bring about a "Kung Fu Life".
    </Typography>
    <Typography type={'subtitle'}>
      Do I need prior martial arts training?
    </Typography>
    <Typography type={'body'}>
      No, alot of people come to Ving Tsun after spending years in other styles
      but it is not required.
    </Typography>
    <Typography type={'subtitle'}>Do you teach children?</Typography>
    <Typography type={'body'}>
      As a rule, no. Classes are 2 hours long and the system requires alot of
      repetition. Children generally don't have the attention span, maturity, or
      the long term interest required to internalize the system. As a rule we
      accept students over 14 years of age.
    </Typography>
    <Typography type={'subtitle'}>How often should I train?</Typography>
    <Typography type={'body'}>
      My Si Hing (Older Kung Fu Brother) once summed it like this (I'll
      paraphrase for him any inaccuracy is mine): "Say your destination is
      across a large field of tall grass. The first time across you make a path.
      Coming back immediately is easier because you simply follow the path
      already laid out. If you wait too long between journeys you will have to
      find your way from scratch." So, how long would it take for these
      metaphorical weeds to grow on your path to hinder your progress?
    </Typography>
    <Typography type={'subtitle'}>How does grading work?</Typography>
    <Typography type={'body'}>
      Well, there is a tough answer here. If you are not ready, you won't be
      graded, Sifu WILL NOT promote anyone who is not ready. If you are ready,
      you will be approached and asked to prepare for the test. It's not a kung
      fu fortune cookie parable about patience, we just don't like people
      wearing sashes they don't deserve and neither should they.
    </Typography>
  </Layout>
);

export default FAQ;
