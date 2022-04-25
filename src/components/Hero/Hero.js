import React from 'react';

import {
        Section,
        SectionText,
        SectionTitle
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
// import AutoTyping, { BlinkCursor } from 'react-auto-typing';

const Hero = (props) => (
        <>
                <Section row nopadding>
                        <LeftSection>
                                <SectionTitle main center>
                                        

                                        Welcome To <br />
                                        My Personal Portfolio
                                </SectionTitle>
                                <SectionText>
                                        fuck this shit
                                </SectionText>
                                {/* <Button onClick={props.handleClick}>Learn More</Button> */}
                                <Button
                                        onClick={() =>
                                                (window.location.href =
                                                        '#projects')
                                        }
                                >
                                        Learn More
                                </Button>
                        </LeftSection>
                </Section>
        </>
);

export default Hero;
