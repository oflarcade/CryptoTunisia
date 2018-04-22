import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const imageWidth = Dimensions.get('window').width / 8;
export default EStyleSheet.create({
    container:{
        position: 'absolute',
        left:0,
        right:0,
        top: 0,
        '@media ios': {
            paddingTop: 20,},
        paddingTop: 5,
        
    },
    icon:{
        width:imageWidth/2,
        height: imageWidth/2,

    },
    button:{
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 20,
    }
})