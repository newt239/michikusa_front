import { Box, Card, Flex } from "@yamada-ui/react";

type Props = {
  nearest_station?: string;
  railway_name?: string;
  color_code?: string;
  destination_station: string | null;
};

const WayPoints: React.FC<Props> = ({
  nearest_station,
  railway_name,
  color_code,
  destination_station,
}) => {
  if (color_code) return null;
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
      {nearest_station ? (
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
            <Box>{nearest_station}</Box>
          </Flex>
          <Box
            bg="test.500"
            borderRadius="full"
            h="0.125rem"
            margin={4}
            w="100%"
          >
            <Box
              bg="white"
              display="inline-block"
              left="50%"
              pos="relative"
              px={4}
              top="-10px"
              transform="translateX(-50%)"
            >
              {railway_name}
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
            <Box>{destination_station}</Box>
          </Flex>
        </Flex>
      ) : (
        <Flex>
          <Box>{destination_station}</Box>
        </Flex>
      )}
    </Card>
  );
};

export default WayPoints;
