import React from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  Text,
  FormErrorMessage,
  FormControl,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Select,
  FormLabel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { RiAccountCircleFill } from "react-icons/ri";

const ModalCreateAccount = () => {
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
  return (
    <>
      <ModalContent borderRadius="10" mt="2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            <Flex alignItems="center" colorScheme="purple">
              <RiAccountCircleFill />
              <Text ml={2}>Create account</Text>
              <ModalCloseButton />
            </Flex>
          </ModalHeader>

          <ModalBody padding="5">
            <FormControl
              isInvalid={
                errors.companyName ||
                errors.name ||
                errors.email ||
                errors.password ||
                errors.permission
              }
            >
              <FormErrorMessage>
                * {errors.companyName && errors.companyName.message}
              </FormErrorMessage>
              <Input
                placeholder="Name of your company"
                type="name"
                mb={3}
                {...register("companyName", {
                  required: "required",
                  minLength: {
                    value: 2,
                    message: "Minimum length should be 2",
                  },
                })}
              />

              <Flex direction="column">
                <Text textAlign="left" mb={1}>
                  User data
                </Text>

                <Image
                  alignSelf="center"
                  width="6rem"
                  br="50%"
                  src="https://i.pinimg.com/originals/f2/af/5a/f2af5ac635cbf4e90378eb89847c86ab.png"
                ></Image>

                <Flex justifyContent="space-between">
                  <FormLabel mb={0}>Name</FormLabel>
                  <FormErrorMessage>
                    * {errors.name && errors.name.message}
                  </FormErrorMessage>
                </Flex>
                <Input
                  mb={3}
                  placeholder="Write your name"
                  variant="filled"
                  type="name"
                  {...register("name", {
                    required: "required",
                    minLength: {
                      value: 3,
                      message: "Minimum length should be 3",
                    },
                  })}
                />

                <Flex justifyContent="space-between">
                  <FormLabel mb={0}>Email</FormLabel>
                  <FormErrorMessage>
                    * {errors.email && errors.email.message}
                  </FormErrorMessage>
                </Flex>
                <Input
                  mb={3}
                  placeholder="rodrigovictor81@gmail.com"
                  variant="filled"
                  type="email"
                  {...register("email", {
                    required: "required",
                    minLength: { value: 8, message: "Need @" },
                  })}
                />

                <Flex justifyContent="space-between">
                  <FormLabel mb={0}>Password</FormLabel>
                  <FormErrorMessage>
                    * {errors.password && errors.password.message}
                  </FormErrorMessage>
                </Flex>
                <Input
                  mb={3}
                  placeholder="*********"
                  variant="filled"
                  type="password"
                  {...register("password", {
                    required: "required",
                    minLength: {
                      value: 6,
                      message: "Minimum length should be 6",
                    },
                  })}
                />

                <Flex justifyContent="space-between">
                  <FormLabel mb={0}>Permission</FormLabel>
                  <FormErrorMessage>
                    * {errors.permission && errors.permission.message}
                  </FormErrorMessage>
                </Flex>
                <Select
                  placeholder="Select a option"
                  {...register("permission", {
                    required: "required",
                  })}
                >
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                </Select>
              </Flex>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              type="submit"
              height="2rem"
              width="50%"
              colorScheme="purple"
              isLoading={isSubmitting}
            >
              CREATE
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </>
  );
};

export default ModalCreateAccount;
