import React, { FC } from 'react'
import { Text, Container, Image, Button, Row } from "@nextui-org/react";
import { useMediaQuery } from '@/utils/useMediaQuery';
import { heroImage, image2, image3, midImage } from '@/constants/ImageConstant';
import HeroItem from '@/components/heroItem/HeroItem';
import { dela, montserrat } from '@/utils/fonts';

const Landing = () => {
    const isMd = useMediaQuery(960);

    type HeroTextType = {
        heroHeader: string,
        heroDescription: string,
        children?: any
    }
    const HeroText: FC<HeroTextType> = (props) => {
        return (
            <Container>
                <Text className={montserrat.className} css={{
                    fontWeight: 700,
                    fontSize: '20px', lineHeight: '100%',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    mt: 10
                }}>E-COURSE PLATFORM</Text>
                <Text size={'$5xl'} className={dela.className} css={{
                    fontWeight: 400, lineHeight: '100%',
                    letterSpacing: '-0.04em',
                    mt: 20
                }}>{props.heroHeader}
                </Text>

                <Text className={montserrat.className} css={{
                    fontWeight: 400,
                    fontSize: '22px', lineHeight: '140%',
                    letterSpacing: '-0.04em',
                    mt: 20
                }}>{props.heroDescription}
                    Gain subject certification or earn money
                    while teaching online with GlobalTalk.
                </Text>
                {props.children}
            </Container >
        );
    };




    return (
        <Container>
            <Text className={montserrat.className} css={{
                fontWeight: 700,
                fontSize: '20px', lineHeight: '100%',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                mt: 10
            }}>E-COURSE PLATFORM</Text>

            <HeroItem
                heroHeader='Learning and teaching online, made easy.'
                heroDescription='Gain subject certification or earn money while teaching online with GlobalTalk.'
                image={heroImage}>
                <Row css={{ mt: 20 }}>
                    <Button auto flat href="#">
                        Sign Up
                    </Button>
                    <Button auto flat href="#" css={{ marginLeft: 30 }}>
                        Sign Up
                    </Button>
                </Row>
                <Row css={{ mt: 20 }}>
                    <Text size={'$3xl'} css={{
                        fontWeight: 700, lineHeight: '140%',
                        letterSpacing: '-0.04em',
                        mt: 20
                    }}>500 +
                    </Text>
                    <Text size={'$3xl'} css={{
                        fontWeight: 700, lineHeight: '140%',
                        letterSpacing: '-0.04em',
                        mt: 20
                    }}>700 + </Text>
                </Row>
            </HeroItem>

            <HeroItem
                order={'row-reverse'}
                heroHeader={'Learn a language in a playful way'}
                heroDescription={'Make learning words more fun with mini-games'}
                image={midImage}
            />
            <HeroItem
                heroHeader={'Increase your vocabulary'}
                heroDescription={'Traditional and new effective approaches to word study'}
                image={image2}
            />
            <HeroItem
                order={'row-reverse'}
                heroHeader={'Increase your vocabulary'}
                heroDescription={'Traditional and new effective approaches to word study'}
                image={image3}
            />
        </Container>
    )
}

export default Landing