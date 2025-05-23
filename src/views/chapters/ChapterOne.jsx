// import Femto from '../../../assets/images/Femto.png'

import HeaderComponent from "../../components/HeaderComponent";
import { Page, Text, View, Image } from "eitri-luminus";

export default function ChapterOne(props) {
  return (
    <Page viewportColor="bg-base-100">
      <HeaderComponent title="Chapter One: The Black Swordsman" />
      <View className="p-4 flex flex-col gap-4">
        <View className="bg-base-200 rounded-lg p-6 shadow-lg">
          <Text className="text-2xl font-bold mb-4 text-primary">The Black Swordsman</Text>
          
          <View className="space-y-4">
            <Text className="text-base-content/90 leading-relaxed">
              In the first chapter of Berserk, we are introduced to the dark and brutal world where our protagonist, Guts, known as the Black Swordsman, hunts down demonic creatures called Apostles. The story begins with Guts saving a young woman named Puck from a group of bandits.
            </Text>
            
            <Text className="text-base-content/90 leading-relaxed">
              As the chapter progresses, we learn that Guts is not just a regular mercenary but someone with a deep hatred for these supernatural beings. He carries a massive sword and has a mechanical arm, hinting at his troubled past.
            </Text>
            
            <Text className="text-base-content/90 leading-relaxed">
              The chapter sets the tone for the entire series, introducing themes of revenge, survival, and the constant struggle between humanity and supernatural forces. Guts' character is established as a lone warrior, driven by his own mysterious motives.
            </Text>
          </View>

          <View className="mt-6 p-4 bg-base-300 rounded-lg">
            <Text className="text-sm text-base-content/80 italic">
              "In this world, is the destiny of mankind controlled by some transcendental entity or law? Is it like the hand of God hovering above? At least it is true that man has no control, even over his own will."
            </Text>
          </View>
        </View>
      </View>
    </Page>
  );
}
