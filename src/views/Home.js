import Eitri from "eitri-bifrost";

export default class Home {
  async componentDidMount() {
    console.log("This is an Eitri message");
  }

  makeRequest = async () => {
    try {
      const { data } = await Eitri.http.get(
        "https://calindra.tech/eitri/product_list.json"
      );

      // console.log("Data obtained in HTTP call:", data);
      console.log("Data obtained in HTTP call:");
      console.debug("Data obtained in HTTP call:");
      console.info("Data obtained in HTTP call:");
      console.warn("Data obtained in HTTP call:");
    } catch (error) {
      console.error("Erro ao consumir dados", error);
    }
  };
}
