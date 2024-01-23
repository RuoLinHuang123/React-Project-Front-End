import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";

const SubmitItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => {console.log(data);
  axios.post('http://localhost:3000/api/items',data)};

  return (
    <Flex
      maxWidth="1200px"
      mx="auto"
      padding="10px"
      justifyContent="center"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl id="submit-form" isRequired>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          {...register("name")}
          id="name"
          type="text"
          placeholder="e.g. Earth"
        />

        <FormLabel htmlFor="category" mt="4">
          Category
        </FormLabel>
        <Select
          {...register("category")}
          id="category"
          placeholder="Select category"
        >
          <option value="Planet">Planet</option>
          <option value="Dwarf Planet">Dwarf Planet</option>
          <option value="Moon">Moon</option>
        </Select>
        <FormLabel htmlFor="mass" mt="4">
          Mass (Kg)
        </FormLabel>
        <Input
          {...register("mass")}
          id="mass"
          type="number"
          placeholder="e.g. 8.24e24"
        />

        <FormLabel htmlFor="picUrl" mt="4">
          Url of the Picture
        </FormLabel>
        <Input {...register("picUrl")} id="picUrl" type="url" />

        <Flex justifyContent="flex-end">
          <Button mt="6" type="submit">
            Submit
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
};

export default SubmitItem;
