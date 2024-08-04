import { createFileRoute, Link } from "@tanstack/react-router";

import { Box, Heading, Text, Link as YamadaLink } from "@yamada-ui/react";

export const Route = createFileRoute("/credit")({
  component: () => {
    return (
      <Box m={4}>
        <Heading as="h2">利用しているデータについて</Heading>
        <Heading as="h3">公共交通オープンデータ</Heading>
        <Text>
          本アプリケーションが利用する公共交通データは、公共交通オープンデータセンターにおいて提供されるものです。
          公共交通事業者により提供されたデータを元にしていますが、必ずしも正確・完全なものとは限りません。本アプリケーションの表示内容について、公共交通事業者への直接の問合せは行わないでください。
          本アプリケーションに関するお問い合わせは、（開発者の連絡先等を書く）
        </Text>
        <Heading as="h4">東京都交通局</Heading>
        <Text>
          東京都交通局・公共交通オープンデータ協議会、「東京都交通局　鉄道関連情報」、クリエイティブ・コモンズ・ライセンス　表示4.0国際（https://creativecommons.org/licenses/by/4.0/deed.ja）
        </Text>
        <Heading as="h3">Yahoo!JAPANによって提供されているAPI</Heading>
        <Text>
          みちくさ by Yahoo! JAPAN （https://developer.yahoo.co.jp/sitemap/）
        </Text>
        <Box mt="xl">
          <Link to="/">
            <YamadaLink>トップページに戻る</YamadaLink>
          </Link>
        </Box>
      </Box>
    );
  },
});
