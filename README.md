
# @react-native-image-slider

## Introduction
`@react-native-image-slider` is a versatile and customizable image slider component for React Native applications. It provides an intuitive interface for displaying a series of images in a horizontal slider with optional pagination dots.

## Features
- Supports both remote and local image sources.
- Customizable dot colors and animation delays.
- Infinite looping option for continuous image display.
- Responsive design suitable for various screen sizes.
- Easy-to-use interface with minimal configuration.

## Installation
You can install `@react-native-image-slider` via npm or yarn:

```bash
npm install @react-native-image-slider
# or
yarn add @react-native-image-slider
```

## Usage
```javascript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-image-slider';

const App = () => {
  return (
    <View style={styles.container}>
      <Slider
        images={[
          'https://example.com/image1.jpg',
          'https://example.com/image2.jpg',
          'https://example.com/image3.jpg',
        ]}
        dotColor="#FF5733"
        inActiveDotColor="#C0C0C0"
        delay={2000}
        infinite={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

## Props
- `images` (optional): An array of image URIs. If not provided, default images will be used.
- `dotColor` (optional): Color of active pagination dot. Default is black.
- `inActiveDotColor` (optional): Color of inactive pagination dot. Default is gray.
- `delay` (optional): Delay in milliseconds for automatic sliding. Default is 1500ms.
- `infinite` (optional): Boolean value to enable infinite looping. Default is false.
- `containerStyle` (optional): Custom styles for the container View.
- `contentStyle` (optional): Custom styles for the image content.

## Keywords
React Native, Image Slider, Carousel, Component, TypeScript, Responsive, Pagination, Infinite Looping, Customizable.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
