export const LOGO = 'https://www.freepnglogos.com/uploads/netflix-logo-0.png';

export const USER_AVATAR = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png';

export const Netflix_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/90f00445-6bf9-4c3d-a153-66f3e17902bd/DE-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7ec88160-f36a-4a31-9c05-498eda41620d_medium.jpg"


export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB,
    }
  };

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500';

export const SUPPORTED_LANGUAGES = [{identifier: 'en', name: 'English'}, {identifier: 'german', name: 'German'}, {identifier: 'spanish', name: 'Spanish'}, {identifier: 'french', name: 'French'}, {identifier: 'italian', name: 'Italian'}, {identifier: 'japanese', name: 'Japanese'}, {identifier: 'portuguese', name: 'Portuguese'}, {identifier: 'russian', name: 'Russian'}, {identifier: 'chinese', name: 'Chinese'}];

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;