export const API_KEY = 'AIzaSyBaLMCZAIvjn2nFXpQf_e2KUsXb-fZV41Y';

export const valueConverter = (value) => {
    if (value >=1000000) {
        return Math.floor(value/1000000)+"M";
    }
    else if (value>=1000) {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value
    }
}