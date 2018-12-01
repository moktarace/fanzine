const CHARACTERS_URL = 'https://spreadsheets.google.com/feeds/list/1Rpi1jYfVwqv46uRn2ADjjYWTlBsEebdqompXcixsXic/od6/public/values?alt=json';

class UniverseAPI {

    static getAllCharacters() {
        return new Promise((resolve, reject) => {
            fetch(CHARACTERS_URL)
                .then(response => response.json())
                .then(json => {
                    let result = [];
                    json.feed.entry.map(value => {
                        let entry = {};
                        Object.keys(value).forEach(key => {
                            if (!key.includes('gsx$')) {
                                return;
                            }
<<<<<<< HEAD
=======
                            console.log(key);
>>>>>>> 1b7249026db97ae49fbf8201b2db1f221142edab
                            entry[key.replace('gsx$', '')] = value[key].$t;
                        });
                        result.push(entry);
                    });
                    resolve(result);
                });
        });

    }
}

export default UniverseAPI;