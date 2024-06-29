import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

const CustomMarker = ({ apartment, onPress }:
    {
        apartment: { latitude: number, longitude: number, price: number, rating: number },
        onPress: () => void
    }) => {
    return (
        <Marker
            coordinate={{ latitude: apartment.latitude, longitude: apartment.longitude }}
            onPress={onPress}
        >
            <View
                style={{
                    backgroundColor: 'white',
                    padding: 5,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 20,
                }}
            >
                <Text style={{ fontFamily: "BlackOpsOne", textAlign: "center" }}>$ {apartment.price}</Text>
                <Text style={{ fontFamily: "BlackOpsOne" }}> ★ {apartment.rating}</Text>
            </View>
        </Marker>
    )
}

export default CustomMarker