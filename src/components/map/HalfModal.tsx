"use client";

import { useState } from "react";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
} from "@yamada-ui/react";
import { Drawer } from "vaul";

import styles from "./HalfModal.module.css";

import { Facility } from "#/utils/type";

type Props = {
  name: string;
  facilityList: Facility[];
};

const HalfModal: React.FC<Props> = ({ name, facilityList }) => {
  const [snap, setSnap] = useState<number | string | null>("100px");

  return (
    <Drawer.Root
      activeSnapPoint={snap}
      disablePreventScroll={false}
      open={true}
      setActiveSnapPoint={setSnap}
      snapPoints={["115px", "240px", "480px", 0.9]}
    >
      <Drawer.Trigger />
      <Drawer.Portal>
        <Drawer.Content className={styles.content}>
          <div className={styles.innerContent}>
            <div className={styles.handle} />
            <Box>
              <Drawer.Title asChild>
                <Heading as="h2" pt={0} textAlign="center">
                  {name}
                </Heading>
              </Drawer.Title>
              <Drawer.Description asChild>
                <Heading as="h3" fontSize="md">
                  近くにある施設
                </Heading>
              </Drawer.Description>
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
