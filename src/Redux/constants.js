export const SAMPLE_ACTION = "SAMPLE_ACTION"
export const SET_JWT = "SET_JWT"
export const SET_MONGO_ID =  "SET_MONGO_ID"
export const SET_USERNAME = "SET_USERNAME"

export const API_URL = "http://localhost:5000"

export function _imageEncode (arrayBuffer) {
  let u8 = new Uint8Array(arrayBuffer)
  let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer),function(p,c){return p+String.fromCharCode(c)},''))
  let mimetype="image/jpeg"
  return "data:"+mimetype+";base64,"+b64encoded
}
