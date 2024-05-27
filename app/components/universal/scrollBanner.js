import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import s from '../../../styles/mainStyle';
// import DefaultImage from '../../../assets/temp/adaptive-icon.png';
// import DefaultImage1 from '../../../assets/temp/whatisrefurbished-banner.png';
import { ScrollView } from 'react-native';




const ScrollBanner = (props) => {
    // const DEFAULT_IMAGE = props.image == "a" ? Image.resolveAssetSource(DefaultImage1).uri : Image.resolveAssetSource(DefaultImage).uri;
    return (
        <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                backgroundColor: props.bgcolor,

            }}>


            {Array.from({ length: 6 }).map((_, index) => <TouchableOpacity style={[{ width: props.width || 'auto', height: props.height || 'auto' }, !props.hero && { padding: 5 }]} key={index}>
                <Image key={index}
                    // source={{ uri: DEFAULT_IMAGE }}
                    // source={{ uri: props.image }}
                    style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 14 }}
                />
            </TouchableOpacity>)}



        </ScrollView>

    )
}

export default ScrollBanner;