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
import { MdDesignServices } from "react-icons/md"

import Logo from "./../img/Logo-TheBox.svg";
import Img01 from './../img/Img01.svg';

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
      <nav>
        <Center 
          w="100%" 
          h="80px"
          bg="#fff">

          <Center
            w={{
              base: "90%",
              sm: "100%",
              md: "100%",
              lg: "90%",
              xl: "90%",
            }}
            h="100%"
            justifyContent={"space-between"}>

            <Center 
              w={{
                base: "160px",
                sm: "220px",
                md: "220px",
                lg: "160px",
                xl: "160px",
              }} 
              h="80px" 
              justifyContent={"flex-end"}>

              <Center
                w="160px"
                h="100%"
                justifyContent={"space-between"}>

                <Center
                  w="38px"
                  h="47.5px">
                  
                  <svg width="30" height="40" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0017 36.6673V47.5003L38 36.5269V25.6952L19.0017 36.6673Z" fill="#2947A9"/>
                    <path d="M27.5062 15.745L36.8802 10.3284L19.0017 0V10.8328L27.5062 15.745Z" fill="#0B267D"/>
                    <path d="M11.6182 18.9795V29.8158L19.0015 34.0795V23.2481L11.6182 18.9795Z" fill="#91A1D4"/>
                    <path d="M38 12.2701L19.0017 23.2481V34.0795L38 23.1061V12.2701Z" fill="#2947A9"/>
                    <path d="M1.13135 10.3221L10.4492 15.7703L19.0014 10.8328V0L1.13135 10.3221Z" fill="#2947A9"/>
                    <path d="M9.37721 31.1103V17.68L0 12.2652V36.5266L19.0014 47.5V36.6669L9.37721 31.1103Z" fill="#91A1D4"/>
                  </svg>
                </Center>

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
              
            </Center>

            <Box
              w={{
                base: "80px",
                sm: "80px",
                md: "80px",
                lg: "55%",
                xl: "55%",
              }}
              h={{
                base: "80px",
                sm: "100%",
                md: "100%",
                lg: "80px",
                xl: "80px",
              }}
              pos="relative">

              <Center
                w="100%"
                h="100%"
                display={{
                  base: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
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

              <Box
                w={{
                  base: "80px",
                  sm: "80px",
                  md: "80px",
                  lg: "100%",
                  xl: "100%",
                }}
                h={{
                  base: "80px",
                  sm: "80px",
                  md: "100%",
                  lg: "80px",
                  xl: "80px",
                }}
                flexDirection="row"
                display="flex"
                justifyContent="space-between"
                position={{
                  base: "initial",
                  sm: "initial",
                  md: "fixed",
                  lg: "initial",
                  xl: "initial",
                }}
                background={{
                  base: "none",
                  sm: "none",
                  md: "#f1f1f1",
                  lg: "none",
                  xl: "none",
                }}
                border={{
                  base: "none",
                  sm: "none",
                  md: "0.513778px solid rgba(95, 95, 167, 0.37)",
                  lg: "none",
                  xl: "none",
                }}
                boxSizing='border-box'>

                <Grid
                  w="100%"
                  h="100%"
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    sm: "repeat(1, 1fr)",
                    md: "repeat(1, 1fr)",
                    lg: "repeat(5, 1fr)",
                    xl: "repeat(5, 1fr)",
                  }}
                  gap={2}
                  display={{
                    base: "none",
                    sm: "none",
                    md: "grid",
                    lg: "grid",
                    xl: "grid",
                  }}>

                  <Center 
                    w="100%" 
                    h="100%" >

                    <Box 
                      display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "flex",
                      xl: "flex",
                      }}>
                      <Text>Home</Text>
                    </Box>

                    <Center 
                      w="55px"
                      h="55px"
                      display={{
                        base: "none",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                        xl: "none",
                      }}
                      background='#fff'
                      border='0.513778px solid #2E2E48'
                      boxSizing='border-box'
                      borderRadius='9.76178px'
                      cursor="pointer">

                      <HiOutlineHome 
                        color="#2E2E48"
                        fontSize={23} />
                    </Center>
                  </Center>

                  <Center 
                    w="100%" 
                    h="100%" >

                    <Box 
                      display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "flex",
                      xl: "flex",
                      }}>
                      <Text>About Us</Text>
                    </Box>

                    <Center 
                      w="55px"
                      h="55px"
                      display={{
                        base: "none",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                        xl: "none",
                      }}
                      background='#fff'
                      border='0.513778px solid rgba(95, 95, 167, 0.37)'
                      boxSizing='border-box'
                      borderRadius='9.76178px'
                      cursor="pointer">

                      <GoInfo 
                        color="rgba(95, 95, 167, 0.37)"
                        fontSize={23} />
                    </Center>
                  </Center>

                  <Center 
                    w="100%" 
                    h="100%" >

                    <Box 
                      display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "flex",
                      xl: "flex",
                      }}>
                      <Text>Projects</Text>
                    </Box>

                    <Center 
                      w="55px"
                      h="55px"
                      display={{
                        base: "none",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                        xl: "none",
                      }}
                      background='#fff'
                      border='0.513778px solid rgba(95, 95, 167, 0.37)'
                      boxSizing='border-box'
                      borderRadius='9.76178px'
                      cursor="pointer">

                      <AiOutlineFundProjectionScreen 
                        color="rgba(95, 95, 167, 0.37)"
                        fontSize={23} />
                    </Center>
                  </Center>

                  <Center 
                    w="100%" 
                    h="100%" >

                    <Box 
                      display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "flex",
                      xl: "flex",
                      }}>
                      <Text>Services</Text>
                    </Box>

                    <Center 
                      w="55px"
                      h="55px"
                      display={{
                        base: "none",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                        xl: "none",
                      }}
                      background='#fff'
                      border='0.513778px solid rgba(95, 95, 167, 0.37)'
                      boxSizing='border-box'
                      borderRadius='9.76178px'
                      cursor="pointer">

                      <MdOutlineDesignServices 
                        color="rgba(95, 95, 167, 0.37)"
                        fontSize={23} />
                    </Center>
                  </Center>

                  <Center 
                    w="100%" 
                    h="100%" >

                    <Box 
                      display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "flex",
                      xl: "flex",
                      }}>
                      <Text>Contact Us</Text>
                    </Box>

                    <Center 
                      w="55px"
                      h="55px"
                      display={{
                        base: "none",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                        xl: "none",
                      }}
                      background='#fff'
                      border='0.513778px solid rgba(95, 95, 167, 0.37)'
                      boxSizing='border-box'
                      borderRadius='9.76178px'
                      cursor="pointer">

                      <RiContactsLine 
                        color="rgba(95, 95, 167, 0.37)"
                        fontSize={20} />
                    </Center>
                  </Center>
                </Grid>
              </Box>
            </Box>
          </Center>
        </Center>
      </nav>
      <main>
        <Center 
          w={{
            base: "100%",
            sm: "100%",
            md: "89.9%",
            lg: "100%",
            xl: "100%",
          }} 
          h="100vh" >
          
          <Box
            w="100%"
            h="100%">
            
            <Grid 
              w="100%" 
              h="100%" 
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(1, 1fr)",
                md: "repeat(1, 1fr)",
                lg: "repeat(2, 1fr)",
                xl: "repeat(2, 1fr)",
              }} 
              gap={6}>

              <GridItem 
                w='100%' 
                h='100%'>

                <Center
                  w="100%"
                  h="100%">
                  
                  <Box
                    w="90%"
                    maxW='556px'
                    h="90%"
                    maxH='168px'
                    display="flex"
                    alignItems="flex-start"
                    flexDir="column"
                    ml={{
                      base: "0px",
                      sm: "0px",
                      md: "25px",
                      lg: "25px",
                      xl: "25px",
                    }}>
                    
                    <Text
                      fontStyle="normal"
                      fontWeight="600"
                      fontSize={{
                        base: "33px",
                        sm: "48px",
                        md: "50px",
                        lg: "50px",
                        xl: "72px",
                      }}
                      lineHeight={{
                        base: "64px",
                        sm: "84px",
                        md: "84px",
                        lg: "84px",
                        xl: "84px",
                      }}
                      color="#292E3D">
                      Building things<br /> 
                      is our mission.
                    </Text>
                  </Box>
                </Center>
              </GridItem>

              <GridItem 
                w='100%' 
                h='100%' 
                display="flex"
                alignItems="flex-end"
                justifyContent="flex-end">

                <Center
                  w={{
                    base: "100%",
                    sm: "90%",
                    md: "90%",
                    lg: "90%",
                    xl: "90%",
                  }}
                  maxW={416}
                  h="190px"
                  flexDir="column">
                  
                  <Center
                    w="100%"
                    h="150px">
                    
                    <Center
                      w="100%"
                      h="100%"
                      bg="#3559C7"
                      textAlign="center"
                      flexDir="column"
                      justifyContent="space-evenly">
                      
                      <Text
                        fontStyle="normal"
                        fontWeight="bold"
                        fontSize={{
                          base: "14px",
                          sm: "14px",
                          md: "15px",
                          lg: "17px",
                          xl: "19px",
                        }}
                        lineHeight="23px"
                        textAlign="center"
                        color="#FFFFFF">
                        Feature Projects
                      </Text>

                      <Text
                        fontStyle="normal"
                        fontWeight="normal"
                        fontSize={{
                          base: "15px",
                          sm: "15px",
                          md: "17px",
                          lg: "19px",
                          xl: "20px",
                        }}
                        lineHeight="28px"
                        textAlign="center"
                        color="#FFFFFF">
                        The National University of<br/> 
                        Architecture
                      </Text>
                    </Center>
                  </Center>

                  <Center
                    w="100%"
                    h="60px"
                    bg="#fff"
                    justifyContent="space-between">
                    
                    <Button
                      w="49.9%"
                      h="100%"
                      borderRadius="none"
                      bg="#292E3D">

                      <Center
                        w={{
                          base: "60%",
                          sm: "55%",
                          md: "55%",
                          lg: "45%",
                          xl: "45%",
                        }}
                        h="50%"
                        justifyContent="space-between">

                        <FaLongArrowAltLeft
                          color="#FFFFFF" />

                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize={{
                            base: "14px",
                            sm: "15px",
                            md: "16px",
                            lg: "17px",
                            xl: "18px",
                          }}
                          lineHeight="21px"
                          textAlign="center"
                          color="#FFFFFF">
                          Back
                        </Text>
                      </Center>
                      
                    </Button>

                    <Button
                      w="49.8%"
                      h="100%"
                      borderRadius="none"
                      bg="#292E3D">
                      
                      <Center
                        w={{
                          base: "60%",
                          sm: "55%",
                          md: "55%",
                          lg: "45%",
                          xl: "45%",
                        }}
                        h="50%"
                        justifyContent="space-between">
                        
                        <Text
                          fontStyle="normal"
                          fontWeight="normal"
                          fontSize={{
                            base: "14px",
                            sm: "15px",
                            md: "16px",
                            lg: "17px",
                            xl: "18px",
                          }}
                          lineHeight="21px"
                          textAlign="center"
                          color="#FFFFFF">
                          Next
                        </Text>

                        <FaLongArrowAltRight
                          color="#FFFFFF" />
                      </Center>
                    </Button>
                  </Center>
                </Center>
              </GridItem>
            </Grid>
          </Box>
        </Center>
        <Center 
          w={{
            base: "100%",
            sm: "100%",
            md: "89.9%",
            lg: "100%",
            xl: "100%",
          }} 
          h={{
            base: "933px",
            sm: "933px",
            md: "733px",
            lg: "633px",
            xl: "433px",
          }} >

          <Center
            w="90%"
            maxW={1020}
            h="90%"
            maxH={{
              base: "85%",
              sm: "85%",
              md: "70%",
              lg: "80%",
              xl: "289px",
            }}
            flexDir="column"
            justifyContent="space-between">

            <Text
              fontStyle="normal"
              fontWeight="bold"
              fontSize={{
                base: "26px",
                sm: "28px",
                md: "30px",
                lg: "33px",
                xl: "36px",
              }}
              lineHeight="42px"
              textAlign="center"
              color="#292E3D">
              Our Reputation
            </Text>

            <Center
              w="100%"
              h={{
                base: "85%",
                sm: "85%",
                md: "85%",
                lg: "85%",
                xl: "197px",
              }}>

              <Wrap 
                w="100%" 
                h="100%" 
                spacing='66px' 
                justify='center'>

                <WrapItem
                  width="292px"
                  height="197px"
                  background="#FFFFFF"
                  border="1.4px solid #E0E3EB"
                  boxSizing="border-box"
                  borderRadius="4px">

                  <Center 
                    w='100%' 
                    h='100%'>
                    
                    <Center
                      w="90%"
                      h="80%"
                      alignItems="flex-start"
                      flexDir="column"
                      justifyContent="space-between">

                      <FaHeadset 
                        color="#F9995D"
                        fontSize={40}/>

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
                        lineHeight="23px"
                        color="#858EAD">
                        Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                      </Text>
                    </Center>
                  </Center>
                </WrapItem>

                <WrapItem
                  width="292px"
                  height="197px"
                  background="#FFFFFF"
                  border="1.4px solid #E0E3EB"
                  boxSizing="border-box"
                  borderRadius="4px">

                  <Center 
                    w='100%' 
                    h='100%'>
                    
                    <Center
                      w="90%"
                      h="80%"
                      alignItems="flex-start"
                      flexDir="column"
                      justifyContent="space-between">

                      <FaHeadset 
                        color="#F9995D"
                        fontSize={40}/>

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
                        lineHeight="23px"
                        color="#858EAD">
                        Cursus semper tellus volutpat aliquet lacus. 
                      </Text>
                    </Center>
                  </Center>
                </WrapItem>

                <WrapItem
                  width="292px"
                  height="197px"
                  background="#FFFFFF"
                  border="1.4px solid #E0E3EB"
                  boxSizing="border-box"
                  borderRadius="4px">

                  <Center 
                    w='100%' 
                    h='100%'>
                    
                    <Center
                      w="90%"
                      h="80%"
                      alignItems="flex-start"
                      flexDir="column"
                      justifyContent="space-between">

                      <MdDesignServices 
                        color="#F9995D"
                        fontSize={40}/>

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
                        lineHeight="23px"
                        color="#858EAD">
                        Ultricies at ipsum nunc, tristique nam lectus.
                      </Text>
                    </Center>
                  </Center>
                </WrapItem>
              </Wrap>
            </Center>
          </Center>
        </Center>
      </main>
    </>
  );
}
