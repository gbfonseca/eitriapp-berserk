import Eitri from "eitri-bifrost";
import ArrowLeft from '../assets/images/arrow_left.png'
export default function HeaderComponent(props) {
  onBackClick = () => {
    Eitri.navigation.back()
  };

  return (
    <View backgroundColor="gradient-02">
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
            height={40}
          />
        </Touchable>
        <Text
          wide
          textAlign="left"
          color="neutral-900"
          fontWeight="bold"
          fontSize="small"
        >
          {props.title || 'Meet Eitri!'}
        </Text>
      </View>
    </View>
  );
}
