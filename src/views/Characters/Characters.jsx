import HeaderComponent from "../../components/HeaderComponent";
import CharactersData from '../../assets/data/characters.json'
import Femto from '../../assets/images/Femto.png'
export default function Characters(props) {

  const getImage = async(imageName) => {
    return await import(`../../assets/images/${imageName}`)
  }

  return (
    <Window>
      <HeaderComponent title="Personagens" />
      <View direction="column">
        {CharactersData.map(character => (
          <View marginTop="large" key={character.name} justifyContent="center" alignItems="center" display="flex" direction="column">
            <Image src={character.image} width={240} height={240} />
            <Text fontSize="2xl" fontWeight="bold">{character.name}</Text>
            <Text>{character.description}</Text>
          </View>
        ))}

      </View>
    </Window>
  );
}
