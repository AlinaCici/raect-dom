import axios from 'axios';

export const Qs = () => {
  var sStr = window.location.href,
    params = {};
  var pattern = /(\w+)=([^&#]*)*/g;
  var arr = sStr.match(pattern);
  if (arr) {
    for (var i = 0; i < arr.length; i++) {
      var kv = arr[i].split('=');
      params[kv[0]] = kv[1]
    }
  }
  return params;
  console.log(params);
}