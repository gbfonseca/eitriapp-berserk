import Eitri from "eitri-bifrost";

export default class Home {
  BC = new BroadcastChannel("read-cart")
  state = {
    messageEvent: ''
  }

  async componentDidMount() {
    this.BC.onmessage = (messageEvent) => {
      console.log(messageEvent.data)
        this.setState({
          messageEvent: messageEvent.data
        })
    }
    console.log("This is an Eitri message");

  }
  

  makeRequest = async () => {
    try {
      const { data } = await Eitri.http.get(
        "https://calindra.tech/eitri/product_lisxxt.json"
      );
      
      console.log("Data obtained in HTTP call:", data);

    } catch (error) {
      console.error("Erro ao consumir dados", error);
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
