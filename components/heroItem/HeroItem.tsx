import React, { FC } from 'react';
import { Container, Grid, Text, Image } from '@nextui-org/react';
import { Dela_Gothic_One, Montserrat } from 'next/font/google';
import { StaticImageData } from 'next/image';


const dela = Dela_Gothic_One({ weight: '400', subsets: ['latin'], });
const montserrat = Montserrat({ weight: '400', subsets: ['latin'], });
type heroItemType = {
    order?: 'row-reverse' | 'row' | 'unset' | 'column' | 'column-reverse',
    heroHeader?: string,
    heroDescription?: string,
    children?: any,
    image: StaticImageData
};


const HeroItem: FC<heroItemType> = (props) => {
    return (
        <Grid.Container gap={2} justify="center" css={{ flexDirection: props.order || 'row' }}>
            <Grid xs={12} md={6} justify="center" alignItems='center'>
                <Container>
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
            </Grid>
            <Grid xs={6} md={6}>
                <Container>
                    <Image
                        width={600}
                        height={500}
                        src={props.image.src}
                        objectFit="contain"
                    />
                </Container >
            </Grid>
        </Grid.Container>
    )
};

export default HeroItem