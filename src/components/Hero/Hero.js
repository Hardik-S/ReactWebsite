import React, { useState, useEffect } from 'react';
import TypeAnimation from 'react-type-animation';

import {
        Section,
        SectionText,
        SectionTitle
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
        <>
                <Section row nopadding class="innerbox">
                        <LeftSection>
                                <SectionTitle main center>
                                        <div class="innerbox">
                                                <TypeAnimation
                                                        cursor={true}
                                                        sequence={[
                                                                'Welcome to my portfolio.',
                                                                1000,
                                                                'My name is Hardik Shrestha.',
                                                                400,
                                                                'I am a problem-solver!',
                                                                500,
                                                                'I am a chess player ♞',
                                                                500,
                                                                'I am agile, creative, and innovative 🌟',
                                                                1000
                                                        ]}
                                                        wrapper="SectionTitle"
                                                        repeat={Infinity}
                                                />
                                        </div>
                                </SectionTitle>

                                <div>
                                        <SectionText>
                                                I'm a forward-thinking
                                                trailblazer pursuing a Computer
                                                Science and Ivey Business Degree
                                                at Western University.
                                        </SectionText>
                                        <Button
                                                onClick={() =>
                                                        (window.location.href =
                                                                '#projects')
                                                }
                                        >
                                                Learn More
                                        </Button>
                                </div>
                        </LeftSection>
                </Section>
        </>
);

export default Hero;
