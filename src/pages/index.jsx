import { useRouter } from 'next/router';
import MainLayout from "@/layouts/layoutPadrao";
import { Button, Image, Text, Box, Center } from "@chakra-ui/react";
import { ToastContainer } from 'react-toastify';
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const App = () => {

  const router = useRouter();

  const goPage = () => {
    router.push('/public/login');
  }

  return (
    <>
      <MainLayout>
        <Center h="100vh" flexDirection="column" textAlign="center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Text fontSize="3xl" fontWeight="bold" mb="4" color="red">
              Welcome to the Best Fast Food Experience!
            </Text>
            <Image
              src="https://thumbs.dreamstime.com/b/man-likes-fast-food-very-much-sweet-drinks-as-well-drinking-coke-bottle-pleasure-also-young-guy-113658843.jpg"
              alt="guy drinking coke"
              boxSize="auto"
              maxWidth="100%"
            />
            <Button
              onClick={goPage}
              color="black"
              bgColor="red"
              size="lg"
              px="8"
              mt="4"
            >
              Go to Login
            </Button>
          </motion.div>
        </Center>

        <ToastContainer />
      </MainLayout>
    </>
  );
}

export default App;

