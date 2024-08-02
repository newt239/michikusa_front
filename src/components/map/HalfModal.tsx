"use client";

import { Button } from "@yamada-ui/react";
import { Drawer } from "vaul";

import styles from "./HalfModal.module.css";

export function HalfModal() {
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
              <Drawer.Title className={styles.title}>施設一覧</Drawer.Title>
              <p className={styles.paragraph}>
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className={styles.paragraph}>
                It uses{" "}
                <a
                  className={styles.link}
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  rel="noreferrer"
                  target="_blank"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  className={styles.link}
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  rel="noreferrer"
                  target="_blank"
                >
                  this tweet.
                </a>
              </p>
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
}
