import Eitri from "eitri-bifrost";
import ArrowLeft from '../assets/images/arrow_left.png'
import {View, Text, Image} from 'eitri-luminus'

export default function HeaderComponent(props) {
  const onBackClick = () => {
    Eitri.navigation.back(-1)
  };

  return (
    <View className="bg-primary">
      <View className="h-4" /> {/* topInset equivalent */}
      <View className="flex flex-row items-center justify-start p-2">
        <View className="w-[50px] cursor-pointer" onClick={onBackClick}>
          <Image
            src={ArrowLeft}
            className="w-10 h-10 object-cover"
          />
        </View>
        <Text className="flex-1 text-left text-neutral-900 font-bold text-sm">
          {props.title || 'Meet Eitri!'}
        </Text>
      </View>
    </View>
  );
}
