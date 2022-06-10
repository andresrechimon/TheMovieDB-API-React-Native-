import React from 'react'
import { ActivityIndicator, View, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

  const { isLoading, nowPlaying, popular, topRated, upcoming  } = useMovies();
  const { top } = useSafeAreaInsets();

  if(isLoading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color='red' size={100}/>
      </View>
    )
  }

  return (
    <ScrollView>
    <View style={{marginTop: top + 20}}>

      {/* Main Carousel */}
        <View style={{height: 440}}>
          <Carousel
          data={nowPlaying}
          renderItem={({item}:any) => <MoviePoster movie={item}/>}
          sliderWidth={windowWidth}
          itemWidth={300}
          inactiveSlideOpacity={0.9}
          />
        </View>

      <HorizontalSlider
      title="Populares"
      movie={popular}
      />

      <HorizontalSlider
      title="Aclamadas por la crítica"
      movie={topRated}
      />

      <HorizontalSlider
      title="Próximamente"
      movie={upcoming}
      />
    
    </View>
    </ScrollView>
  )
}
