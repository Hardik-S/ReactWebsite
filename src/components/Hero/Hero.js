import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import AutoTyping, { BlinkCursor } from 'react-auto-typing';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        <AutoTyping
      active // <boolean>
      textRef='Welcome to my port' // <string>
      writeSpeed={150} // <number>
      deleteSpeed={150} // <number>
      delayToWrite={1000} // <number>
      delayToDelete={2000} // <number>
    />
    <BlinkCursor
      active // <boolean>
      blinkSpeed={500} // <number>
    />
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
        <Button onClick = {() => window.location.href='#projects'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;