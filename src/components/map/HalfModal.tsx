"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
} from "@yamada-ui/react";
import { Drawer } from "vaul";

import styles from "./HalfModal.module.css";

import { Facility, Station } from "#/utils/type";

type Props = {
  station: Station;
  facilityList: Facility[];
};

const HalfModal: React.FC<Props> = ({ station, facilityList }) => {
  const [snap, setSnap] = useState<number | string | null>("100px");

  return (
    <Drawer.Root
      activeSnapPoint={snap}
      open={true}
      setActiveSnapPoint={setSnap}
      snapPoints={["100px", "220px", "450px", 0.9]}
    >
      <Drawer.Trigger asChild>
        <Button
          bottom="6"
          colorScheme="primary"
          pos="fixed"
          right="6"
          zIndex={1000}
        >
          施設を見る
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content className={styles.content}>
          <div className={styles.innerContent}>
            <div className={styles.handle} />
            <Box>
              <Heading as="h2" pt={0} textAlign="center">
                {station.name}
              </Heading>
              <VStack my="4">
                {facilityList.map((facility) => (
                  <Card key={facility.name} variant="outline">
                    <CardHeader>
                      <Heading size="md">{facility.name}</Heading>
                    </CardHeader>

                    <CardBody>
                      <Text>
                        {facility.genre} / {facility.distance}m
                      </Text>
                    </CardBody>
                  </Card>
                ))}
              </VStack>
            </Box>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default HalfModal;
