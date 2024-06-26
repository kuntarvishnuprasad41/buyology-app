import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import s from '../../../styles/mainStyle';
// import DefaultImage from '../../../assets/temp/adaptive-icon.png';
// import DefaultImage1 from '../../../assets/temp/whatisrefurbished-banner.png';




const Banner = (props) => {
    // const DEFAULT_IMAGE = props.image == "a" ? Image.resolveAssetSource(DefaultImage1).uri : Image.resolveAssetSource(DefaultImage).uri;
    const DEFAULT_IMAGE = props.image == "a" ? "http://dev.sscinitiatives.com:6002/assets/temp/whatisrefurbished-banner.png" : "http://dev.sscinitiatives.com:6002/assets/temp/adaptive-icon.png";
    return (
        <TouchableOpacity style={[{ width: props.width || 'auto', height: props.height || 'auto' }, !props.hero && { padding: 5 }]} className="mb-[26px] ">
            <Image
                source={{ uri: DEFAULT_IMAGE }}
                // source={{ uri: props.image }}
                style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 14 }}
            />
        </TouchableOpacity>

    )
}

export default Banner;