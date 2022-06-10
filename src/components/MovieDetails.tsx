import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { Cast } from '../interfaces/credits.interface';
import { MovieFull } from '../interfaces/movie.interface';
import Icon from 'react-native-vector-icons/Ionicons';
import 'intl'; //npm install intl
import 'intl/locale-data/jsonp/en'; // or any other locale you need
import { CastItem } from './CastItem';


interface Props {
    movieFull:MovieFull;
    cast:Cast[];
}

export const MovieDetails = ({movieFull, cast}:Props) => {
  return (
    <>
    {/* Details */}
        <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star-outline" size={16} color="gray"/>
              <Text> {movieFull.vote_average}</Text>  
              <Text style={{marginLeft: 5}}>- {movieFull.genres.map(g => g.name).join(', ')}</Text>
            </View>
        {/* Story */}
        <Text style={{marginTop:23, fontSize: 18, fontWeight: 'bold'}}>Sinopsis</Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        {/* Budget */}
        {/* Story */}
        <Text style={{marginTop:23, fontSize: 18, fontWeight: 'bold'}}>Presupuesto</Text>
        <Text> { new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format( movieFull.budget)}</Text>
        </View>
    {/* Casting */}
    <View style={{marginHorizontal: 20, marginBottom: 100}}>
        <Text style={{marginTop:23, fontSize: 18, fontWeight: 'bold'}}>Actores</Text>

        <FlatList
        style={{marginTop: 10, height: 70}}
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) =>  <CastItem actor={item}/>}
        horizontal={true}
        showHorizontalIndicator={false}
        />
       
    </View>
    </>
  )
}
