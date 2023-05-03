import React from 'react'
import { Grid, Card, Text } from "@nextui-org/react";
import { useMediaQuery } from '@/utils/useMediaQuery';

const Tutorails = () => {
    const isMd = useMediaQuery(960);

    const MockItem = ({ text }: any) => {
        return (
            <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
                <Card.Body>
                    <Text h6 size={15} color="white" css={{ m: 0 }}>
                        {text}
                    </Text>
                </Card.Body>
            </Card>
        );
    };
    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} md={6}>
                <MockItem text={isMd ? "1 of 1" : "1 of 2"} />
            </Grid>
            <Grid xs={6} md={6}>
                <MockItem text={isMd ? "1 of 2" : "2 of 2"} />
            </Grid>
        </Grid.Container>
    )
}

export default Tutorails