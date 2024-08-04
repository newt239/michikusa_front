"use client";

import { useState } from "react";

import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
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
                  {name || "近くにある施設"}
                </Heading>
              </Drawer.Title>
              <Drawer.Description asChild>
                <Heading as="h3" fontSize="md">
                  {name ? "近くにある施設" : "10件"}
                </Heading>
              </Drawer.Description>
              <VStack my="4">
                {facilityList.map((facility) => (
                  <LinkBox
                    border="1px solid"
                    borderColor="inherit"
                    boxShadow="md"
                    key={facility.name}
                    p="md"
                    rounded="md"
                  >
                    <Heading size="md">
                      <LinkOverlay href={facility.map_url} isExternal>
                        {facility.name}
                      </LinkOverlay>
                    </Heading>
                    <Text>
                      {facility.genre} / {facility.distance}m
                    </Text>
                  </LinkBox>
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
