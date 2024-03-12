import Eitri from "eitri-bifrost";
export default function HeaderComponent(props) {
  onBackClick = () => {
    Eitri.close();
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
            src={'assets/images/arrow_left.png'}
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
          {props.title || 'Meet Eitri!'}
        </Text>
      </View>
    </View>
  );
}
