import Eitri from "eitri-bifrost";
import ArrowLeft from '../assets/images/arrow_left.png'
export default function HeaderComponent() {
  onBackClick = () => {
    Eitri.close();
  };

  return (
    <View backgroundColor="gradient-01">
      <View topInset />
      <View
        direction="row"
        justifyContent="start"
        alignItems="center"
        padding="nano"
      >
        <Touchable width={50} onPress={onBackClick}>
          <Image
            src={ArrowLeft}
            cover
            width={40}
          />
        </Touchable>
        <Text
          wide
          textAlign="left"
          color="neutral-900"
          fontWeight="bold"
          fontSize="small"
        >
          Meet Eitri!
        </Text>
      </View>
    </View>
  );
}
