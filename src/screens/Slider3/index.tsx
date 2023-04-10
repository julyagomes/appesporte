import React from 'react';
import { FlatList, ImageBackground, View, Text } from 'react-native';
import { IPage} from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider3({ setPageI}: IPage) {
    const slide3 = require("../../assets/slide3.png")
    const slide3Texts = [
        { id: '1', text: 'Óculos'},
        { id: '2', text: 'Toucas'},
        { id: '3', text: 'Maiôs'},
        { id: '4', text: 'Sungas'},
        { id: '5', text: 'Outros'},
    ]
    return (
        <ImageBackground source={slide3} style={styles.container} >
            <View style={styles.panel}>
              <ComponentTitleSlider titleI='NATAÇÃO' />
                <FlatList
                 data={slide3Texts}
                 renderItem={({item})=> 
                    <ComponentListMarker key={item.id} textMarker={item.text} />
                }
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider  onPressI={() => setPageI(1)}  />
                <ComponentButtonSlider  onPressI={() => setPageI(2)}  />
                <ComponentButtonSlider  onPressI={() => setPageI(3)}  />
                <ComponentButtonSlider onPressI={() => setPageI(4)}  />
                <ComponentButtonSlider onPressI={() => setPageI(5)}  />
                <ComponentButtonSlider onPressI={() => setPageI(6)}  />
            </View>
            </ImageBackground>
    );                         
}