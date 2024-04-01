import HeaderComponent from "../../components/HeaderComponent";
import CharactersData from '../../assets/data/characters.json'
export default function Characters(props) {
  return (
    <Window>
      <HeaderComponent title="Personagens" />
      <View direction="column">
        <Image src={require('../../assets/images/Femto.png')} width={120} />

        {/* <View>

        <Image src={Femto} width={120} />
        <Text>Griffth (Femto)</Text>

        </View>
        <Text>Guts</Text>
        <Text>Puck</Text>
        <Text>Caska</Text>
        <Text>Judeau</Text>
        <Text>Pippin</Text> */}

        {CharactersData.map(character => (
          <View marginTop="large" key={character.name}>
            <Text fontSize="2xl" fontWeight="bold">{character.name}</Text>
            <Text>{character.description}</Text>
          </View>
        ))}

      </View>
    </Window>
  );
}
