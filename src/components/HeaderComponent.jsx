<View>
    <View topInset />
    <View direction='row' justifyContent='start' alignItems='center' padding='nano' minHeight={60}>
        <Touchable width={50} onPress={this.onBackClick}>
            <Image src={require('../assets/images/arrow_left.png')} cover width={40} />
        </Touchable>
        <Text wide textAlign='left' color='neutral-900' fontWeight='bold' fontSize='small'>Meet Eitri!</Text>
    </View>
</View>
