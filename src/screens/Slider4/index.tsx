import React from 'react';
import { FlatList, ImageBackground, View, Text } from 'react-native';
import { IPage} from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider, ComponentButtonInterface
} from '../../components';
import { styles } from './styles';
export function Slider4({ setPageI}: IPage) {
    const slide4 = require("../../assets/slide4.png")
    const slide4Texts = [
        { id: '1', text: 'Capacetes'},
        { id: '2', text: 'Sapatilhas'},
        { id: '3', text: 'Óculos'},
        { id: '4', text: 'Roupas Térmicas'},
        { id: '5', text: 'Outros'},
    ]
    return (
        <ImageBackground source={slide4} style={styles.container} >
            <View style={styles.panel}>
              <ComponentTitleSlider titleI='CICLISMO' />
                <FlatList
                 data={slide4Texts}
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