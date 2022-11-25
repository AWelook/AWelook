[script]
#> XiaoTe@ddgksf2013
^https?:\/\/lcen\.xiaote\.net\/api\/graphql url response-body screenSplashAd response-body ddgksf2013
#xiaohongshu
^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/search\/hot_list url response-body items":\[.+\] response-body items":[]
^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/search\/trending url response-body queries":\[.+\] response-body queries":[]

# > jingdonglite
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_advertising url response-body jdLiteAdvertisingVO response-body ddgksf2013
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_SmartPush url response-body pushData response-body ddgksf2013
#shunfeng
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryInfoFlow url script-response-body https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/shunfeng_json.js
