import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import ReactHtmlParser from 'react-html-parser';
import {InfoData} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={InfoData.title} image={InfoData.image} />
    <p>{ReactHtmlParser(InfoData.text)}</p>
  </Container>
);

export default Info;