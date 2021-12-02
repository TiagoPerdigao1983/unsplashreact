import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID CBhVuxKhCaX8DnNfpv_ee0hvDHAcu7Pm9TPLg2xw3sk',
  },
});
