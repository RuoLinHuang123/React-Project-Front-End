import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Text,
  List,
  ListItem,
  Textarea,
} from "@chakra-ui/react";
import { FieldValues, useForm, useFieldArray } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useState } from "react";

const SubmitItemPage = () => {
  const { register, handleSubmit, control } = useForm();
  const [err, setErr] = useState<string>("");

  const { fields, remove, append } = useFieldArray({
    control,
    name: "properties",
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/itemSubmission",
        data
      );
      // Handle success here, e.g., show a success message
      console.log("Success:", response.data);
    } catch (error) {
      const errobject = error as AxiosError;
      setErr(errobject.response?.data as string);
    }
  };

  return (
    <Flex
      maxWidth="1200px"
      mx="auto"
      padding="10px"
      justifyContent="center"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      flexDirection="column"
    >
      <FormControl id="submit-form-top" isRequired>
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
          isRequired
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
          isRequired
        />
      </FormControl>

      <FormLabel htmlFor="Properties" mt="4">
        Properties
      </FormLabel>
      <List>
        {fields.map((item, index) => (
          <ListItem key={item.id}>
            <Flex gap="15">
              <Text mt="2">Name</Text>
              <Input
                mb="5"
                {...register(`properties.${index}.name`)}
                isRequired
              />
              <Text mt="2">Value</Text>
              <Input
                mb="5"
                {...register(`properties.${index}.value`)}
                isRequired
              />
              <Text mt="2">Unit</Text>
              <Input
                mb="5"
                {...register(`properties.${index}.unit`)}
                placeholder="Optional"
                maxWidth="200"
              />
              <Button minW="60px" type="button" onClick={() => remove(index)}>
                Delete
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
      <Flex justifyContent="right">
        <Button
          onClick={() => {
            append({ name: "", value: "" });
          }}
        >
          Add
        </Button>
      </Flex>
      <FormControl id="submit-form-bottom" isRequired>
        <FormLabel htmlFor="picUrl" mt="4">
          Url for Card Picture
        </FormLabel>
        <Input {...register("picUrl")} id="picUrl" type="url" />

        <FormLabel htmlFor="picUrl" mt="4">
          Url for Page Picture
        </FormLabel>
        <Input
          {...register("detailPicUrl")}
          id="picUrl"
          type="url"
        />

        <FormLabel htmlFor="message" mt="4">
          Description
        </FormLabel>
        <Textarea
          id="description"
          placeholder="Enter the description"
          {...register("description")}
        />

        <Flex mt="6" justifyContent="flex-end">
          <Button type="submit">Submit</Button>
        </Flex>
        <Flex mt="2" justifyContent="flex-end">
          <Text color="red">{err}</Text>
        </Flex>
      </FormControl>
    </Flex>
  );
};

export default SubmitItemPage;
