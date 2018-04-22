import {Dimensions} from 'react-native';
const imageWidth = Dimensions.get('window').width / 16;
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container:{
        alignItems: 'center',
    },
    wrapper:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:{
        width: imageWidth,
        height: imageWidth,
        marginRight: 16,
    },
    text:{
        color:'$white',
        fontSize: 14,
        fontWeight: '600',
        paddingVertical: 20,
    }

})