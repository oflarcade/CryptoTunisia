import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';

const INPUT_HEIGHT= 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
    container:{
        backgroundColor: '$white',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11,
    },
    border:{
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor:'$border', 
    },
    input:{
       height: INPUT_HEIGHT,
       flex: 1,
       fontSize:18,
       paddingHorizontal: 8,
       color: '$primaryBlue'
    },
    button:{
            height:INPUT_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$white',
            borderBottomLeftRadius: BORDER_RADIUS,
            borderTopLeftRadius: BORDER_RADIUS,
    },
    buttonText:{
        fontWeight: '600',
        fontSize:  20,
        paddingHorizontal: 16,
        color: '$primaryBlue'
    },
    containerDisabled:{
        backgroundColor: '$lightGrey'
    }
    
})