import React, { useState } from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import SidebarRow from "./SidebarRow";
import animation from "./Yubo pics/animation.svg";

function Header() {
    const [mySidebar, setSidebar] = useState(false);
    const [body, setBody] = useState(false);
    const showSidebar = () => {
        setSidebar(!mySidebar);
    };
    document.body.style.overflow = mySidebar ? "hidden" : "scroll";

    return (
        <div>
            <Box
                display="flex"
                position="relative"
                // overflow="none"
                width="100vw"
                height="100vh"
                // overflow={mySidebar? 'hidden' : 'overflow'}
                backgroundImage="https://images.prismic.io/yubo/6118791b-2978-4f39-bc06-0d5d43cd6e93_LargeGraphics.webp?auto=compress,format&rect=0,0,1600,900&w=1680&h=945"
            >
                <Box
                    width="35vw"
                    // position="absolute"
                    position="fixed"
                    top="0"
                    // zIndex='10'
                    height="100vh"
                    overflowY="scroll"
                    backgroundColor="#ffe30a"
                    display={mySidebar ? "block" : "none"}
                >
                    <Box
                        width="100%"
                        height="20vh"
                        position="sticky"
                        top="0"
                        backgroundColor="#ffe30a"
                    ></Box>

                    <Box color="black" marginLeft="40px">
                        <SidebarRow
                            title="About"
                            one="About Us"
                            two="Newsroom"
                            three="Careers"
                            four="Contact Us"
                        />
                        <SidebarRow
                            title="Community"
                            one="Community Guidelines"
                            two="Blog"
                            three="downloads"
                            four="security policies"
                        />
                        <SidebarRow
                            title="Safety Hub"
                            one="our approach"
                            two="Law Enforcement"
                            three="Report"
                        />
                        <SidebarRow
                            title="Support"
                            one="Help center"
                            two="welcome"
                            three="sales page"
                            four="privacy"
                        />
                        <SidebarRow
                            title="Legal"
                            one="Terms"
                            two="privacy"
                            three="Cookies"
                            four="legal notice"
                        />
                    </Box>
                </Box>

                <Flex
                    width="100vw"
                    height="18vh"
                    align="center"
                    justifyContent="space-between"
                    position="fixed"
                    // zIndex="-1"
                    top="0"
                >
                    <HamburgerIcon
                        fontSize="25px"
                        color="white"
                        marginLeft="2rem"
                        onClick={showSidebar}
                    />
                    <Image
                        boxSize="145px"
                        src="https://www.yubo.live/_next/image?url=%2Fassets%2Fimg%2Flogo.svg&w=384&q=75"
                    />

                    <Flex
                        padding="10px 20px"
                        borderRadius="30px"
                        justifyContent="space-around"
                        backgroundColor="black"
                        marginRight="2rem"
                    >
                        <Image
                            marginRight="10px"
                            src="https://www.yubo.live/_next/image?url=%2Fassets%2Fimg%2FApple.svg&w=48&q=75"
                        />
                        <Image
                            marginLeft="10px"
                            src="https://www.yubo.live/_next/image?url=%2Fassets%2Fimg%2FAndroid.svg&w=64&q=75"
                        />
                    </Flex>
                </Flex>

                <Box
                    display="grid"
                    placeContent="center"
                    textAlign="center"
                    width="100vw"
                    height="100vh"
                    fontSize="9vw"
                >
                    <Box
                        width="50%"
                        lineHeight="120px"
                        margin="auto"
                        fontWeight="bold"
                        color="#ffe30a"
                    >
                        <Text as="b">Get friends. Get real. Go live.</Text>
                    </Box>
                </Box>
            </Box>

            <Flex
                width="100vw"
                height="160vh"
                padding="20px 150px"
                backgroundColor="#ffe30a"
            >
                <Box
                    width="70%"
                    height="50%"
                    // border="1px solid black"
                    marginTop="14vh"
                    fontSize="7vw"
                    fontWeight="bold"
                    lineHeight="100%"
                >
                    <h1>
                        <bold>Let those minds merge.</bold>
                    </h1>

                    <Flex justifyContent="space-between">
                        <Image
                            boxSize="14vw"
                            src="https://www.yubo.live/_next/image?url=https%3A%2F%2Fyubo.cdn.prismic.io%2Fyubo%2F14a3aea6-e219-40d9-8b5f-e72836efce90_appStore.svg&w=384&q=75"
                        />
                        <Image
                            boxSize="14vw"
                            marginRight="8vw"
                            src="https://www.yubo.live/_next/image?url=https%3A%2F%2Fyubo.cdn.prismic.io%2Fyubo%2F270973bc-6438-49a4-af20-c258a10bab3e_googleStore.svg&w=384&q=75"
                        />
                    </Flex>
                </Box>

                <Box width="70%" position="relative" marginTop="10vh">
                    <Image
                        position="absolute"
                        left="22vw"
                        top="17vh"
                        src="https://www.yubo.live/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fyubo%2Fdd4cbf7f-f20b-4978-9ac4-2ba757b0c74d_lit.webp%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C0%2C226%2C138%26w%3D226%26h%3D138&w=640&q=75"
                    />
                    <Image
                        position="absolute"
                        top="30vh"
                        width="22vw"
                        zIndex="3"
                        height="22vh"
                        src="https://www.yubo.live/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fyubo%2Fb4b46af0-0ee6-41c2-8b07-130d03a2764d_join.webp%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C0%2C344%2C181%26w%3D344%26h%3D181&w=750&q=75"
                    />
                    <Image
                        position="absolute"
                        top="60vh"
                        height="8vw"
                        width="30vh"
                        zIndex="3"
                        src="https://www.yubo.live/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fyubo%2Fb96435a1-f648-4467-8272-53f9805964c5_hey.webp%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C0%2C236%2C134%26w%3D217%26h%3D123&w=640&q=75"
                    />
                    <Image
                        boxSize="650px"
                        src="https://www.yubo.live/_next/image?url=https%3A%2F%2Fyubo.cdn.prismic.io%2Fyubo%2Fd4e74f33-4588-4c2d-af34-dda742627f7b_Phone.svg&w=750&q=75"
                    />
                    <Image
                        position="absolute"
                        bottom="75vh"
                        left="34vw"
                        height="15vh"
                        width="15vw"
                        src="https://www.yubo.live/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fyubo%2Ff1eb90f1-91b1-47e4-bd35-8d721ff45df9_let.webp%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C8%2C208%2C109%26w%3D344%26h%3D181&w=640&q=75"
                    />
                    <Image
                        height="27vh"
                        weight="27vw"
                        position="absolute"
                        bottom="50vh"
                        left="30vw"
                        src="https://www.yubo.live/_next/image?url=%2Fassets%2Fimg%2FBo.svg&w=640&q=75"
                    />
                </Box>
            </Flex>

            <Box
                width="100vw"
                height="320vh"
                backgroundImage="https://www.yubo.live/assets/img/black-cloud-homepage.svg"
                // border="1px solid black"
                backgroundSize="cover"
                position="absolute"
                top="210vh"
                display="flex"
                flexWrap="wrap"
                justifyContent="space-around"
            >
                <Box
                    width="35vw"
                    height="55vh"
                    fontSize="8vw"
                    fontWeight="bold"
                    marginTop="40vh"
                    // border="1px solid black"
                    color="#ffe30a"
                    lineHeight="100%"
                >
                    <h1>Anti anti-anti boring.</h1>
                </Box>

                <Box
                    width="25vw"
                    height="55vh"
                    marginTop="40vh"
                    fontSize="2vw"
                    padding="8vh 0"
                    color="white"
                    lineHeight="100%"
                    marginRight="12vw"
                >
                    Yubo is your live social discovery app. Join the fun, chat,
                    play games, and live stream. There’s always a place for you
                    here. Ready to Yubo?
                    <br />
                    <br />
                    <Button
                        padding="1.5rem"
                        borderRadius="30px"
                        color="black"
                        backgroundColor="#ffe30a"
                    >
                        Download Yubo
                    </Button>
                </Box>

                <Image
                    position="absolute"
                    top="95vh"
                    right="50vw"
                    src="https://www.yubo.live/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fyubo%2Fe6b8d108-ce2b-4674-ae41-53e30ff16388_belong.webp%3Fauto%3Dcompress%2Cformat&w=1080&q=75"
                />

                <Box
                    width="30vw"
                    height="50vh"
                    // border="1px solid black"
                    fontSize="2vw"
                    color="white"
                    lineHeight="100%"
                    marginTop="60vh"
                >

                    Yubo instantly connects you with people all over the world.
                    Find your crew based on your interests, jump into a
                    livestream and discover something new, or play a game and
                    show off your skills. All you need to do? Bring your true
                    self!
                    <br />
                    <br />
                    <br />
                    <Button
                        padding="1.5rem"
                        borderRadius="30px"
                        color="black"
                        backgroundColor="#ffe30a"
                    >
                        Get Yubo
                    </Button>
                </Box>
                <Image
                    height="97vh"
                    borderRadius="40px"
                    marginBottom="55vh"
                    src="https://www.yubo.live/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fyubo%2F82f890e9-ec72-4384-a0ba-67e945627f47_210211_Yubo_HSS_04_568--scaled.jpg.jpg%3Fauto%3Dcompress%2Cformat&w=1200&q=75"
                />

                <Box
                    width="50vw"
                    height="30vh"
                    fontWeight="bold"
                    color="#ffe30a"
                    // border="1px solid black"
                    display="flex"
                    position="absolute"
                    top="220vh"
                    right="47vw"
                    fontSize="8vw"
                    lineHeight="100%"
                >
                    Y
                    <Image
                        width="12vh"
                        marginTop="10px"
                        height="12vh"
                        src="https://www.yubo.live/_next/image?url=%2Fassets%2Fimg%2FSticker_Hand_Rock-41.svg&w=256&q=75"
                    />
                    bo on the mind.
                </Box>
                <Button
                    padding="1.5rem"
                    borderRadius="30px"
                    color="black"
                    top="230vh"
                    left="78vw"
                    position="absolute"
                    backgroundColor="#ffe30a"
                >
                    View our Blog
                </Button>

                <Box
                    width="100vw"
                    height="200vh"
                    // border="1px solid black"
                    backgroundImage="https://www.yubo.live/assets/img/purple-cloud.svg"
                    backgroundSize="cover"
                >
                    <Box
                        width="26vw"
                        height="75vh"
                        // border="1px solid black"
                        position="absolute"
                        top="280vh"
                        left="13vw"
                        backgroundImage="https://images.prismic.io/yubo/42e1a41b-e054-4f52-a214-e3ea5e475aa4_Blog_Yubo+Horoscope.png?auto=compress,format"
                        backgroundSize="cover"
                        borderRadius="40px"
                    >
                        <Button
                            marginTop="3vh"
                            marginLeft="2VW"
                            backgroundColor="#ffe30a"
                            boxShadow="0 0 3px gray"
                        >
                            Friendship
                        </Button>
                        <Box
                            width="24vw"
                            height="10vh"
                            marginTop="50vh"
                            marginLeft="2vw"
                            color="white"
                            border="1px solid black"
                            fontSize="3vw"
                            lineHeight="100%"
                            fontWeight="bold"
                        >
                            Yubo Horoscope
                        </Box>
                        <Image src="https://www.yubo.live/_next/image?url=%2Fassets%2Fimg%2Farticle%2FtimeIcon.webp&w=48&q=75" />
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Header;
