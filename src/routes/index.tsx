import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  Box,
  Button,
  Center,
  Image,
  NativeSelect,
  NativeSelectItem,
  Text,
  VStack,
} from "@yamada-ui/react";

import BackgroundImage from "#/assets/backgroundImage4.svg";

//? backendに送るデータの型 命名は変えたい
type RequestData = {
  latitude: number;
  longitude: number;
  price?: number;
};

export const Route = createFileRoute("/")({
  component: () => {
    const [value, setValue] = useState<number>();

    const items: NativeSelectItem[] = [
      { label: "100円", value: "100" },
      { label: "200円", value: "200" },
      { label: "300円", value: "300" },
      { label: "400円", value: "400" },
      { label: "500円", value: "500" },
    ];

    let requestData: RequestData = {
      latitude: 0,
      longitude: 0,
    };

    let loop: number[] = [1, 2, 3, 4, 5, 6];

    const sendLocationInfo = (): RequestData => {
      navigator.geolocation.getCurrentPosition((position) => {
        requestData.latitude = position.coords.latitude;
        requestData.longitude = position.coords.longitude;
      });

      // その時選択されている金額をリクエストデータに追加
      requestData.price = value;

      console.log(requestData);

      return requestData;
    };

    return (
      <>
        <Center
          bg="background"
          h="100dvh"
          left="0"
          m="auto"
          margin="auto"
          maxW="500px"
          position="fixed"
          right="0"
          w="100dvw"
        >
          <VStack
            bottom="0"
            gap=""
            left="0"
            margin="auto"
            maxW="500px"
            overflow="clip"
            position="fixed"
            right="0"
            w="100dvw"
          >
            {loop.map((index) => {
              return (
                <Image
                  key={index}
                  position="relative"
                  right={index * Math.random() * 100 + 10}
                  src={BackgroundImage}
                  w="1600px"
                />
              );
            })}
          </VStack>
          <Center>
            <Box
              bg="background"
              border="solid"
              padding="30px"
              rounded="xl"
              z="10"
            >
              <VStack align="center" gap="24" h="auto">
                <Text fontSize="8xl">みちくさ</Text>
                <VStack align="center" direction="column">
                  <Button
                    colorScheme="primary"
                    fontSize="4xl"
                    onClick={sendLocationInfo}
                    padding="10px"
                    size="lg"
                    variant="solid"
                  >
                    みちくさを食う
                  </Button>
                  <NativeSelect
                    fontSize="md"
                    items={items}
                    onChange={(e) => setValue(Number(e.target.value))}
                    placeholder="金額をえらぶ"
                    size="lg"
                    value={value}
                    w="150px"
                  />
                </VStack>
              </VStack>
            </Box>
          </Center>
        </Center>
      </>
    );
  },
});
