<Window topInset bottomInset backgroundColor="primary-500" statusBarTextColor="white">
    <View>
        <HeaderComponent />
        {/* <Image width="100%" height={200} prompt="A swordmaster with a big sword fighting against skulls" /> */}
        <Image width="100%"  cover src={'https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/cfae4787c40f3f83ff92dec065e81cbd.jpg'}/>

        <View paddingHorizontal='small' paddingTop='nano' direction="column">
            <Text fontSize='big' fontWeight='bold'>Berserk</Text>
            <Text fontSize='small' fontWeight='bold'>By: Kentaro Miura</Text>
        </View>
        <Text wide paddingHorizontal='small' paddingTop='small' fontSize='small'>A modern way to address scalability and development speed issues.</Text>
        <Text wide paddingHorizontal='small' paddingTop='nano' fontSize='small'>The image above is a random image obtained via HTTP.</Text>
        <Text wide paddingHorizontal='small' paddingTop='nano' fontSize='small'>By pressing the button below, you will make an HTTP request, and the result of this request will be displayed in your terminal.</Text>
        <View paddingHorizontal='small' paddingTop='small'>
            <Button wide label="Make Request" onPress={this.makeRequest} />
        </View>
    </View>
</Window>
