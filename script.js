TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 75,
  "vfov": 180,
  "pitch": 0,
  "id": "panorama_45FC9146_4D52_21EE_41BE_213A409D670F",
  "audios": [
   {
    "id": "audio_4107BEEF_4DB2_20BE_41C3_C2C575791BF7",
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_4107BEEF_4DB2_20BE_41C3_C2C575791BF7.mp3",
     "oggUrl": "media/audio_4107BEEF_4DB2_20BE_41C3_C2C575791BF7.ogg"
    },
    "class": "PanoramaAudio",
    "autoplay": true
   }
  ],
  "label": "IMG_2116 2",
  "hfov": 360,
  "class": "Panorama",
  "partial": false,
  "frames": [
   {
    "overlays": [
     {
      "areas": [
       {
        "rollOver": "this.showPopupPanoramaOverlay(this.popup_4195BE95_4DB6_2362_41B2_81701561A865, {'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'pressedIconLineWidth':5,'iconWidth':20,'rollOverBorderSize':0,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'pressedIconWidth':20,'iconColor':'#000000','paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'borderSize':0,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'borderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'iconLineWidth':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666'}, this.ImageResource_41AE2D90_4DB7_E162_4193_DABB9574978E, null, null, null, this.audio_40CA5B42_4DB6_61E6_41BA_2E8154817C24, true)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "pitch": 30.78438653564571,
        "image": {
         "levels": [
          {
           "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_0_HS_1_0.png",
           "height": 346,
           "class": "ImageResourceLevel",
           "width": 252
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 9.942903613305512,
        "yaw": -114.45797101449276
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_41AE9FEC_4DB2_60A2_4194_217C5FAAB078",
      "maps": [
       {
        "hfov": 9.942903613305512,
        "roll": 0,
        "pitch": 30.78438653564571,
        "image": {
         "levels": [
          {
           "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_0_HS_1_1_0_map.gif",
           "height": 173,
           "class": "ImageResourceLevel",
           "width": 126
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -114.45797101449276
       }
      ]
     },
     {
      "popupMaxWidth": "95%",
      "yaw": -114.45797101449276,
      "rotationZ": 0,
      "hideEasing": "cubic_out",
      "pitch": 30.78438653564571,
      "image": {
       "levels": [
        {
         "url": "media/popup_4195BE95_4DB6_2362_41B2_81701561A865_0_3.jpg",
         "height": 384,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_4195BE95_4DB6_2362_41B2_81701561A865_0_2.jpg",
         "height": 768,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ],
       "class": "ImageResource"
      },
      "id": "popup_4195BE95_4DB6_2362_41B2_81701561A865",
      "hideDuration": 1000,
      "hfov": 9.432662397389851,
      "showDuration": 1000,
      "popupMaxHeight": "95%",
      "rotationY": 0,
      "rotationX": 0,
      "showEasing": "cubic_in",
      "class": "PopupPanoramaOverlay"
     },
     {
      "hfov": 45,
      "id": "panorama_45FC9146_4D52_21EE_41BE_213A409D670F_tcap0",
      "angle": 0,
      "rotate": false,
      "image": {
       "levels": [
        {
         "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_tcap0.png",
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850
        }
       ],
       "class": "ImageResource"
      },
      "class": "TripodCapPanoramaOverlay",
      "inertia": false
     },
     {
      "hfov": 45,
      "id": "panorama_45FC9146_4D52_21EE_41BE_213A409D670F_ccap0",
      "angle": 0,
      "rotate": false,
      "image": {
       "levels": [
        {
         "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_tcap0.png",
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850
        }
       ],
       "class": "ImageResource"
      },
      "class": "CeilingCapPanoramaOverlay",
      "inertia": false
     },
     {
      "areas": [
       {
        "rollOver": "this.showPopupPanoramaOverlay(this.popup_41732BCD_4DB1_E0E2_419E_B72FB98FDB83, {'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'pressedIconLineWidth':5,'iconWidth':20,'rollOverBorderSize':0,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'pressedIconWidth':20,'iconColor':'#000000','paddingLeft':5,'pressedIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'borderSize':0,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'borderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'iconLineWidth':5,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666'}, this.ImageResource_404B7607_4DCE_236E_41D2_A350C0AD952F, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "pitch": 1.800468082214613,
        "image": {
         "levels": [
          {
           "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_0_HS_2_0.png",
           "height": 156,
           "class": "ImageResourceLevel",
           "width": 156
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "hfov": 6.173888483256279,
        "yaw": -66.35533259702021
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_43C3FCDF_4DB1_E09E_41C3_6C14EC3FE1FF",
      "maps": [
       {
        "hfov": 6.173888483256279,
        "roll": 0,
        "pitch": 1.800468082214613,
        "image": {
         "levels": [
          {
           "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_0_HS_2_1_0_map.gif",
           "height": 78,
           "class": "ImageResourceLevel",
           "width": 78
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -66.35533259702021
       }
      ]
     },
     {
      "popupMaxWidth": "95%",
      "yaw": -66.35533259702021,
      "rotationZ": 0,
      "hideEasing": "cubic_out",
      "pitch": 1.800468082214613,
      "image": {
       "levels": [
        {
         "url": "media/popup_41732BCD_4DB1_E0E2_419E_B72FB98FDB83_0_3.jpg",
         "height": 384,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_41732BCD_4DB1_E0E2_419E_B72FB98FDB83_0_2.jpg",
         "height": 768,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ],
       "class": "ImageResource"
      },
      "id": "popup_41732BCD_4DB1_E0E2_419E_B72FB98FDB83",
      "hideDuration": 1000,
      "hfov": 6.179461285296564,
      "showDuration": 1000,
      "popupMaxHeight": "95%",
      "rotationY": 0,
      "rotationX": 0,
      "showEasing": "cubic_in",
      "class": "PopupPanoramaOverlay"
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_r_hq.jpeg",
       "height": 2904,
       "class": "ImageResourceLevel",
       "width": 2904
      },
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_r.jpeg",
       "height": 1250,
       "class": "ImageResourceLevel",
       "width": 1250
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_u_hq.jpeg",
       "height": 2904,
       "class": "ImageResourceLevel",
       "width": 2904
      },
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_u.jpeg",
       "height": 1250,
       "class": "ImageResourceLevel",
       "width": 1250
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_t.jpg",
    "left": {
     "levels": [
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_l_hq.jpeg",
       "height": 2904,
       "class": "ImageResourceLevel",
       "width": 2904
      },
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_l.jpeg",
       "height": 1250,
       "class": "ImageResourceLevel",
       "width": 1250
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_d_hq.jpeg",
       "height": 2904,
       "class": "ImageResourceLevel",
       "width": 2904
      },
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_d.jpeg",
       "height": 1250,
       "class": "ImageResourceLevel",
       "width": 1250
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_b_hq.jpeg",
       "height": 2904,
       "class": "ImageResourceLevel",
       "width": 2904
      },
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_b.jpeg",
       "height": 1250,
       "class": "ImageResourceLevel",
       "width": 1250
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "front": {
     "levels": [
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_f_hq.jpeg",
       "height": 2904,
       "class": "ImageResourceLevel",
       "width": 2904
      },
      {
       "url": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_f.jpeg",
       "height": 1250,
       "class": "ImageResourceLevel",
       "width": 1250
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 98,
  "thumbnailUrl": "media/panorama_45FC9146_4D52_21EE_41BE_213A409D670F_t.jpg"
 },
 {
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation"
 },
 {
  "initialSequence": {
   "id": "sequence_409DF428_4DB2_27A2_41D0_2CDFF313FF83",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 8.95
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 8.95
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 8.95
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_409DF428_4DB2_27A2_41D0_2CDFF313FF83",
  "initialPosition": {
   "pitch": 0.0023741556019640803,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "timeToIdle": 15000,
  "class": "PanoramaCamera",
  "id": "panorama_45FC9146_4D52_21EE_41BE_213A409D670F_camera"
 },
 {
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_45FC9146_4D52_21EE_41BE_213A409D670F",
    "camera": "this.panorama_45FC9146_4D52_21EE_41BE_213A409D670F_camera",
    "class": "PanoramaPlayListItem"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 "this.popup_4195BE95_4DB6_2362_41B2_81701561A865",
 {
  "levels": [
   {
    "url": "media/popup_4195BE95_4DB6_2362_41B2_81701561A865_0_0.jpg",
    "height": 2448,
    "class": "ImageResourceLevel",
    "width": 3264
   },
   {
    "url": "media/popup_4195BE95_4DB6_2362_41B2_81701561A865_0_1.jpg",
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_4195BE95_4DB6_2362_41B2_81701561A865_0_2.jpg",
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_4195BE95_4DB6_2362_41B2_81701561A865_0_3.jpg",
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_41AE2D90_4DB7_E162_4193_DABB9574978E"
 },
 "this.popup_41732BCD_4DB1_E0E2_419E_B72FB98FDB83",
 {
  "levels": [
   {
    "url": "media/popup_41732BCD_4DB1_E0E2_419E_B72FB98FDB83_0_0.jpg",
    "height": 2448,
    "class": "ImageResourceLevel",
    "width": 3264
   },
   {
    "url": "media/popup_41732BCD_4DB1_E0E2_419E_B72FB98FDB83_0_1.jpg",
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_41732BCD_4DB1_E0E2_419E_B72FB98FDB83_0_2.jpg",
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_41732BCD_4DB1_E0E2_419E_B72FB98FDB83_0_3.jpg",
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_404B7607_4DCE_236E_41D2_A350C0AD952F"
 },
 "this.audio_4107BEEF_4DB2_20BE_41C3_C2C575791BF7",
 {
  "id": "audio_40CA5B42_4DB6_61E6_41BA_2E8154817C24",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_40CA5B42_4DB6_61E6_41BA_2E8154817C24.mp3",
   "oggUrl": "media/audio_40CA5B42_4DB6_61E6_41BA_2E8154817C24.ogg"
  },
  "class": "MediaAudio",
  "autoplay": true
 }
], "children": [
 {
  "toolTipPaddingTop": 4,
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "width": "100%",
  "paddingLeft": 0,
  "minHeight": 50,
  "toolTipShadowColor": "#333333",
  "toolTipShadowOpacity": 1,
  "paddingRight": 0,
  "playbackBarProgressBorderColor": "#000000",
  "minWidth": 100,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "height": "100%",
  "progressBorderColor": "#000000",
  "progressBorderRadius": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 0,
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBorderSize": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "playbackBarHeight": 10,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadWidth": 6,
  "id": "MainViewer",
  "playbackBarHeadOpacity": 1,
  "progressBarBorderRadius": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBorderColor": "#000000",
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBottom": 0,
  "playbackBarHeadHeight": 15,
  "toolTipFontStyle": "normal",
  "progressRight": 0,
  "progressLeft": 0,
  "borderRadius": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarHeadShadow": true,
  "shadow": false,
  "transitionMode": "blending",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "paddingBottom": 0,
  "toolTipBorderColor": "#767676",
  "progressBarBorderSize": 0,
  "borderSize": 0,
  "toolTipBorderSize": 1,
  "toolTipBorderRadius": 3,
  "toolTipFontFamily": "Arial",
  "progressBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarLeft": 0,
  "toolTipFontSize": 12,
  "paddingTop": 0,
  "class": "ViewerArea",
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontColor": "#606060"
 },
 {
  "id": "veilPopupPanorama",
  "paddingLeft": 0,
  "minHeight": 0,
  "paddingRight": 0,
  "minWidth": 0,
  "borderRadius": 0,
  "left": 0,
  "right": 0,
  "visible": false,
  "backgroundColorRatios": [
   0
  ],
  "shadow": false,
  "paddingBottom": 0,
  "borderSize": 0,
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.55,
  "top": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "bottom": 0,
  "paddingTop": 0,
  "class": "UIComponent",
  "backgroundColor": [
   "#000000"
  ]
 },
 {
  "scaleMode": "custom",
  "id": "zoomImagePopupPanorama",
  "paddingLeft": 0,
  "minHeight": 0,
  "paddingRight": 0,
  "minWidth": 0,
  "borderRadius": 0,
  "left": 0,
  "right": 0,
  "visible": false,
  "backgroundColorRatios": [],
  "shadow": false,
  "paddingBottom": 0,
  "borderSize": 0,
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "top": 0,
  "bottom": 0,
  "paddingTop": 0,
  "class": "ZoomImage",
  "backgroundColor": []
 },
 {
  "iconLineWidth": 5,
  "shadowColor": "#000000",
  "id": "closeButtonPopupPanorama",
  "paddingLeft": 5,
  "textDecoration": "none",
  "fontColor": "#FFFFFF",
  "minHeight": 0,
  "iconColor": "#000000",
  "paddingRight": 5,
  "minWidth": 0,
  "verticalAlign": "middle",
  "borderRadius": 0,
  "layout": "horizontal",
  "iconBeforeLabel": true,
  "mode": "push",
  "borderColor": "#000000",
  "gap": 5,
  "pressedIconColor": "#888888",
  "iconHeight": 20,
  "right": 10,
  "visible": false,
  "backgroundColorRatios": [
   0,
   0.09803921568627451,
   1
  ],
  "fontSize": 12,
  "horizontalAlign": "center",
  "shadow": false,
  "rollOverIconColor": "#666666",
  "cursor": "hand",
  "fontWeight": "normal",
  "iconWidth": 20,
  "paddingBottom": 5,
  "backgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "fontFamily": "Arial",
  "backgroundOpacity": 0.3,
  "fontStyle": "normal",
  "top": 10,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "borderSize": 0,
  "paddingTop": 5,
  "class": "CloseButton",
  "label": "",
  "shadowBlurRadius": 6,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 }
], 
 "overflow": "visible",
 "contentOpaque": false,
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 20,
 "paddingRight": 0,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].pause();   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   var showEndFunction = function() {       var loadedFunction = function(){           if(!self.isCardboardVideMode())               popupPanoramaOverlay.set('visible', false);       };       popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);       popupPanoramaOverlay.set('showDuration', 1);       popupPanoramaOverlay.set('hideDuration', 1);       self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);   };   var hideFunction = function() {       var restoreShowDurationFunction = function(){           popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);           popupPanoramaOverlay.set('visible', false);           popupPanoramaOverlay.set('showDuration', showDuration);           popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);           popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);       };       self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);       var currentWidth = zoomImage.get('imageWidth');       var currentHeight = zoomImage.get('imageHeight');       popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);       popupPanoramaOverlay.set('showDuration', 1);       popupPanoramaOverlay.set('hideDuration', hideDuration);       popupPanoramaOverlay.set('popupMaxWidth', currentWidth);       popupPanoramaOverlay.set('popupMaxHeight', currentHeight);       if(popupPanoramaOverlay.get('visible'))           restoreShowDurationFunction();       else           popupPanoramaOverlay.set('visible', true);   };   if(!imageHD){       imageHD = popupPanoramaOverlay.get('image');   }   if(!toggleImageHD && toggleImage){       toggleImageHD = toggleImage;   }   var zoomImage = this.zoomImagePopupPanorama;   var showDuration = popupPanoramaOverlay.get('showDuration');   var hideDuration = popupPanoramaOverlay.get('hideDuration');   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');   var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && typeof player.resumeCamera !== 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "existsKey": function(key){    return key in window; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var i = 0, count = audios.length; i<count; i++){       audios[i].play();   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = [audio];   }   else if(audios.indexOf(audio) == -1){       audios.push(audio);   }   audio.bind('end', endFunction, this);   audio.play(); },
  "getKey": function(key){    return window[key]; },
  "updatePlayListsUI": function(){    var playLists = this.getByClassName('PlayList');   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   playList.bind('change', changeFunction, this);   this.playGlobalAudio(audio, endCallback); },
  "isCardboardVideMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "registerKey": function(key, value){    window[key] = value; },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       var index = audios.indexOf(audio);       if(index != -1){           audios.splice(index, 1);       }   }   audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var obj in restoreItems) {               obj.item.set('camera', obj.camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var rollOutFunction = function(){       var rollOverFunction = function(){           clearTimeout(timeoutID);           dispose();       };       var timeoutFunction = function(){           setVisibility(false);           dispose();       };       var dispose = function(){           parentComponent.unbind('rollOver', rollOverFunction, this);       };       parentComponent.unbind('rollOut', rollOutFunction, this);       parentComponent.bind('rollOver', rollOverFunction, this);       var timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);   };   var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   parentComponent.bind('rollOut', rollOutFunction, this);   setVisibility(true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       if(!self.isCardboardVideMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       resumeFunction(caller);   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){    delete window[key]; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && typeof player.pauseCamera !== 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; }
 },
 "minWidth": 20,
 "verticalAlign": "top",
 "borderRadius": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "gap": 10,
 "horizontalAlign": "left",
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "shadow": false,
 "paddingBottom": 0,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "borderSize": 0,
 "paddingTop": 0,
 "class": "Player",
 "backgroundPreloadEnabled": true
})