import {
  Box,
  Card,
  Flex,
  Step,
  Stepper,
  Steps,
  StepSeparator,
  StepStatus,
  StepTitle,
  VStack,
} from "@yamada-ui/react";

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
      <VStack>
        <Stepper colorScheme="test" index={2} size={"lg"}>
          {steps.map(({ title, statusProps }, index) => (
            <Step key={index}>
              <Flex alignItems="center" flexDirection="column">
                <StepStatus {...statusProps} />
                <StepTitle fontSize="sm">{title}</StepTitle>
              </Flex>
              <StepSeparator>
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
              </StepSeparator>
            </Step>
          ))}
        </Stepper>
      </VStack>
    </Card>
  );
};

export default WayPoints;
