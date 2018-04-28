import React from 'react';
import {FacebookAds} from 'expo';
 

const BottomBannerAd =()=>{
    return(
        <FacebookAds.BannerView 
        placementId='965450500299610_967596036751723'
        type='standard'
        onPress={()=>console.log('add clicked')}
        onError={err =>console.log('banner ad err', err)}
        />
    )
}

export default BottomBannerAd;