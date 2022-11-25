
[rewrite_local]
https://push.tapbots.com/tweetbot/5/verify_subscription url script-response-body https://github.com/AWelook/AWelook/raw/main/Script/Tweetbot.js

[mitm]

hostname = *.tapbots.com

*******************************/

let obj = JSON.parse($response.body);

obj["expires_at"]= 3476097520,
obj["can_trial"]= true,

$done({body: JSON.stringify(obj)});
