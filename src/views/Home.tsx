import Eitri from "eitri-bifrost";
import HeaderComponent from "../components/HeaderComponent";
import { View, Text, Image, Window, Button, HtmlRenderer } from "eitri-luminus";
import Logo from "../components/Logo";

import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await Eitri.http.get(
        "https://calindra.tech/eitri/product_list.json"
      );
    } catch (error) {
      console.error("Erro ao consumir dados", error);
      console.log(123);
    }
  };

  const navigateTo = async (path: string) => {
    await Eitri.navigation.navigate({
      path,
    });
  };

  return (
    <Window topInset bottomInset statusBarTextColor="black">
      <View>
        <HeaderComponent title="Home" />
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
          <Text fontSize="big" fontWeight="bold">
            v1.2.1 com TS
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
          <Button
            wide
            label="Personagens"
            onPress={() => navigateTo("/Characters/Characters")}
          />
        </View>
      </View>
    </Window>
  );
}
function Fake() {
  throw new Error("Function not implemented.");
}
