import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  Image,
  ImageStyle,
  ViewStyle,
} from "react-native";

const DummyImage = [
  "https://img.freepik.com/free-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg",
  "https://img.freepik.com/free-photo/full-shot-woman-online-fashion-shopping_23-2150460083.jpg",
  "https://img.freepik.com/free-photo/online-fashion-shopping-with-laptop_23-2150400632.jpg",
];
interface ISliderProps {
  images?: string[];
  dotColor?: string | "#000";
  inActiveDotColor?: string | "#999";
  delay?: number | 1500;
  infinite?: boolean | false;
  contentStyle?: ImageStyle;
  containerStyle?: ViewStyle;
}

const Slider = ({
  images,
  dotColor,
  inActiveDotColor,
  delay,
  infinite,
  containerStyle,
  contentStyle,
}: ISliderProps) => {
  const width = Dimensions.get("window").width;
  const height = width * 0.55;
  // Satates
  const [active, setActive] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [Images, setimages] = useState<string[] | []>([]);

  // OnSlider Window Changed
  const onScrollChange = ({ nativeEvent }: { nativeEvent: any }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  // IF loop is on
  if (infinite === true) {
    useEffect(() => {
      const interval = setInterval(() => {
        if (Images && active < Images.length) {
          scrollViewRef.current?.scrollTo({
            x: (active + 1) * width,
            animated: true,
          });
          setActive(active + 1);
        } else {
          scrollViewRef.current?.scrollTo({
            x: 0,
            animated: true,
          });
          setActive(0);
        }
      }, delay);
      return () => clearInterval(interval);
    }, [active, Images.length]);
  }

  // Main UseEffect
  useEffect(() => {
    if (images === undefined) {
      setimages(DummyImage);
    } else {
      setimages(images);
    }
    return () => {};
  }, []);

  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={onScrollChange}
        showsHorizontalScrollIndicator={false}
        style={[{ width, height }, containerStyle ? containerStyle : null]}
        ref={scrollViewRef}
        scrollEventThrottle={16}
      >
        {Images.map((i, index) => (
          <Image
            style={[
              { width: width, height: height, resizeMode: "cover" },
              contentStyle ? contentStyle : null,
            ]}
            key={index}
            source={{ uri: i }}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {Images.map((i: string, index: number) => (
          <Text
            key={index}
            style={
              index === active
                ? { fontSize: 45, marginHorizontal: 5, color: dotColor }
                : { fontSize: 45, marginHorizontal: 5, color: inActiveDotColor }
            }
          >
            •
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: -10,
    alignSelf: "center",
  },
});

export default Slider;
