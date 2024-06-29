import { Link } from 'expo-router'
import { View, Text, StyleSheet, Pressable } from 'react-native'
type ListItem = {
    item: number,
    listname: any
}
export default function ListItem({ item, listname }: ListItem) {
    return (
        <Link href={`/ListItem${item}`} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{item}</Text>
                <Text style={styles.List}>{listname[item - 1]}</Text>
            </Pressable>
        </Link>
    )
}
const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f9dde3',
        flex: 1,
        aspectRatio: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#9b4521',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#9b4521',
        fontSize: 50,
        fontFamily: "BlackOpsOne",

    },
    List: {
        color: '#9b4521',
        fontSize: 20,
        fontFamily: "BlackOpsOne",

    }
});