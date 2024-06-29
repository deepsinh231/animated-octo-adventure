import React, { useCallback, useRef, useMemo, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Text, Button, StatusBar, StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import MapData from "@assets/List5/MapData.json"
import CustomMarker from '@/components/List5/CustomMarker';
import ApartmentListItem from '@/components/List5/ApartmentListItem';
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

type marker = (typeof MapData)
export default function MapLoca() {
    const snapPoints = useMemo(() => [50, "25%", "50%", "100%"], []);
    const [selectedApartment, setSelectedApartment] = useState<marker | null>(null)
    const [mapRegion, setMapRegion] = useState({
        latitude: 23.2418,
        longitude: 72.6293,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="default"

            />
            <Stack.Screen options={{ headerShown: false }} />
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={mapRegion}
            >
                {MapData.map((marker) => (
                    <CustomMarker
                        key={marker.id}
                        apartment={marker}
                        onPress={() => setSelectedApartment(marker)}
                    />
                ))}
            </MapView>
            {/* Display selected Apartment Data Show */}
            {selectedApartment &&
                <ApartmentListItem
                    onpressColes={() => setSelectedApartment(null)}
                    MapData={selectedApartment}
                    containerStyle={styles.selectedContainer} />
            }
            <BottomSheet index={0} snapPoints={snapPoints}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.listTitle}>Over {MapData.length} places</Text>
                    <BottomSheetFlatList
                        data={MapData}
                        contentContainerStyle={{ gap: 10, padding: 10 }}
                        renderItem={({ item }) => <ApartmentListItem MapData={item} />}
                    />
                    <Text style={styles.listTitle}>Over places</Text>
                </View>
            </BottomSheet>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    listTitle: {
        textAlign: 'center',
        fontFamily: 'PlaywriteES-Regular',
        fontSize: 16,
        marginVertical: 5,
        marginBottom: 20,
    },
    selectedContainer: {
        position: 'absolute',
        bottom: 100,
        right: 10,
        left: 10,
    },
});