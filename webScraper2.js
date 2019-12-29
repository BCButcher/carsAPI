let cheerio = require('cheerio');
const request = require('request')
const fs = require('fs');


request('https://www.cars-data.com/en/abarth-punto-evo-1.4-t-jet-16v-specs/5', function(error, response, html) {
    if (!error) {
        const $ = cheerio.load(html)


        /* 	<dl class="row box">
       						 <h2>GENERAL AND DRIVE</h2>
     						<dt class="col-6">price:</dt><dd class="col-6">&#x20AC; 24.545</dd><dt class="col-6 grey">car body:</dt><dd class="col-6">3-doors, hatchback</dd><dt class="col-6">first year of production:</dt><dd class="col-6">2010</dd><dt class="col-6 grey">engine type:</dt><dd class="col-6">fuel engine</dd><dt class="col-6">total maximum torque:</dt><dd class="col-6">250 Nm</dd>
			</dl>

                  <a href="https://www.cars-data.com/en/abarth-punto-evo-1.4-t-jet-16v-specs/5/tech" title="View All" class="viewphotosbutton">view all specs (13)</a>
​
			<dl class="row box">
       						 <h2>FUEL ENGINE</h2>
                 <dt class="col-6">numbe
                 */
        $('.col-7 > dl').each(function(i, dl) {
            var children = $(dl).children().get();
            console.log(children.map(c => $(c).text()).join(' | '))

            // var credits = parseFloat($(children[3]).text().replace(',', '.'); // We need to replace comma with a dot since parseFloats only supports dots by design

            // var row = {
            //     "course" : $(children[1]).text().trim(),
            //     "grade" : null,
            //     "credits" : credits,
            //     "date" : $(children[4]).text()
            // };

            // // Push course to JSON object
            // console.log("Push course to object.");
            // console.log("------------------------------------------\n");
            // data.credited_courses.push(row);
            // data.credited_courses_credits += parseFloat(credits);
        });
    }
})