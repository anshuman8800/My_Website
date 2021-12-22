import React from 'react';
import Link from 'next/link'; 

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there—<br />
          I'm Anshuman
        </SectionTitle>
        <SectionText>
        <br></br>
        I'm a Student, pursing my CSE degree from IIIT-Guwahati 
        <br></br>I'm a Enthusiastic Software Developer
        <br></br>Looking for a Golden opportunity to prove my Hardwork
        <br></br>
        <br></br>
        </SectionText >
        <Link href="#about">
        <Button onClick={props.handleClick}>Know More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;