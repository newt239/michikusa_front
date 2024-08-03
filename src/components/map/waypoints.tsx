import {
  Box,
  Step,
  Stepper,
  Steps,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
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
      title: "東京メトロ丸ノ内線",
      statusProps: { complete: `M` },
    },
    {
      title: "大手町",
      statusProps: { complete: `M\n18` },
    },
  ];

  const { activeStep } = useSteps({
    index: 3,
    count: steps.length,
  });

  return (
    <div>
      <VStack>
        <Stepper colorScheme="test" index={activeStep} size={"lg"}>
          {steps.map(({ title, statusProps }, index) => (
            <Step key={index}>
              <div>
                <StepStatus {...statusProps} />
                <Box>
                  <StepTitle>{title}</StepTitle>
                </Box>
              </div>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </VStack>
    </div>
  );
};

export default WayPoints;
