let cheerio = require('cheerio');
const request = require('request')
const fs = require('fs');
const url = ('https://www.cars-data.com/en/abarth-punto-evo-1.4-t-jet-16v-specs/5')


request(url, (error, response, body) => {
    if (!error) {
        const $ = cheerio.load(body)
        let data = [];
        $('.col-7 > dl').each((i, dl) => {
            let head = $(dl).find("h2").html();
            if (head) {
                let body = {};
                $(dl).children('dt').each((dti, dt) => {
                    body[$(dt).html()] = $(dt).next('dd').html();
                })
                data.push({
                    [head]: body
                })
            }
        });
        console.log(data);
    }
})