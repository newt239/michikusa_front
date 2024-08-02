"use client";

import {
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
  return (
    <Drawer.Root>
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
        <Drawer.Overlay className={styles.overlay} />
        <Drawer.Content className={styles.content}>
          <div className={styles.innerContent}>
            <div className={styles.handle} />
            <div className={styles.main}>
              <Drawer.Title className={styles.title}>
                {station.name}
              </Drawer.Title>
              <VStack>
                {facilityList.map((facility) => (
                  <Card key={facility.name} variant="elevated">
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
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <a
                className={styles.footerLink}
                href="https://github.com/emilkowalski/vaul"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
                <svg className={styles.icon} /* SVG attributes... */>
                  {/* SVG path... */}
                </svg>
              </a>
              <a
                className={styles.footerLink}
                href="https://twitter.com/emilkowalski_"
                rel="noreferrer"
                target="_blank"
              >
                Twitter
                <svg className={styles.icon} /* SVG attributes... */>
                  {/* SVG path... */}
                </svg>
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default HalfModal;
