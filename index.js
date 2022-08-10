const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.get("/paynow", function (req, res) {
  res.sendFile(__dirname + "/buynow.html");
});


app.post("/paynow", function (req, res) {
  const fname = req.body.firstname;
  const lname = req.body.lastname;
  const mail = req.body.mail;
  const noOf = req.body.noOf;
  const pnumber = req.body.pnumber;
  const amount = req.body.amount
  const data = {
    members: [
      {
        status: "subscribed",
        email_address: mail,
        merge_fields: {
          FNAME: fname,
          LNAME: lname,
        }
      }
    ]
  }
  const jsonData = JSON.stringify(data);
  const option = {
    method: "POST",
    auth: "abdullahi:0ee809efd32ade888ca6153c54c3a942-us14",
  }
  const url = "https://us14.api.mailchimp.com/3.0/lists/9f9bde458f";
  const request = https.request(url, option, function (response) {

    if (response.statusCode === 200) {
      payPaystack(mail, res);
      // res.sendFile(__dirname + "/sucess.html")
    } else {
      res.sendFile(__dirname + "/faliure.html")
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));






    })
  })
  request.write(jsonData)
  request.end();


  function payPaystack(mail, resp) {

    const params = JSON.stringify({
      email: mail,
      amount: 20000 * noOf,
      callback_url: 'http://localhost:3000/sucess'
    })
    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: '/transaction/initialize',
      method: 'POST',
      headers: {
        Authorization: 'Bearer sk_test_42c08e4112d6bfbc79d4a96b1e11f75f02c67c96',
        'Content-Type': 'application/json'
      }
    }

    const request = https.request(options, res => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      });

      res.on('end', () => {

        resp.redirect(JSON.parse(data).data.authorization_url)

      })
    }).on('error', error => {
      console.error(error)
    })

    reques.write(params)
    reques.end()
  }

})


app.get("/contactsucess", function (req, res) {
  res.sendFile(__dirname + "/contactsucess.html")
})

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});
app.get("/service", function (req, res) {
  res.sendFile(__dirname + "/service.html");
});

app.post("/contact", function (req, res) {

  var details = {
    firstname: req.body.FirstName,
    lastname: req.body.LastName,
    email: req.body.EmailAddress,
    message: req.body.Message,
    amount: req.body.amount
  }

  const payDetails = {
    email: details.email,
    amount: details.amount,
    metadata: {
      firstname: details.firstname,
      lastname: details.lastname
    },
    callback_url: 'http//localhost:3000/contactsucess.html',
  }
  const padetais = JSON.stringify(payDetails);

  const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/initialize',
    method: 'POST',
    headers: {
      Authorization: 'Bearer sk_test_42c08e4112d6bfbc79d4a96b1e11f75f02c67c96',
      'Content-Type': 'application/json'
    }
  }
  const apiRequest = https.request(options, function (response) {
    let data = ''

    response.on('data', (chunk) => {
      data += chunk
    });

    response.on('end', () => {
      var result = JSON.parse(data);
      var redirectUrl = result.data.authorization_url;
      res.redirect(redirectUrl)
    });

  });

  apiRequest.write(padetais)
  apiRequest.end()

  // console.log(details);
  // console.log(payDetails);

  //     const data = {
  //         members: [
  //             {
  //                 status: "subscribed",
  //                 email_address: email,
  //                 merge_fields: {
  //                     FNAME: firstname,
  //                     LNAME: lastname,
  //                     MESSAGE: message,
  //                 },
  //             }
  //         ]
  //     }

  //     const jsonData = JSON.stringify(data);


  //     const options = {
  //         method: "POST",
  //         auth: "abdullahi:0ee809efd32ade888ca6153c54c3a942-us14"
  //     }
  //     const url = "https://us14.api.mailchimp.com/3.0/lists/9f9bde458f";


  //     const request = https.request(url, options, function (response) {
  //         if (response.statusCode === 200) {
  //             res.sendFile(__dirname + "/contactsucess.html")
  //         } else {
  //             res.sendFile(__dirname + "/contactfaliure.html")
  //         }

  //         response.on("data", function (data) {
  //             console.log(JSON.parse(data));
  //         });
  //     });
  //     request.write(jsonData);
  //     request.end();
});
// app.post("/contactsucess", function (req, res) {
//     res.redirect("/contact");
// })
// app.post("/contactfaliure", function (req, res) {
//     res.redirect("/contact");
// })









// app.get("/request", function (req, res) {
//     res.sendFile(__dirname + "/request.html");
//     // res.send("welcome");
// });
// app.post("/request", function (req, res) {
//     const firstname = req.body.firstname;
//     const lastname = req.body.lastname;
//     const email = req.body.mail;
//     const phone = req.body.phone;
//     const bust = req.body.bust;
//     const Waist = req.body.Waist;
//     const hips = req.body.hips;
//     const length = req.body.neckwaist;
//     const info = req.body.info;
//     const inseam = req.body.inseam;
//     const rise = req.body.rise;
//     const chest = req.body.chest;

//     const data = {
//         members: [
//             {
//                 status: "subscribed",
//                 email_address: email,
//                 merge_fields: {
//                     FNAME: firstname,
//                     LNAME: lastname,
//                     PHONE: phone,
//                     WAIST: Waist,
//                     BUST: bust,
//                     HIPS: hips,
//                     INFO: info,
//                     INSEAM: inseam,
//                     CHEST: chest,
//                     RISE: rise,
//                 }
//             }
//         ]
//     }

//     const jsonData = JSON.stringify(data);


//     const options = {
//         method: "POST",
//         auth: "abdullahi:0ee809efd32ade888ca6153c54c3a942-us14"
//     }
//     const url = "https://us14.api.mailchimp.com/3.0/lists/9f9bde458f";


//     const request = https.request(url, options, function (response) {
//         if (response.statusCode === 200) {
//             res.sendFile(__dirname + "/success.html")
//         } else {
//             res.sendFile(__dirname + "/faliure.html")
//         }

//         response.on("data", function (data) {
//             console.log(JSON.parse(data));
//         });
//     });
//     request.write(jsonData);
//     request.end();

// });

// app.get("/request", function (req, res) {
//     res.sendFile(__dirname + "request.html")
// })

app.post("/success", function (req, res) {
  res.redirect("/");
})
app.post("/faliure", function (req, res) {
  res.redirect("/request");
})

app.listen(3000, function () {
  console.log("running");
})

// api key
// 0ee809efd32ade888ca6153c54c3a942-us14

// security id
//  9f9bde458f