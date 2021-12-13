import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const GetRanking = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const topUrl = "https://api.jikan.moe/v3/top/anime/1/bypopularity";

    useEffect(() => {
        fetch(topUrl)
            .then((response) => response.json())
            .then((json) => {
                setData(json.top); //Label to htl head
            })
            .catch((error) => alert(error))
            .finally(setLoading(false));
    }, []);

    return (

        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ title }, index) => title}
                    renderItem={({ item }) => (
                        <Card style={styles.item}>
                            <Card style={styles.cardContainer}>
                                <Card.Content>
                                    <Title style={styles.titleAnime}>{item.title}</Title>
                                </Card.Content>
                                <Card.Cover style={styles.img} source={{ uri: item.image_url }} />
                                <Card.Content>
                                    <Title style={styles.labelRanking}>Ranking N° {item.rank}</Title>
                                    <Paragraph style={styles.labelInfo}>Lanzmaiento: {item.start_date}</Paragraph>
                                    <Paragraph style={styles.labelInfo}>Episodios: {item.episodes}</Paragraph>
                                    <Paragraph style={styles.labelInfo}>Tipo: {item.type}</Paragraph>
                                </Card.Content>
                            </Card>
                        </Card>
                    )}
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        //alignContent: 'center',
        //alignItems: 'center',
        borderColor: "#CCC",
        paddingTop: 7,
        paddingBottom: 7,
    },
    cardContainer: {
        //width: '100%',
        //paddingTop: 5,
        //paddingLeft: 1,
        //borderColor: "black",
        //flexWrap: "nowrap",
        backgroundColor: "white",
        borderRadius: 15,
    },
    item: {
        marginVertical: 4,
        marginHorizontal: 8,
    },
    img: {
        borderRadius: 1,
        marginTop: 10,
        width: 344,
        // paddingHorizontal: 10,
        height: 460,
    },
    titleAnime: {
        marginTop: 10,
        margin: 2,
        fontSize: 20,
        color: "black",
    },
    labelInfo: {
        fontSize: 17,
        color: "black",
        //fontWeight: "bold",
    },
    labelRanking: {
        fontSize: 17,
        color: "black",
    },
    buttonSinapsis: {
        color: "#543358",
        marginTop: 20,
        padding: 20,
    }
});

export default GetRanking;