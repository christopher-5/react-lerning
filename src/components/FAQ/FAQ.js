import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import ReactHtmlParser from 'react-html-parser';
import {FAQData} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQData.title} image={FAQData.image} />
    <p>{ReactHtmlParser(FAQData.text)}</p>
  </Container>
);

export default FAQ;