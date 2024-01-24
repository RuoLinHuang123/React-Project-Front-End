import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  List,
  ListItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FieldValues, useForm, useFieldArray } from "react-hook-form";
import axios from "axios";

const SubmitDetailPage = () => {
  const { register, handleSubmit, control } = useForm();

  const { fields, remove, append } = useFieldArray({
    control,
    name: "properties",
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    axios.post("http://localhost:3000/api/itemDetails ", data);
  };

  return (
    <Flex
      maxWidth="1200px"
      mx="auto"
      padding="10px"
      justifyContent="center"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl id="submit-form">
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          {...register("name")}
          id="name"
          type="text"
          placeholder="e.g. Earth"
          isRequired
        />

        <FormLabel htmlFor="picUrl" mt="4">
          Url of the Picture
        </FormLabel>
        <Input
          {...register("detailPicUrl")}
          id="detailPicUrl"
          type="url"
          isRequired
        />

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
            Append
          </Button>
        </Flex>
        <FormLabel htmlFor="message" mt="4">
          Description
        </FormLabel>
        <Textarea
          id="description"
          placeholder="Enter the description"
          {...register("description")}
        />

        <Flex justifyContent="flex-end">
          <Button mt="6" type="submit">
            Submit
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
};
export default SubmitDetailPage;
