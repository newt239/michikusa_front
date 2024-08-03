import { Box, Card, Flex } from "@yamada-ui/react";

import { ResponseData } from "#/utils/type";

type Props = {
  departure: ResponseData | null;
  destination_station: string | null;
};

const WayPoints: React.FC<Props> = ({ departure, destination_station }) => {
  if (!departure) return null;
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
      {departure ? (
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
            <Box>{departure.nearest_station.name}</Box>
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
              {departure.railway_name}
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
          <Box>みちくさ</Box>
        </Flex>
      )}
    </Card>
  );
};

export default WayPoints;
