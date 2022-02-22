import { 
  Box,
  Center,
  Flex,
  Spacer,
  Image,
  Text,
  SimpleGrid,
  extendTheme,
  RadioGroup,
  Stack,
  Radio,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import { createBreakpoints } from '@chakra-ui/theme-tools';
import { useState } from 'react';

import { HiMenuAlt1 } from "react-icons/hi";

import Logo from '../img/Logo-TheBox.svg';

export default function Nav() {
  
  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  });

  const theme = extendTheme({ breakpoints });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <nav>
        <Center
          w="100%"
          h="80px">
          
          <Box
            w="85%"
            h="100%">
            
            <Flex
              w="100%"
              h="100%">
                
              <Center 
                w="163px" 
                justifyContent="space-between">
                
                <Image src={Logo} />

                <Text
                  fontFamily="Work Sans"
                  fontStyle="italic"
                  fontWeight="900"
                  fontSize="30px"
                  line-height="35px"
                  color="#2947A9">
                  TheBox
                </Text>
              </Center>
              <Spacer />
              <Center 
                w={{ 
                  base: '77px', 
                  sm: '77px', 
                  md: '77px', 
                  lg: '77px', 
                  xl: '577px' 
                }}
                justifyContent={"space-between"}>

                <Center 
                  w="100%"
                  height='80px'
                  display={{ 
                    base: 'flex', 
                    sm: 'flex', 
                    md: 'flex', 
                    lg: 'flex', 
                    xl: 'none' 
                  }}>

                  <Button colorScheme='blue' onClick={onOpen}>
                    <HiMenuAlt1 />
                  </Button>
                  <Drawer onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                      <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </Center>
                
                <SimpleGrid 
                  w="100%" 
                  h="100%" 
                  columns={5}
                  display={{ 
                    base: 'none', 
                    sm: 'none', 
                    md: 'none', 
                    lg: 'none', 
                    xl: 'flex' 
                  }} >

                  <Center 
                    w="100%"
                    height='80px'>

                    <Text
                      fontStyle="normal"
                      fontWeight="normal"
                      fontSize="18px"
                      lineHeight="21px"
                      color="#14171F"
                      cursor="pointer">
                      Home
                    </Text>
                  </Center>

                  <Center 
                    w="100%"
                    height='80px'>
                    
                    <Text
                      fontStyle="normal"
                      fontWeight="normal"
                      fontSize="18px"
                      lineHeight="21px"
                      color="#14171F"
                      cursor="pointer">
                      About Us
                    </Text>
                  </Center>

                  <Center 
                    w="100%"
                    height='80px'>
                    
                    <Text
                      fontStyle="normal"
                      fontWeight="normal"
                      fontSize="18px"
                      lineHeight="21px"
                      color="#14171F"
                      cursor="pointer">
                      Projects
                    </Text>
                  </Center>

                  <Center 
                    w="100%"
                    height='80px'>

                    <Text
                      fontStyle="normal"
                      fontWeight="normal"
                      fontSize="18px"
                      lineHeight="21px"
                      color="#14171F"
                      cursor="pointer">
                      Services
                    </Text>
                  </Center>

                  <Center 
                    w="100%"
                    height='80px'>

                    <Text
                      fontStyle="normal"
                      fontWeight="normal"
                      fontSize="18px"
                      lineHeight="21px"
                      color="#F9995D"
                      cursor="pointer">
                      Contact Us
                    </Text>
                  </Center>
                </SimpleGrid>
              </Center>
            </Flex>
          </Box>
        </Center>
      </nav>
    </>
  )
}