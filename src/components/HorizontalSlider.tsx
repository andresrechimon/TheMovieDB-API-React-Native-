import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { Movie } from '../interfaces/movie.interface';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?:string;
    movie:Movie[];
}

export const HorizontalSlider = ({title, movie}:Props) => {
  return (
    <View style={{height:(title) ? 260 : 220}}>
        {
        title && <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10, color: 'black'}}>{title}</Text>   
        }
        <FlatList
        data={movie}
        renderItem={({item}:any) => <MoviePoster movie={item} width={140} height={200}/>}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showHorizontalScreenIndicator={false}
        />
    </View>
  )
}
