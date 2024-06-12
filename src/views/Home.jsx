import Eitri from "eitri-bifrost";

export default function Home(props) {


  useEffect(() => {
  }, []);

  const makeRequest = async () => {
    try {
      const { data } = await Eitri.http.get(
        "https://calindra.tech/eitri/product_list.json"
      );

      console.log("Data obtained in HTTP call:", data);
    } catch (error) {
      console.error("Erro ao consumir dados", error);
      console.log(123);
    }
  };

  const openEitriApp = async () => {
    console.log("12312312");
    await Eitri.navigation.open({
      slug: "foundry-wedding-list",
      initParams: {},
    });
  };

  const navigateTo = async (path) => {
    await Eitri.navigation.navigate({
      path,
    });
  };

  return (
    <Window
      topInset
      bottomInset
      statusBarTextColor="dark"
      // backgroundImage={require("../assets/images/bg.jpg")}
    >
      <View>
        <HeaderComponent />

        <Image
          width="100%"
          height={320}
          maxWidth={430}
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
         </View>
        <Text
          wide
          paddingHorizontal="small"
          paddingTop="small"
          fontSize="small"
        >
          O misterioso Guts, o "Espadachim Negro", carrega em sua mão mecânica
          uma enorme espada, e em seu pescoço uma estranha marca que atrai
          forças demoníacas. Em sua busca por vingança contra um antigo inimigo,
          nem tudo sai a seu favor, e ele recebe ajuda de uma fantástica
          criatura.
        </Text>
        <View paddingHorizontal="small" paddingTop="small" marginBottom="large">
          <Button wide label="Make Request" onPress={makeRequest} />
        </View>
        <View paddingHorizontal="small" paddingTop="small" marginBottom="large">
          <Button
            wide
            label="Personagens"
            onPress={() => navigateTo("/Characters/Characters")}
          />
        </View>
        <View paddingHorizontal="small" paddingTop="small" marginBottom="large">
          <Button
            wide
            label="Capítulo 1"
            onPress={() => navigateTo("/Chapters/ChapterOne/ChapterOne")}
          />
        </View>
        
        <View paddingHorizontal="small" paddingTop="small" marginBottom="large">
          <Button wide label="Abrir Eitri-App" onPress={() => openEitriApp()} />
        </View>
      </View>
    </Window>
  );
}
s