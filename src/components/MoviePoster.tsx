import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movie.interface';

interface Props {
    movie:Movie;
    height?:number;
    width?:number;
}

export const MoviePoster = ({movie, height = 420, width = 300}:Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('DetailScreen' as never, movie as never)}
    activeOpacity={0.8}
    style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7
    }}>
    <View style={styles.imageContainer}>
        <Image
        style={styles.image}
        source={{uri:uri}}
        />
    </View>   
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 10
    }
});
