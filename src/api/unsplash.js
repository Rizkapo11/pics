import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 
        'Client-ID _Rvdxb0h93gal-NXn18tD_EUz3UDZMhnNV051l-zHsg'

    }
});