import CourseCard from '@/components/courseCard/CourseCard';
import Layout from '@/components/layout/Layout';
import { dela, poppins } from '@/utils/fonts';
import { Button, Container, Grid, Input, Text } from '@nextui-org/react';
import React from 'react'

const courses = () => {
    return (
        <Layout>
            <Container>
                <Text h3 css={{
                    fontFamily: `${dela.className, poppins.className}`,
                    fontWeight: 700, lineHeight: '100%',
                    letterSpacing: '-0.04em',
                    mt: 20
                }}>
                    Featured Courses
                </Text>
                <Input placeholder="Search" />
                <Button.Group color="gradient" ghost>
                    <Button>Free</Button>
                    <Button>Paid</Button>
                    <Button>Free + Paid</Button>
                </Button.Group>
                <Grid.Container gap={2} >
                    <Grid xs={12} md={3} justify="center" alignItems='center'>
                        <CourseCard />
                    </Grid>
                    <Grid xs={12} md={3} justify="center" alignItems='center'>
                        <CourseCard />
                    </Grid>
                    <Grid xs={12} md={3} justify="center" alignItems='center'>
                        <CourseCard />
                    </Grid>
                    <Grid xs={12} md={3} justify="center" alignItems='center'>
                        <CourseCard />
                    </Grid>
                </Grid.Container>

            </Container>
        </Layout>
    )
}

export default courses;