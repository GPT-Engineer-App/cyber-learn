import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Image, Button, Container, Grid, GridItem, Link } from "@chakra-ui/react";
import { FaLock, FaCode, FaBug, FaGithub } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Introduction to Penetration Testing",
    description: "Learn the basics of penetration testing and ethical hacking.",
    image: "https://images.unsplash.com/photo-1504707748692-419802cf939d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjB3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8fHwxNzEwNDAzNTU3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Web Application Security",
    description: "Discover vulnerabilities in web applications and how to exploit them.",
    image: "https://images.unsplash.com/photo-1614064643392-8dd713152ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBzZWN1cml0eXxlbnwwfHx8fDE3MTA0MDM1NTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Network Security",
    description: "Understand network security concepts and perform network penetration testing.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MHx8fHwxNzEwNDAzNTU4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <Box>
      <Box bg="gray.900" py={16}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" color="white" mb={4}>
            Penetration Testing E-Learning Platform
          </Heading>
          <Text fontSize="xl" color="gray.400" mb={8}>
            Learn ethical hacking and cybersecurity skills online
          </Text>
          <HStack spacing={4}>
            <Button leftIcon={<FaLock />} colorScheme="blue" size="lg">
              Enroll Now
            </Button>
            <Button leftIcon={<FaGithub />} colorScheme="gray" size="lg">
              GitHub Repo
            </Button>
          </HStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={16}>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {courses.map((course) => (
            <GridItem key={course.id}>
              <VStack align="stretch" spacing={4} p={6} borderWidth={1} rounded="md" _hover={{ shadow: "md" }} cursor="pointer" onClick={() => setSelectedCourse(course)}>
                <Image src={course.image} alt={course.title} rounded="md" />
                <Heading as="h3" size="md">
                  {course.title}
                </Heading>
                <Text>{course.description}</Text>
                <HStack>
                  <Button leftIcon={<FaCode />} colorScheme="blue" size="sm">
                    Start Course
                  </Button>
                  <Link>
                    <FaBug />
                  </Link>
                </HStack>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {selectedCourse && (
        <Box bg="gray.100" py={16}>
          <Container maxW="container.lg">
            <Heading as="h2" size="xl" mb={8}>
              {selectedCourse.title}
            </Heading>
            {/* Add course content here */}
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default Index;
