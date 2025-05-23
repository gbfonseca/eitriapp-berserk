import { View, Text, Image, Card, Page } from 'eitri-luminus';
import CharactersData from '../../assets/data/characters.json';
import HeaderComponent from '../../components/HeaderComponent';

export default function Characters(props) {
  return (
    <Page viewportColor="bg-base-300" pullToAction={{
      onRefresh: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      },
    }}>
      <HeaderComponent title="Characters" />
      <View className="p-4 pt-8 min-h-screen bg-base-100">
        
        <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CharactersData.map(character => (
            <Card key={character.name} className="bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                className="w-full h-80 object-fill rounded-t-xl"
                src={character.image}
                alt={character.name}
              />
              <Card.Body>
                <Card.Title className="text-2xl font-bold text-primary mb-2">
                  {character.name}
                </Card.Title>
                
                <View className="mb-4 flex flex-col">
                  <Text className="text-sm font-semibold text-base-content/70">
                    Status: <Text className="text-success">{character.status}</Text>
                  </Text>
                  <Text className="text-sm font-semibold text-base-content/70">
                    Weapon: <Text className="text-accent">{character.weapon}</Text>
                  </Text>
                </View>

                <Text className="text-base-content/80 mb-4">
                  {character.description}
                </Text>

                <View className="flex flex-wrap gap-2">
                  {character.abilities.map((ability, index) => (
                    <View key={index} className="badge badge-primary badge-outline">
                      {ability}
                    </View>
                  ))}
                </View>
              </Card.Body>
            </Card>
          ))}
        </View>
      </View>
    </Page>
  );
}
