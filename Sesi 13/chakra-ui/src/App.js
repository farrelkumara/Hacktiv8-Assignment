//import "./App.css";
import React from "react";
import img1 from "./image/mongoDBlogo.png";
import img2 from "./image/googlelogo.jpg";
import img3 from "./image/avatar.jpg";
import img4 from "./image/popover.png";
import bgImg from "./image/background.png";
import { InfoIcon, SearchIcon } from "@chakra-ui/icons";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ChatIcon } from "@chakra-ui/icons";
import {
  Image,
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Divider,
  ButtonGroup,
  Text,
  Stack,
  Link,
  Grid,
  GridItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box boxSize="150px" ml="50" mt="50">
        <Image src={img1} alt="" />
      </Box>

      <Heading ml="50" mt="-16" size="lg">
        Log in to your account
      </Heading>

      <Button
        px="5%"
        ml="50"
        mt="10"
        backgroundColor="#00a1f1"
        color="white"
        variant="solid"
        onClick={onOpen}
      >
        Log in with Google
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign in with Google</ModalHeader>
          <Divider borderColor="grey" />
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign="center">Choose an account</Text>
            <Text textAlign="center">
              to continue to &nbsp;
              <Link color="blue" href="#">
                mongodb.com
              </Link>
            </Text>
            <br />
            <Box>
              <Avatar src={img3} alt="" />
              <Text ml="15%" mt="-10">
                Johanes Elian Farrel Kumara
                <br />
              </Text>
            </Box>
          </ModalBody>
          <Divider mt="10" borderColor="grey" />

          <ModalFooter>
            <Text>
              To continue, Google will share your name, email address, language
              preference, and profile picture with mongodb.com. Before using
              this app, you can review mongodb.com’s privacy policy and terms of
              service.
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <Stack direction="row" ml="50" mt="10">
        <Divider width="5%" borderColor="grey" />
        <Text textAlign="center">or</Text>
      </Stack> */}

      <FormControl ml="50" mt="10" id="email">
        <FormLabel>
          Email Address &nbsp;
          <Tooltip
            label="This is your username or email address you use when you registered"
            fontSize="sm"
            placement="right"
          >
            <InfoIcon color="grey" />
          </Tooltip>
        </FormLabel>
        <Input w="19%" type="email" borderColor="black" />
      </FormControl>

      <ButtonGroup variant="outline" spacing="6" ml="50" mt="20">
        <Button
          px="8"
          py="3"
          bgColor="#b3ffec"
          color="#00664b"
          borderColor="#00664b"
        >
          Next
        </Button>
        <Text mt="2">
          Don't have an account? &nbsp;
          <Link color="blue" href="#">
            Sign Up
          </Link>
        </Text>
      </ButtonGroup>

      <Grid ml="27%" mt="-32%" h="744px">
        <Image w="100%" h="39%" src={bgImg} />
        <Box mt="6%" ml="50" color="white" position="absolute">
          <Heading>
            Easily scale with <br /> serverless instances
          </Heading>

          <Text mt="5">
            Effortlessly scale to meet app demand with minimal <br />
            configuration. Just pay for the operations you run.
          </Text>

          <br />

          <Text as="u" s>
            <Link>
              See the tutorial
              <ArrowForwardIcon />
            </Link>
          </Text>
        </Box>

        <Box ml="92%" mt="-115%">
          <Popover placement="top-start">
            <PopoverTrigger>
              <Button borderRadius="full" bgColor="green">
                <ChatIcon color="white" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Image src={img4} alt="" />
              <PopoverHeader fontWeight="semibold">Hi There !</PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <FormControl id="email">
                  <FormLabel>Search for helps</FormLabel>
                  <Input type="email" placeholder="Search articles..." />
                </FormControl>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Grid>
    </div>
  );
}

export default App;
