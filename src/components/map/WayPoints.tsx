import { Box, Card, Flex, Steps } from "@yamada-ui/react";

//React.FC
const WayPoints = () => {
  //colorSchemeの情報もbackendから取得する
  //semantic.tsに記述しておく
  // M17の改行が効かない おそらくglobalでwhite-space: preを指定している??
  // 仮のデータ
  const steps: Steps = [
    {
      title: "東京",
      statusProps: { complete: `M\n17` },
    },
    {
      title: "大手町",
      statusProps: { complete: `M\n18` },
    },
  ];

  return (
    <Card
      bg="white"
      borderRadius="full"
      m={4}
      px={8}
      py={4}
      shadow="xl"
      variant="elevated"
    >
      <Flex alignItems="center">
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex
            alignItems="center"
            bg="test.500"
            borderRadius="full"
            color="white"
            h="3rem"
            justifyContent="center"
            w="3rem"
          >
            <Box>M17</Box>
          </Flex>
          <Box>東京</Box>
        </Flex>
        <Box bg="test.500" borderRadius="full" h="0.125rem" margin={4} w="100%">
          <Box
            bg="white"
            display="inline-block"
            left="50%"
            pos="relative"
            px={4}
            top="-10px"
            transform="translateX(-50%)"
          >
            丸ノ内線
          </Box>
        </Box>
        <Flex alignItems="center" flexDirection="column">
          <Flex
            alignItems="center"
            bg="test.500"
            borderRadius="full"
            color="white"
            h="3rem"
            justifyContent="center"
            w="3rem"
          >
            <Box>M17</Box>
          </Flex>
          <Box>大手町</Box>
        </Flex>
      </Flex>
    </Card>
  );
};

export default WayPoints;
