import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import useLoginPop from "./LoginPopState";
import { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import axios, { AxiosError } from "axios";
import Cookie from "js-cookie";

const UserModal = () => {
  const { popState, setPopState } = useLoginPop();
  const [formState, setformState] = useState<string>("Login");
  const [err, setErr] = useState<string>("");

  const { register, handleSubmit, reset } = useForm();

  const formRest = () => {
    reset({
      email: "",
      password: "",
      name: "",
    });
  };

  const toggleFormState = () => {
    formRest();
    setErr("");
    formState === "Login" ? setformState("Sign Up") : setformState("Login");
  };

  const close = () => {
    formRest();
    setErr("");
    setformState("Login");
    setPopState();
  };

  const onSubmit = async (data: FieldValues) => {
    const direction = formState === "Login" ? "userLogin" : "userRegister";
    if (formState === "Login") {
      delete data.name;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/api/" + direction,
        data
      );
      // Handle success here, e.g., show a success message
      console.log("Success:", response.data.token);
      setErr("");
      Cookie.set("User-Token", response.data.token, { expires: 7 });
      close();
    } catch (error) {
      const errobject = error as AxiosError;
      setErr(errobject.response?.data as string);
    }
  };

  return (
    <Modal isOpen={popState} onClose={close}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            {formState === "Login" ? "Login" : "Sign Up"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {formState === "Login" ? (
              <FormControl id="login" isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...register("email")} id="email" type="email" />
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                />
              </FormControl>
            ) : (
              <FormControl id="signup" isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...register("name")} id="name" type="text" />
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...register("email")} id="email" type="email" />
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                />
              </FormControl>
            )}
          </ModalBody>
          <ModalFooter justifyContent="space-between">
            <Button colorScheme="blue" mr={3} onClick={toggleFormState}>
              {formState === "Login" ? "Sign Up" : "Login"}
            </Button>
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </ModalFooter>
        </form>
        <Flex margin="5" justifyContent="flex-end">
          <Text color="red">{err}</Text>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default UserModal;
