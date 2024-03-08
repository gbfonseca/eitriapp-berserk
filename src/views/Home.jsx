<Window
  topInset
  bottomInset
  statusBarTextColor="dark"
>
  <View>
    <HeaderComponent />

    <Image
      width="100%"
      cover
      src={
        "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/cfae4787c40f3f83ff92dec065e81cbd.jpg"
      }
    />

    <View paddingHorizontal="small" paddingTop="nano" direction="column">
      <View justifyContent="center" alignItems="center">
        <Text fontSize="big" fontWeight="bold">
          Berserk
        </Text>
        <Logo />
      </View>
      <Text fontSize="small" fontWeight="bold">
        By: Kentaro Miura
      </Text>
      <Text fontSize="big" fontWeight="bold">

      {this.state.messageEvent.data || 'No message'}
      </Text>

    </View>
    <Text wide paddingHorizontal="small" paddingTop="small" fontSize="small">
      O misterioso Guts, o "Espadachim Negro", carrega em sua mão mecânica uma
      enorme espada, e em seu pescoço uma estranha marca que atrai forças
      demoníacas. Em sua busca por vingança contra um antigo inimigo, nem tudo
      sai a seu favor, e ele recebe ajuda de uma fantástica criatura.
    </Text>
    <View paddingHorizontal="small" paddingTop="small" marginBottom="large">
      <Button wide label="Make Request" onPress={this.makeRequest} />
    </View>
    <View paddingHorizontal="small" paddingTop="small" marginBottom="large">
      <Button
        wide
        label="Personagens"
        onPress={() => this.navigateTo("/Characters")}
      />
    </View>
    <View paddingHorizontal="small" paddingTop="small" marginBottom="large">
      <Button
        wide
        label="Abrir Eitri-App"
        onPress={ () => this.openEitriApp()}
      />
    </View>
  </View>
</Window>
