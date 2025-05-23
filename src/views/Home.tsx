import Eitri from "eitri-bifrost";
import HeaderComponent from "../components/HeaderComponent";
import { View, Text, Image, Page, Button } from "eitri-luminus";
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
      console.log(data);
    } catch (error) {
      console.error("Erro ao consumir dados", error);
    }
  };

  const navigateTo = async (path: string) => {
    await Eitri.navigation.navigate({
      path,
    });
  };

  return (
    <Page title="Berserk" topInset bottomInset statusBarTextColor="white">
      <View className="min-h-screen bg-base-100">
        <HeaderComponent title="Berserk" />

        {/* Hero Section */}
        <View className="relative">
          <Image
            className="w-full h-[400px] object-cover"
            src="https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/cfae4787c40f3f83ff92dec065e81cbd.jpg"
          />
          <View className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-base-300 to-transparent p-4">
            <Text className="text-4xl font-bold mb-2 text-base-content">
              BERSERK
            </Text>
            <Text className="text-lg text-base-content/80">
              By Kentaro Miura
            </Text>
          </View>
        </View>

        {/* Brand of Sacrifice */}
        <View className="flex items-center justify-center py-8">
          <Logo />
        </View>

        {/* Synopsis */}
        <View className="px-4 py-6">
          <Text className="text-xl font-bold mb-4 text-base-content">
            Synopsis
          </Text>
          <Text className="text-base text-base-content/90 leading-relaxed">
            In a world of darkness and despair, Guts, the "Black Swordsman,"
            wields a massive sword with his mechanical arm. Marked by the Brand
            of Sacrifice, he attracts demonic forces while seeking vengeance
            against his former friend Griffith. His journey through a brutal
            medieval world is one of survival, revenge, and the struggle against
            fate itself.
          </Text>
        </View>

        {/* Navigation Buttons */}
        <View className="px-4 py-6 space-y-4">
          <Button
            className="btn btn-primary w-full"
            onClick={() => navigateTo("/Characters/Characters")}
          >
            Characters
          </Button>
          <Button
            className="btn btn-secondary w-full"
            onClick={() => navigateTo("/chapters/ChapterOne")}
          >
            Chapter 1
          </Button>
        </View>

        {/* Version Info */}
        <View className="px-4 fixed bottom-0 right-0">
          <Text className="text-sm text-base-content/60">
            v{(window as any).__eitriAppConf.version}
          </Text>
        </View>
      </View>
    </Page>
  );
}
