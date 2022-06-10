import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/credits.interface';

interface Props {
    actor:Cast;
}

export const CastItem = ({actor}:Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={styles.container}>
        {
            actor.profile_path && <Image style={{width: 50, height: 50, borderRadius: 10}} source={{uri}}/>
        }
        
        <View style={styles.actorInfo}>
            <Text style={{fontSize:18, fontWeight: 'bold', color: 'black', opacity: 1}}>{actor.name}</Text>
            <Text style={{fontSize:16, fontWeight: 'bold', color: 'black', opacity: 0.5}}>{actor.character}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 10,
        marginHorizontal: 3,
        paddingRight: 15
    },
    actorInfo: {
        marginTop: 4,
        marginLeft: 10
    }
});
