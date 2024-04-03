import ProductService from "../service/Products";

export default function Card() {
    const [products, setProducts] = useState()

  useEffect(() => {
    ProductService.getData().then(res => setProducts(res.resultItems))
  }, [])


  return products && (
    <View>
      {products?.map((product) => (
        <View key={product.id}>
          <Text color="primary-900">{product.title}</Text>
        </View>
      ))}
    </View>
  );
}