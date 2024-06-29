import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';
import React from 'react';
import MapData from '@assets/List5/MapData.json';
import { AntDesign } from '@expo/vector-icons';
type ApartmentListItem = {
  MapData: {
    id: number;
    latitude: number;
    longitude: number;
    price: number;
    title: string;
    numberOfStars: number;
    rating: number;
    image: string;
  };
  onpressColes: any;
  containerStyle?: ViewStyle;
}
export default function ApartmentListItem({ MapData, onpressColes, containerStyle }: ApartmentListItem) {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: MapData.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        {onpressColes &&
          <AntDesign name="close" onPress={onpressColes} size={20} color="black" style={{ marginLeft: "auto" }} />
        }
        <Text style={styles.title}>{MapData.title}</Text>
        <Text style={styles.description}>
          Stay at this apartment for an affordable price
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>$ {MapData.price} night</Text>
          <Text style={styles.price}>
            ★ {MapData.rating} ({MapData.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.55,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    width: 150,
    aspectRatio: 0.8,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontFamily: 'PlaywriteES-Regular',
    marginBottom: 10,
    fontSize: 16,
  },
  description: {
    color: 'gray',
  },
  price: {
    fontFamily: 'PlaywriteES-Regular',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
});
