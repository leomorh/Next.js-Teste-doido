import { Box } from "@chakra-ui/react";

export default function Background(){
  return(
<Box 
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          bgAttachment="fixed" 
          bgImage="src/components/james-lee-YpDkIh137ws-unsplash.jpg"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100vh"
          zIndex="-1"
          ></Box>
  );
}
