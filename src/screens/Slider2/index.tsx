import React from 'react';
import { FlatList, ImageBackground, View, Text } from 'react-native';
import { IPage} from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider, ComponentButtonInterface
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI}: IPage) {
    const slide2 = require("../../assets/slide2.png")
    const slide2Texts = [
        { id: '1', text: 'Chuteiras'},
        { id: '2', text: 'Bolas de futebol'},
        { id: '3', text: 'Camisetas de time'},
        { id: '4', text: 'Meião'},
        { id: '5', text: 'Outros'},
    ]
    return (
        <ImageBackground source={slide2} style={styles.container} >
            <View style={styles.panel}>
              <ComponentTitleSlider titleI='FUTEBOL' />
                <FlatList
                 data={slide2Texts}
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
            </View>
            </ImageBackground>
    );                         
}