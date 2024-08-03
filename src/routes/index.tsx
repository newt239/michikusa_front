import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  Button,
  Center,
  Container,
  Image,
  NativeSelect,
  NativeSelectItem,
  Spacer,
  Text,
  VStack,
} from "@yamada-ui/react";

import BackgroundImage from "#/assets/backgroundImage.svg";
import Waypoint from "#/components/map/waypoints";

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
          <Image
            bottom="0"
            left="0"
            margin="auto"
            maxW="500px"
            position="fixed"
            right="0"
            src={BackgroundImage}
            w="100dvw"
          />
          <Center>
            <VStack align="center" gap="24" h="auto">
              <Text fontSize="8xl">みちくさ</Text>
              <Spacer />
              <Container w="sx">
                <Button
                  colorScheme="primary"
                  onClick={sendLocationInfo}
                  variant="solid"
                >
                  位置情報を取得
                </Button>
                <NativeSelect
                  items={items}
                  onChange={(e) => setValue(Number(e.target.value))}
                  placeholder="金額設定"
                  value={value}
                />
              </Container>

              {/* 仮表示 */}
              <Container w="xl">
                <Waypoint />
              </Container>
            </VStack>
          </Center>
        </Center>
      </>
    );
  },
});
