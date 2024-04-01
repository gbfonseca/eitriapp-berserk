import Eitri from "eitri-bifrost";
import Femto from '../assets/images/Femto.png'
export default class Home {
  state = {
    messageEvent: ''
  }

  async componentDidMount() {
    console.info("This is an Eitri message");
  }

  makeRequest = async () => {
    try {
      const { data } = await Eitri.http.get(
        "https://calindra.tech/eitri/product_list.json"
      );

      console.log("Data obtained in HTTP call:", data);

    } catch (error) {
      console.error("Erro ao consumir dados", error);
      console.log(123)
    }
  }



  openEitriApp = async () => {
    console.log('12312312')
    await Eitri.navigation.open({
      slug: 'foundry-wedding-list',
      initParams: {}
    })
  }

  navigateTo = async (path) => {
    await Eitri.navigation.navigate({
      path
    })
  }
}
