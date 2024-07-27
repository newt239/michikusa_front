import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  Button,
  Center,
  Container,
  NativeSelect,
  NativeSelectItem,
  Spacer,
  Text,
  VStack,
} from "@yamada-ui/react";

export const Route = createFileRoute("/")({
  component: () => {
    const [value, setValue] = useState<number>();

    const sendLocationInfo = () => {
      console.log("位置情報を取得する");
    };

    const items: NativeSelectItem[] = [
      { label: "100円", value: "100" },
      { label: "200円", value: "200" },
      { label: "300円", value: "300" },
      { label: "400円", value: "400" },
      { label: "500円", value: "500" },
    ];

    return (
      <div>
        <Center bg="background" h="100vh" m="auto" maxW="xl">
          <VStack align={"center"} gap="24" h="auto">
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
          </VStack>
        </Center>
      </div>
    );
  },
});
