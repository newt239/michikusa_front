import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  NativeSelect,
  NativeSelectItem,
  Text,
  VStack,
  Link as YamadaLink,
} from "@yamada-ui/react";

import type { RequestData } from "#/utils/type";

import BackgroundImage from "#/assets/backgroundImage4.svg";
import michikusaIcon from "#/assets/michikusaIcon.svg";

export const Route = createFileRoute("/")({
  component: () => {
    const [requestData, setRequestData] = useState<RequestData | null>(null);
    const [value, setValue] = useState<number>();
    const [errorString, setErrorString] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const memoResult = useMemo(() => Math.random() * 200, []);

    const navigate = useNavigate();

    const items: NativeSelectItem[] = [
      { label: "200円", value: 200 },
      { label: "300円", value: 300 },
      { label: "400円", value: 400 },
      { label: "500円", value: 500 },
      { label: "600円", value: 600 },
      { label: "700円", value: 700 },
      { label: "800円", value: 800 },
      { label: "900円", value: 900 },
      { label: "1000円", value: 1000 },
    ];

    let loop: number[] = [1, 2, 3, 4, 5, 6];

    const sendLocationInfo = (): void => {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition((position) => {
        setRequestData({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          price: value ?? 500,
        });
      });
    };

    useEffect(() => {
      const APIFetch = async ({
        requestData,
      }: {
        requestData: RequestData;
      }): Promise<void> => {
        const data = await fetch(
          import.meta.env.VITE_BACKEND_URL +
            `?latitude=${requestData.latitude}&longitude=${requestData.longitude}&price=${requestData.price}`,
          {
            method: "GET",
          }
        )
          .then((res) => res.json())
          .catch((error) => console.error(error));

        // 仮
        if (data.message === "Internal Server Error (getNearestStation)") {
          setErrorString("近くの駅が見つかりませんでした");
        } else if (data) {
          localStorage.setItem("michikusa_station", JSON.stringify(data));
          await navigate({
            to: "/map",
            search: {
              lat: data.destination_station.latitude,
              lon: data.destination_station.longitude,
              name: data.destination_station.name,
            },
          });
        }
      };
      if (requestData !== null) APIFetch({ requestData });
    }, [requestData]);

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
                  right={index * memoResult + 20}
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
                {errorString && (
                  <Text color="red" fontSize="xl">
                    {errorString}
                  </Text>
                )}
                {errorString === undefined && (
                  <VStack align="center">
                    <Image src={michikusaIcon} w="200px" />
                    <Heading as="h1" fontSize="8xl">
                      みちくさ
                    </Heading>
                    <Text>一本の電車でお散歩。</Text>
                    <Button
                      colorScheme="primary"
                      fontSize="4xl"
                      isLoading={isLoading}
                      loadingIcon={<Icon icon="svg-spinners:180-ring" />}
                      loadingPlacement="end"
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
                    <Link to="/credit">
                      <YamadaLink>利用しているデータについて</YamadaLink>
                    </Link>
                  </VStack>
                )}
              </VStack>
            </Box>
          </Center>
        </Center>
      </>
    );
  },
});
