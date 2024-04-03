export default class ProductService {
    static async getData() {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const response = await fetch(
            "https://calindra.tech/eitri/product_list.json"
        );
        const data = await response.json();
        return data;
    }
}
