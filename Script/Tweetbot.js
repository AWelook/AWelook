let obj = JSON.parse($response.body);

obj["expires_at"]= 3476097520,
obj["can_trial"]= true,

$done({body: JSON.stringify(obj)});
