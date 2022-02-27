import { useState } from "react";

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
  Grid,
  GridItem,
  Container,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiContactsLine, RiMenu4Fill } from "react-icons/ri";
import { GoInfo } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaHeadset } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

export default function Nav() {
  const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  });

  const theme = extendTheme({ breakpoints });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <Box
        w="100%"
        h="100vh">

        <Flex
          w="100%"
          h="100%" 
          color='white'>
          
          <Box 
            flex='1'>

            <Center
              w="100%"
              h="60px"
              border="0.513778px solid rgba(95, 95, 167, 0.37)"
              boxSizing="border-box">
              
              <Flex 
                w="90%"
                h="100%">

                <Center 
                  w='160px' 
                  justifyContent="space-between">

                  <svg width="33" height="43" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0017 36.6673V47.5003L38 36.5269V25.6952L19.0017 36.6673Z" fill="#2947A9"/>
                    <path d="M27.5062 15.745L36.8802 10.3284L19.0017 0V10.8328L27.5062 15.745Z" fill="#0B267D"/>
                    <path d="M11.6182 18.9795V29.8158L19.0015 34.0795V23.2481L11.6182 18.9795Z" fill="#91A1D4"/>
                    <path d="M38 12.2701L19.0017 23.2481V34.0795L38 23.1061V12.2701Z" fill="#2947A9"/>
                    <path d="M1.13135 10.3221L10.4492 15.7703L19.0014 10.8328V0L1.13135 10.3221Z" fill="#2947A9"/>
                    <path d="M9.37721 31.1103V17.68L0 12.2652V36.5266L19.0014 47.5V36.6669L9.37721 31.1103Z" fill="#91A1D4"/>
                  </svg>

                  <Text
                    fontStyle="italic"
                    fontWeight="bold"
                    fontSize="30px"
                    lineHeight="35px"

                    color="#2947A9"
                    
                    display={{
                      base: 'none',
                      sm: "flex",
                      md: "flex",
                      lg: "flex",
                      xl: "flex"
                    }}>

                    TheBox
                  </Text>
                </Center>

                <Center 
                  flex='1' 
                  justifyContent="flex-end">

                  <Center
                    w="550px"
                    h="100%"
                    display={{
                      base: 'none',
                      sm: "none",
                      md: "none",
                      lg: "flex",
                      xl: "flex"
                    }}>
                    
                    <SimpleGrid 
                      w="100%" 
                      h="100%" 
                      columns={5} 
                      spacing={1}>

                      <Center 
                        height='100%'>

                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="16px"
                          
                          color="#14171F">
                          Home
                        </Text>
                      </Center>

                      <Center 
                        height='100%'>
                          
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="16px"
                          
                          color="#14171F">
                          About Us
                        </Text>
                      </Center>
                      
                      <Center 
                        height='100%'>
                          
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="16px"
                          
                          color="#14171F">
                          Projects
                        </Text>
                      </Center>
                      
                      <Center 
                        height='100%'>
                          
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="16px"
                          
                          color="#14171F">
                          Services
                        </Text>
                      </Center>
                      
                      <Center 
                        height='100%'>
                          
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize="16px"
                          
                          color="#14171F">
                          Contact Us
                        </Text>
                      </Center>
                    </SimpleGrid>
                  </Center>
                </Center>

                <Center
                  w="60px"
                  h="100%"
                  display={{
                    base: 'flex',
                    sm: "flex",
                    md: "none",
                    lg: "none",
                    xl: "none"
                  }}>
                  
                  <Button colorScheme='none' onClick={onOpen}>
                    <RiMenu4Fill color="#14171F" fontSize={24} cursor="pointer" />
                  </Button>
                  <Drawer onClose={onClose} isOpen={isOpen}>

                    <DrawerOverlay />

                    <DrawerContent
                      background='#F1F1F1'
                      border='0.513778px solid rgba(95, 95, 167, 0.37)'
                      boxSizing='border-box'>

                      <DrawerHeader 
                        borderBottomWidth='1px'>
                        
                        <Center
                          w="80%"
                          h="100%"
                          justifyContent="space-between">

                          <Box onClick={onClose}>
                            <GrFormClose color="#14171F" fontSize={28} cursor="pointer" />
                          </Box>

                          <Text
                            width="111px"
                            height="35px"
                            fontFamily="Work Sans"
                            fontStyle="italic"
                            fontWeight="bold"
                            fontSize={{
                              base: "21px",
                              sm: "23px",
                              md: "25px",
                              lg: "27px",
                              xl: "30px",
                            }}
                            lineHeight="35px"
                            color="#2947A9">
                            TheBox
                          </Text>
                        </Center>
                      </DrawerHeader>

                      <DrawerBody
                        w="100%"
                        h="100%">
                          
                        <Center
                          w="100%"
                          h="100%">
                          
                          <SimpleGrid 
                            w="100%" 
                            h="100%" 
                            columns={1} 
                            spacing={10}>
                            
                            <Center 
                              height='50px'
                              borderLeft='3px solid #7E73FF'>
                              
                              <Center
                                w="140px"
                                h="40px"
                                justifyContent="space-between"
                                cursor="pointer">

                                <Center
                                  w="40px"
                                  h="100%">

                                  <HiOutlineHome 
                                  color="#14171F"
                                  fontSize={23} />
                                </Center>
                                
                                <Center
                                  w="95px"
                                  h="100%"
                                  justifyContent="flex-start">

                                  <Text>
                                    Home
                                  </Text>
                                </Center>
                              </Center>
                            </Center>
                            
                            <Center 
                              height='50px'
                              borderLeft='3px solid #7E73FF'>
                              
                              <Center
                                w="140px"
                                h="40px"
                                justifyContent="space-between"
                                cursor="pointer">

                                <Center
                                  w="40px"
                                  h="100%">

                                  <GoInfo 
                                    color="#14171F"
                                    fontSize={23} />
                                </Center>
                                
                                <Center
                                  w="95px"
                                  h="100%"
                                  justifyContent="flex-start">

                                  <Text>
                                    About Us
                                  </Text>
                                </Center>
                              </Center>
                            </Center>
                              
                            <Center 
                              height='50px'
                              borderLeft='3px solid #7E73FF'>
                              
                              <Center
                                w="140px"
                                h="40px"
                                justifyContent="space-between"
                                cursor="pointer">

                                <Center
                                  w="40px"
                                  h="100%">

                                  <AiOutlineFundProjectionScreen 
                                    color="#14171F"
                                    fontSize={23} />
                                </Center>
                                
                                <Center
                                  w="95px"
                                  h="100%"
                                  justifyContent="flex-start">

                                  <Text>
                                    Project
                                  </Text>
                                </Center>
                                
                              </Center>
                              
                            </Center>
                              
                            <Center 
                              height='50px'
                              borderLeft='3px solid #7E73FF'>
                              
                              <Center
                                w="140px"
                                h="40px"
                                justifyContent="space-between"
                                cursor="pointer">

                                <Center
                                  w="40px"
                                  h="100%">

                                  <MdOutlineDesignServices 
                                    color="#14171F"
                                    fontSize={23} />
                                </Center>
                                
                                <Center
                                  w="95px"
                                  h="100%"
                                  justifyContent="flex-start">

                                  <Text>
                                    Services
                                  </Text>
                                </Center>
                                
                              </Center>
                              
                            </Center>
                              
                            <Center 
                              height='50px'
                              borderLeft='3px solid #7E73FF'>
                              
                              <Center
                                w="140px"
                                h="40px"
                                justifyContent="space-between"
                                cursor="pointer">

                                <Center
                                  w="40px"
                                  h="100%">

                                  <RiContactsLine 
                                    color="#14171F"
                                    fontSize={20} />
                                </Center>

                                <Center
                                  w="95px"
                                  h="100%"
                                  justifyContent="flex-start">

                                  <Text>
                                    Contact
                                  </Text>
                                </Center>
                              </Center>
                            </Center>
                          </SimpleGrid>
                        </Center>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </Center>
              </Flex>

            </Center>

            <Center
              w="100%"
              h="90vh"
              flexDir="column"
              overflow="auto">
              
              <Box
                w="100%"
                h="100%">
                
                <Center
                  w="100%"
                  h={{
                    base: "50vh",
                    sm: "50vh",
                    md: "50vh",
                    lg: "50vh",
                    xl: "70vh"
                  }}>

                  <Grid 
                    w="100%" 
                    h="100%" 
                    templateColumns={{
                      base: "repeat(1, 1fr)",
                      sm: "repeat(1, 1fr)",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(2, 1fr)",
                      xl: "repeat(2, 1fr)"
                    }}
                    gap={10}>

                    <Center 
                      height='100%'>

                      <Center
                        w="90%"
                        maxW={556}
                        h="168px"
                        justifyContent="flex-start">
                        
                        <Text
                          fontStyle="normal"
                          fontWeight="600"
                          fontSize={{
                            base: "30.5px",
                            sm: "40.5px",
                            md: "40.5px",
                            lg: "58px",
                            xl: "72px"
                          }}
                          lineHeight={{
                            base: "64px",
                            sm: "64px",
                            md: "64px",
                            lg: "74px",
                            xl: "84px"
                          }}
                          color="#292E3D">
                          Building things<br /> 
                          is our mission.
                        </Text>
                      </Center>
                    </Center>

                    <Center 
                      height='100%'
                      alignItems="flex-end"
                      justifyContent={{
                        base: "center",
                        sm: "flex-end",
                        md: "flex-end",
                        lg: "flex-end",
                        xl: "flex-end"
                      }}>
                      
                      <Box
                        w="90%"
                        h="90%"
                        maxW="416px"
                        maxH="190px"
                        display="flex"
                        flexDir="column">

                        <Center
                          w="100%"
                          h="150px"
                          bg="#3559C7"
                          flexDir="column"
                          justifyContent="space-evenly">

                          <Text>
                            Feature Projects
                          </Text>
                          <Text
                            textAlign="center">
                            The National University of <br/> 
                            Architecture
                          </Text>
                        </Center>

                        <Box
                          w="100%"
                          h="40px"
                          bg="#fff">
                            
                          <SimpleGrid 
                            w="100%" 
                            h="100%" 
                            columns={2} 
                            spacing={1}>

                            <Center 
                              bg='#292E3D' 
                              height='100%'>

                              <Center
                                w="60%"
                                justifyContent="space-evenly">
                                
                                <FaLongArrowAltLeft />
                                <Text>Back</Text>
                              </Center>
                              
                            </Center>

                            <Center 
                              bg='#292E3D' 
                              height='100%'>

                              <Center
                                w="60%"
                                justifyContent="space-evenly">
                                
                                <Text>Next</Text>
                                <FaLongArrowAltRight />
                              </Center>
                            </Center>
                          </SimpleGrid>
                        </Box>
                      </Box>
                    </Center>
                  </Grid>
                </Center>

                <Center
                  w="100%"
                  h={{
                    base: "100vh",
                    sm: "100vh",
                    md: "90vh",
                    lg: "60vh",
                    xl: "60vh"
                  }}>
                  
                  <Center
                    w="90%"
                    h="90%"
                    maxH={{
                      base: "789px",
                      sm: "789px",
                      md: "589px",
                      lg: "289px",
                      xl: "289px"
                    }}
                    flexDir="column"
                    justifyContent="space-between">
                    
                    <Text
                      fontStyle="normal"
                      fontWeight="bold"
                      fontSize="36px"
                      lineHeight="42px"
                      textAlign="center"
                      color="#292E3D">
                      Our Reputation
                    </Text>
                    <Center
                      w="100%"
                      h={{
                        base: "670px",
                        sm: "670px",
                        md: "470px",
                        lg: "197px",
                        xl: "197px"
                      }}>
                      
                      <Wrap
                        w="100%"
                        h="100%"
                        justify='center'>

                        <WrapItem
                          w="90%"
                          maxW="292px"
                          h="197px">

                          <Center 
                            w="100%"
                            h="100%"
                            background="#FFFFFF"

                            border="1.4px solid #E0E3EB"
                            box-sizing="border-box"
                            border-radius="4px">
                            
                            <Box
                              w="85%"
                              h="85%"
                              display="flex"
                              flexDir="column"
                              justifyContent="space-between">
                              
                              <FaHeadset 
                                fontSize={35}
                                color="#F9995D"/>

                              <Text
                                fontStyle="normal"
                                fontWeight="bold"
                                fontSize="20px"
                                lineHeight="23px"
                                color="#3D445C">
                                Best Services
                              </Text>

                              <Text
                                fontStyle="normal"
                                fontWeight="normal"
                                fontSize="16px"
                                lineHeight="19px"
                                color="#858EAD">
                                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                              </Text>
                            </Box>
                          </Center>
                        </WrapItem>

                        <WrapItem
                          w="90%"
                          h="197px"
                          maxW="292px">

                          <Center 
                            w="100%"
                            h="100%"
                            background="#FFFFFF"

                            border="1.4px solid #E0E3EB"
                            box-sizing="border-box"
                            border-radius="4px">

                            <Box
                              w="85%"
                              h="85%"
                              display="flex"
                              flexDir="column"
                              justifyContent="space-between">
                              
                              <FaHeadset 
                                fontSize={35}
                                color="#F9995D"/>

                              <Text
                                fontStyle="normal"
                                fontWeight="bold"
                                fontSize="20px"
                                lineHeight="23px"
                                color="#3D445C">
                                Best Teams
                              </Text>

                              <Text
                                fontStyle="normal"
                                fontWeight="normal"
                                fontSize="16px"
                                lineHeight="19px"
                                color="#858EAD">
                                Cursus semper tellus volutpat aliquet lacus. 
                              </Text>
                            </Box>
                          </Center>
                        </WrapItem>

                        <WrapItem
                          w="90%"
                          h="197px"
                          maxW="292px">

                          <Center 
                            w="100%"
                            h="100%"
                            background="#FFFFFF"

                            border="1.4px solid #E0E3EB"
                            box-sizing="border-box"
                            border-radius="4px">

                            <Box
                              w="85%"
                              h="85%"
                              display="flex"
                              flexDir="column"
                              justifyContent="space-between">
                              
                              <MdDesignServices 
                                fontSize={35}
                                color="#F9995D"/>

                              <Text
                                fontStyle="normal"
                                fontWeight="bold"
                                fontSize="20px"
                                lineHeight="23px"
                                color="#3D445C">
                                Best Designs
                              </Text>

                              <Text
                                fontStyle="normal"
                                fontWeight="normal"
                                fontSize="16px"
                                lineHeight="19px"
                                color="#858EAD">
                                Ultricies at ipsum nunc, tristique nam lectus.
                              </Text>
                            </Box>
                          </Center>
                        </WrapItem>
                      </Wrap>
                    </Center>
                  </Center>
                </Center>
              </Box>
            </Center>
          </Box>
          
          <Center 
            display={{
              base: 'none',
              sm: "none",
              md: "flex",
              lg: "none",
              xl: "none"
            }} 
            alignItems="flex-start"  
            w='80px'
            bg="#202020" >
            
            <SimpleGrid 
              w="90%" 
              h="80%" 
              columns={1} 
              spacing={1}
              mt={1}>

              <Center 
                height='90%'
                maxH="80px">
                  
                <Center
                  w="50px"
                  h="75px"
                  flexDir="column"
                  justifyContent="space-evenly"
                  cursor="pointer">

                  <svg width="30" height="40" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0017 36.6673V47.5003L38 36.5269V25.6952L19.0017 36.6673Z" fill="#2947A9"/>
                    <path d="M27.5062 15.745L36.8802 10.3284L19.0017 0V10.8328L27.5062 15.745Z" fill="#0B267D"/>
                    <path d="M11.6182 18.9795V29.8158L19.0015 34.0795V23.2481L11.6182 18.9795Z" fill="#91A1D4"/>
                    <path d="M38 12.2701L19.0017 23.2481V34.0795L38 23.1061V12.2701Z" fill="#2947A9"/>
                    <path d="M1.13135 10.3221L10.4492 15.7703L19.0014 10.8328V0L1.13135 10.3221Z" fill="#2947A9"/>
                    <path d="M9.37721 31.1103V17.68L0 12.2652V36.5266L19.0014 47.5V36.6669L9.37721 31.1103Z" fill="#91A1D4"/>
                  </svg>
                </Center>
              </Center>

              <Center 
                height='90%'
                maxH="80px">

                <Center
                  w="50px"
                  h="75px"
                  flexDir="column"
                  justifyContent="space-evenly"
                  cursor="pointer">
                  
                  <HiOutlineHome
                    fontSize={23} />

                  <Text
                    fontSize={11}>
                    Home
                  </Text>
                </Center>
              </Center>

              <Center 
                height='90%'
                maxH="80px">

                <Center
                  w="50px"
                  h="75px"
                  flexDir="column"
                  justifyContent="space-evenly"
                  cursor="pointer">
                  
                  <GoInfo
                    fontSize={23} />

                  <Text
                    fontSize={11}>
                    About Us
                  </Text>
                </Center>
              </Center>

              <Center 
                height='90%'
                maxH="80px">

                <Center
                  w="50px"
                  h="75px"
                  flexDir="column"
                  justifyContent="space-evenly"
                  cursor="pointer">
                  
                  <AiOutlineFundProjectionScreen
                    fontSize={24} />

                  <Text
                    fontSize={11}>
                    Projects
                  </Text>
                </Center>
              </Center>

              <Center 
                height='90%'
                maxH="80px">

                <Center
                  w="50px"
                  h="75px"
                  flexDir="column"
                  justifyContent="space-evenly"
                  cursor="pointer">
                  
                  <MdOutlineDesignServices
                    fontSize={23} />

                  <Text
                    fontSize={11}>
                    Services
                  </Text>
                </Center>
              </Center>

              <Center 
                height='90%'
                maxH="80px">

                <Center
                  w="50px"
                  h="75px"
                  flexDir="column"
                  justifyContent="space-evenly"
                  cursor="pointer">
                  
                  <RiContactsLine
                    fontSize={23} />

                  <Text
                    w="70px"
                    fontSize={11}
                    textAlign="center">
                    Contact Us
                  </Text>
                </Center>
              </Center>
            </SimpleGrid>
          </Center>
        </Flex>
      </Box>
    </>
  );
}
