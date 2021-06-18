import React from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  Text,
  FormErrorMessage,
  FormControl,
  useMediaQuery,
  useDisclosure,
  Modal,
  ModalOverlay,
  Image,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import ModalCreateAccount from "../ModalCreateAccount/ModalCreateAccount";

const FormLogin = () => {
  const [isBigScreen] = useMediaQuery("(min-width: 930px");
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      height="100vh"
      p={12}
      width={isBigScreen ? "60%" : "100%"}
      direction="column"
      justifyContent={isBigScreen ? "center" : "space-between"}
      alignItems="center"
      textAlign="center"
    >
      <Image
        mb={20}
        src="https://cdn3.iconfinder.com/data/icons/pop-art/130/23-128.png"
      />
      <Heading mb={2}>Let's KABOOM the animes world!</Heading>
      <Text mb={20}>Please, enter your data to proceed</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email || errors.password}>
          <Input
            height="3rem"
            width="100%"
            placeholder="rodrigovictor81@gmail.com"
            variant="filled"
            type="email"
            mb={8}
            {...register("email", {
              required: "This is required",
              minLength: { value: 8, message: "Need @" },
            })}
          />

          <Input
            height="3rem"
            width="100%"
            placeholder="*********"
            variant="filled"
            type="password"
            {...register("password", {
              required: "This is required",
              minLength: { value: 6, message: "Minimum length should be 6" },
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          mt={8}
          type="submit"
          height="4rem"
          width="80%"
          colorScheme="green"
          isLoading={isSubmitting}
        >
          Log in
        </Button>
      </form>

      <Text mt={5} alignItems="center">
        Don't has a account?{" "}
        <Button onClick={onOpen} background="none">
          Create now!
        </Button>
      </Text>
      <Text mt={5}>Developed by Rodrigo Victor</Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalCreateAccount />
      </Modal>
    </Flex>
  );
};

export default FormLogin;
