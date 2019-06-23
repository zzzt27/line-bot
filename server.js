const line = require('@line/bot-sdk');
const express = require('express');
const axios = require('axios');
const nHentaiAPI = require('nhentai-api-js');
const Sagiri = require('sagiri');
const handler = new Sagiri('8bf67ded064e913ee0ed5f7c8686d3706e11718f');
const Jikan = require('jikan-node');
const mal = new Jikan();
let Parser = require('rss-parser');
let parser = new Parser();
var rssParser = require("rss-parser")
var cheerio = require("cheerio")
const fs = require('fs');
const request = require("request")
//const express = require('express')
//const app = express()
//const querystring = require('querystring');


const config = {
 channelAccessToken: "yDzNhuZlArefPrKIUzlU/OcLh9er9umrcLOASkla75oJ/k61M5/yYUdma6F3ByO2FB7H+be5/3UQvTJWgozpaJAviXVXPoL6DfrGzWQSoDbmQHwe5KaszW0t1n14qHMjH+697kz4lgZuyKnM0GOPQAdB04t89/1O/w1cDnyilFU=",
 channelSecret: "1937034014ebacd40daeff3a19c8b5cd",
};

// create LINE SDK client
const client = new line.Client(config);
const app = express();
let api = new nHentaiAPI();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
 Promise
  .all(req.body.events.map(handleEvent))
  .then((result) => res.json(result))
  .catch((e) => {
   console.log(e);
  });

});

const replyText = (token, texts) => {
 texts = Array.isArray(texts) ? texts : [texts];
 return client.replyMessage(
  token,
  texts.map((text) => ({
   type: 'text',
   text
  }))
 );
};

function handleEvent(event, source) {
 var userid = "U32aaca0f91fe241d87221fbd4c39510e"
 var msg = event.message.text
 var grup = "C5727b219ca840dbae9c22ca214b549b6"
 //console.log(event)
//var cmd = msg.startsWith()
 if (event.message.text == "random") {
  axios.get('https://script.google.com/a/student.sbccd.edu/macros/s/AKfycbyfuJzwskIu_7nCEbQA7n3XljQMsKEpfKD_5E_F/exec')
 };
  

 // 
 // pixiv
 //
  
  
  if (event.message.text == "!d") {
   axios.get('https://script.google.com/a/student.sbccd.edu/macros/s/AKfycbzT2hzFklELPk-ip6fYXV5xLwQgl7-49OOWqKpFIw/exec?url=day&id='+event.source.userId);
  
 } else if (event.message.text == "!d_male") {
   axios.get('https://script.google.com/a/student.sbccd.edu/macros/s/AKfycbzT2hzFklELPk-ip6fYXV5xLwQgl7-49OOWqKpFIw/exec?url=day_male&id='+event.source.userId);
 }

//
 /*if (event.message.text == "!test") {
  if (event.source.groupId === grup) {
   const echo = {
    "type": "text",
    "text": event.source.groupId
   };
   client.replyMessage(event.replyToken, echo);
  } else {
   const echo = {
    "type": "text",
    "text": "YARE YARE"
   };
   client.replyMessage(event.replyToken, echo);
  }
 }*/

 if (event.message.text == "!day") {
  if (event.source.groupId === grup) {
   const echo = {
    "type": "text",
    "text": "Sent\ncek CHAT\n\nNOTE: Jangan lupa ADD BOTnya, biar chat masuk"
   };
   client.replyMessage(event.replyToken, echo);
   axios.get('https://script.google.com/macros/s/AKfycbw8KhVVBhDGXz3MX0iKk724Hq-2PeI4GJKMufp4eVbo2z0y5pfJ/exec?url=day&id=' + event.source.userId);
  } else {
   const echo = {
    "type": "text",
    "text": "yare yare\n\nJOIN GROUP OSIS DULU BUJANK"
   };
   return client.replyMessage(event.replyToken, echo);
  }
 } else if (event.message.text == "!day_r18") {
  if (event.source.groupId === grup) {
    const echo = {
    "type": "text",
    "text": "Sent\ncek CHAT\n\nNOTE: Jangan lupa ADD BOTnya, biar chat masuk"
   };
   client.replyMessage(event.replyToken, echo);
   axios.get('https://script.google.com/macros/s/AKfycbw8KhVVBhDGXz3MX0iKk724Hq-2PeI4GJKMufp4eVbo2z0y5pfJ/exec?url=day_r18&id=' + event.source.userId);
  } else {
   const echo = {
    "type": "text",
    "text": "yare yare\n\nJOIN GROUP OSIS DULU BUJANK"
   };
   return client.replyMessage(event.replyToken, echo);
  }
 } else if (event.message.text == "!day_male") {
  if (event.source.groupId === grup) {
    const echo = {
    "type": "text",
    "text": "Sent\ncek CHAT\n\nNOTE: Jangan lupa ADD BOTnya, biar chat masuk"
   };
   client.replyMessage(event.replyToken, echo);
   axios.get('https://script.google.com/macros/s/AKfycbw8KhVVBhDGXz3MX0iKk724Hq-2PeI4GJKMufp4eVbo2z0y5pfJ/exec?url=day_male&id=' + event.source.userId);
  } else {
   const echo = {
    "type": "text",
    "text": "yare yare\n\nJOIN GROUP OSIS DULU BUJANK"
   };
   return client.replyMessage(event.replyToken, echo);
  }
 } else if (event.message.text == "!day_male_r18") {
  if (event.source.groupId === grup) {
    const echo = {
    "type": "text",
    "text": "Sent\ncek CHAT\n\nNOTE: Jangan lupa ADD BOTnya, biar chat masuk"
   };
   client.replyMessage(event.replyToken, echo);
   axios.get('https://script.google.com/macros/s/AKfycbw8KhVVBhDGXz3MX0iKk724Hq-2PeI4GJKMufp4eVbo2z0y5pfJ/exec?url=day_male_r18&id=' + event.source.userId);
  } else {
   const echo = {
    "type": "text",
    "text": "yare yare\n\nJOIN GROUP OSIS DULU BUJANK"
   };
   return client.replyMessage(event.replyToken, echo);
  }
 } else if (event.message.text == "!pixiv") {
  if (event.source.groupId === grup) {
   const echo = {
    "type": "text",
    //"text": event.source.userId
    "text": "PIXIV COMMAND\n\n➡ !day = ranking daily\n➡ !day_r18 = ranking daily 18+\n➡ !day_male = ranking daily (male member)\n➡ !day_male_r18 = ranking daily 18+ (male member)\n\n\nNOTE : HARUS ADD BOT !!!"
   }
   return client.replyMessage(event.replyToken, echo);
  } else {
   const echo = {
    "type": "text",
    "text": "yare yare\n\nJOIN GROUP OSIS DULU BUJANK"
   };
   return client.replyMessage(event.replyToken, echo);
  }
 }

 //  
 // KONACHAN//
 //

 if (event.message.text == "k!random") {
  axios.get('https://konachan.com/post.json?limit=1&tags=+order%3Ascore+rating%3Aquestionabless+order%3Arandom').then(function(response){
   var obj = response.data[0];
    var rating = ''
    if (obj.rating == "q") {
      rating = 'ecchi'
    }else{
      rating = 'safe'
    }
    
        var echo = [{
      "type":"text",
      "text": "Tags = "+obj.tags+"\n\nRating: "+rating+"\n\nSauce: https://konachan.com/post/show/"+obj.id
    },
		{
			"type": "image",
			"originalContentUrl": obj.file_url,
			"previewImageUrl": obj.preview_url
			
		}]
  return client.replyMessage(event.replyToken, echo);
    
 })}
                                                                                                                    

 if (msg.startsWith("k!tag ")) {
  var tag1 = msg.replace(/k!tag /, '');
  axios.get('https://script.google.com/macros/s/AKfycbxl7IIB0-qhyyWTf3cgAjUp9a9F-lg1Mp2uLiqrBSrFdPPsbS0/exec?tag=' + tag1);
 };

 if (msg.startsWith("k!q ")) {
 if (event.source.groupId === grup || (event.source.userId === userid && event.source.type === 'user')) {
  var tag = msg.replace(/k!q /, '');
  axios.get('https://konachan.com/post.json?limit=1&tags='+tag+'+order%3Ascore+rating%3Aquestionable+order%3Arandom').then(function(response) {
       var obj = response.data[0];
        var echo = [{
      "type":"text",
      "text": "tags = "+obj.tags+"\n\nsauce: https://konachan.com/post/show/"+obj.id
    },
		{
			"type": "image",
			"originalContentUrl": obj.file_url,
			"previewImageUrl": obj.preview_url
			
		}]
  return client.replyMessage(event.replyToken, echo);
 })}
 else {
   const echo = {
    "type": "text",
    "text": "yare yare\n\nJOIN GROUP OSIS DULU BUJANK"
   };
   return client.replyMessage(event.replyToken, echo);
  }};
  
 if (msg.startsWith("k!s ")) {
  if (event.source.groupId === grup) {
  var tag = msg.replace(/k!s /, '');
  axios.get('https://konachan.com/post.json?limit=1&tags='+tag+'+order%3Ascore+rating%3Asafe+order%3Arandom').then(function(response) {
       var obj = response.data[0];
        var echo = [{
      "type":"text",
      "text": "tags = "+obj.tags+"\n\nsauce: https://konachan.com/post/show/"+obj.id+"\n"+obj.created_at
    },
		{
			"type": "image",
			"originalContentUrl": obj.file_url,
			"previewImageUrl": obj.preview_url
			
		}]
  return client.replyMessage(event.replyToken, echo);
 })}
 else {
   const echo = {
    "type": "text",
    "text": "yare yare\n\nJOIN GROUP OSIS DULU BUJANK"
   };
   return client.replyMessage(event.replyToken, echo);
  }};

 if (msg.startsWith("k!10q ")) {
  if (event.source.groupId === grup) {
    var tag = msg.replace(/k!10q /, '');
    axios.get('https://konachan.com/post.json?limit=10&tags='+tag+'+order%3Ascore+rating%3Aquestionable+order%3Arandom')
     .then(function(response) {
      var result = [];
      for (var i = 0; i < response.data.length; i++) {
       var obj = response.data[i];
       var json_file = {
        "imageUrl": obj.preview_url,
        "action": {
         "type": "uri",
         "label": "SOURCE HERE!",
         "uri": obj.file_url
        }
       }
       result.push(json_file)
      }
      var jason = {
        "type": "template",
        "altText": "konachan",
        "template": {
         "type": "image_carousel",
         "columns": result
        }
       }
      return client.replyMessage(event.replyToken, jason);
     })
   }else{
     const echo = {
      "type": "text",
      "text": "yare yare\n\nJOIN GROUP OSIS DULU BUJANK"
     }
     return client.replyMessage(event.replyToken, echo);
   }
 }

 //
 // MEME //
 //

 if (event.message.text == "lul" || event.message.text == "lel" || event.message.text == "lol" || event.message.text == "LOL" || event.message.text == "LUL") {
  var lul = "http://68.media.tumblr.com/tumblr_m8rcyggh7V1qet7n6.png"
  const echo = {
   "type": "image",
   "originalContentUrl": "https://68.media.tumblr.com/tumblr_m8rcyggh7V1qet7n6.png",
   "previewImageUrl": "https://68.media.tumblr.com/tumblr_m8rcyggh7V1qet7n6.png"
  };
  return client.replyMessage(event.replyToken, echo);
 }
 /*if (event.message.text == "gasm") {
  var gasm = ['https://cdn.betterttv.net/emote/5bae640b9809cc1f5117c8a5/3x', 'https://cdn.betterttv.net/emote/57a337706cd5eba31ece1280/3x', 'https://cdn.betterttv.net/emote/560873d198006a2b754108de/3x', 'https://cdn.betterttv.net/emote/5c271181431ef47de2257eac/3x']
  var r_gasm = gasm[Math.floor(Math.random() * gasm.length + 1)];
  const echo = {
   "type": "image",
   "originalContentUrl": r_gasm,
   "previewImageUrl": r_gasm
  };
  return client.replyMessage(event.replyToken, echo);
 }*/
 if (event.message.text == "mista") {
  const echo = {
   "type": "image",
   "originalContentUrl": "https://cdn.discordapp.com/attachments/444108156570828803/583555222962700295/Untitled-2.png",
   "previewImageUrl": "https://cdn.discordapp.com/attachments/444108156570828803/583555222962700295/Untitled-2.png"
  };
  return client.replyMessage(event.replyToken, echo);
 }
  
  
  if (event.message.text == "habib") {
  const echo = {
   "type": "image",
   "originalContentUrl": "https://i.imgur.com/Q0IPgdO.png",
   "previewImageUrl": "https://i.imgur.com/Q0IPgdO.png"
  };
  return client.replyMessage(event.replyToken, echo);
  }
  
  
  if ((event.message.text == "reee")|| (msg == "ree") || (msg=="reeee")  ) {
  const echo = {
   "type": "image",
   "originalContentUrl": "https://mitadmissions.org/wp-content/uploads/2019/03/kingcrimson-400x324.png",
   "previewImageUrl": "https://mitadmissions.org/wp-content/uploads/2019/03/kingcrimson-400x324.png"
  };
  return client.replyMessage(event.replyToken, echo);
  }
  
  
  
  if (event.message.text == "koichi") {
  const echo = {
   "type": "image",
   "originalContentUrl": "https://i.imgur.com/O1wppxR.png",
   "previewImageUrl": "https://i.imgur.com/O1wppxR.png"
  };
  return client.replyMessage(event.replyToken, echo);
  }
  
  
  if ((event.message.text == "dio") || (msg == "DIO") || (msg == "Dio") ) {
  const echo = {
   "type": "image",
   "originalContentUrl": "https://i.imgur.com/ypOWQIH.png",
   "previewImageUrl": "https://i.imgur.com/ypOWQIH.png"
  };
  return client.replyMessage(event.replyToken, echo);
  }
  
  
  if (event.message.text == "milf") {
  const echo = {
   "type": "image",
   "originalContentUrl": "https://i.imgur.com/3wLCQQR.png",
   "previewImageUrl": "https://i.imgur.com/3wLCQQR.png"
  };
  return client.replyMessage(event.replyToken, echo);
  }
  
  

 if (event.message.text == "test") {
  if (event.source.type === 'room') {
   client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'ini room',
   })
  } else if (event.source.type === 'group') {
   client.replyMessage(client.pushMessage(event.source.userId, {
    type: 'text',
    text: event.source.userId,
   }))
  } else {
   client.replyMessage(event.replyToken, {
    type: 'text',
    text: '1-on-1 chat!',
   });
  }
 }
  
  if (msg == "F" || msg == 'f' ||msg == '=f' )
    {
      client.getGroupMemberProfile(event.source.groupId,event.source.userId)
       .then((profile) => {
      //client.getProfile(source.userId).then(profile=> {    
      //console.log(profile.displayName)
      const echo =
            {
        
        "type":"text",
        "text": profile.displayName+' has paid their respect'
              //`Status message: ${profile.statusMessage}`,
}
           return client.replyMessage(event.replyToken, echo);

        })}
  
  
  

 // Help 
  
 if (event.message.text == "img error") {
  const echo = [{
   "type": "text",
   "text": "Q: image ga muncul??\nA: solusi pake VPN atau DNS resolve\nsaran pake list yg di bawah\n\nadguard : http://bit.ly/2XbrfKm\n1.1.1.1 : http://bit.ly/30NUTYi\nintra : http://bit.ly/2WAYJVi"
  }];
  return client.replyMessage(event.replyToken, echo);
 }

 if (event.message.text == "FAQ") {
  const echo = [{
   "type": "text",
   "text": "FAQ GROUP\n\n\nQ:kok image ga muncul?\nA:coba pake VPN atau DNS resolve\n\nQ: beberapa image ga muncul di PC\nA: image source dari gdrive ga muncul kalo di PC (karna direct url image ga punya extension) kalo di HP muncul\n\nQ: kok command bot ga bisa?\nA: bot case sensitive (huruf besar kecil harus sama)\nex: Konachan (salah) konachan (bener)\n\nQ: pake comman KR kok bot balesnya 'not found'\nA: not found brarti imagenya ga ketemu atau tag salah\nNOTE : pake command tag (tag yg mau dicari)\ntanpa buka tutup kurung\n\nQ: command 'random' kok lama\nA: yup emng lama.\n\nQ: pake VPN DATA AMAN GA? NANTI DI CURI\nA: aman karna dev/publisher bisa di percaya.\n\nNOTE: DUDE,  YOU'RE NOBODY.\nlagian kalo takut ga usah pake xD\n\nQ: VPN yg enk apa ya?\nA: kalo menurut gua sendiri coba pake adguard, alternatifnya bisa 1.1.1.1 atau intra\n\nQ: adguard, intra & 1.1.1.1 aman?\nA: aman asal download dari official link (playstore/web resmi)\n\nQ: kenapa adguard?\nA: adguard bisa ngilangin iklan + dns resolve (buat unblock situs)"
  }];
  return client.replyMessage(event.replyToken, echo);
 }
  
 if (event.message.text == "help") {
  const echo = {
   "type": "text",
   "text": "LIST COMMAND BOT\n\n\n➡ k!tag (tag yg dicari) = nyari tag 'tanpa buka tutup kurung'\n\n➡ k!10q (tag yg dicari) = random 5 image berdsarkan TAG\n\n➡ k!q (tag yg dicari) = nyari img dari konachan ranting ecchi berdasarkan TAG 'tanpa buka tutup kurung'\n\n➡ k!s (tag yg dicari) = nyari img dari konachan ranting SAFE berdasarkan TAG 'tanpa buka tutup kurung'\n\n➡ konachan = random image dari konachan\n\n➡ random = nyari img random sauce GDRIVE (agak lama tapi xD)\n\n➡ FAQ = list Frequently Asked Question atau gampangnya hal yg sering ditanyain\n\n➡ img error =how to fix img yg ga muncul\n\n➡ !pixiv = info command pixiv\n\n➡ !nhentai = info command nhentai\n\n➡ mista = misataaaaaaaaaaaaaa!!!!"
  };
  return client.replyMessage(event.replyToken, echo);
 }

 if (event.message.text == "sensitif") {
  const echo = {
   "type": "text",
   "text": "command bot case-sensitive\n\nCONTOH : random ✔ | Random ✘ || konachan ✔ | Konachan ✘"
  };
  return client.replyMessage(event.replyToken, echo);
 }
  
 if (event.message.text == "buriq") {
  const echo = {
   "type": "text",
   "text": "klik imgnya AUTO HD"
  };
  return client.replyMessage(event.replyToken, echo);
 }

  
 //nhentai
 if (msg.includes("n!s")) {
  if (event.source.groupId === grup || (event.source.userId === userid && event.source.type === 'user')) {
  var key = msg.replace(/n!s /, '');
  //var key = n_id.replace(/\s/gm, '');
  api.search(key).then(info => {
   var result = []
   for (var i = 0; i < info.results.length; i++) {
    var title = info.results[i].title
    var bhsa = info.results[i].language
    var thumb = info.results[i].thumbnail.s
    var stripHere = 57;
    var fix = info.results[i].title
    var shortText = fix.substring(0, stripHere) + (fix.length > stripHere ? '...' : '');
    var json = {
     "thumbnailImageUrl": thumb,
     "text": shortText,
     "actions": [{
       "type": "message",
      "label": "read me",
      "text": "n!read " + info.results[i].id
     },{
      "type": "message",
      "label": "detail",
      "text": "n!id " + info.results[i].id
     }]
    }
    result.push(json)
   }
   var undef;
   for (var i = 0; i < result.length; i++) {
    if (result[i] === undef) {
     result.splice(i, 1);
     i--;
    }
   }
   var chunk_size = 10;
   var groups = result.map(function(e, i) {
    return i % chunk_size === 0 ? result.slice(i, i + chunk_size) : null;
   }).filter(function(e) {
    return e;
   });
   for (var j = 0; j < groups.length; j++) {
    const echo = {
     "type": "template",
     "altText": "this is a carousel template",
     "template": {
      "type": "carousel",
      "actions": [],
      "columns": groups[j]
     }
    }
    setTimeout(function() {
      client.replyMessage(client.pushMessage(event.source.groupId, echo));
    }, 3000 * j);
   }
  })
 }else{
     const echo = {
      "type": "text",
      "text": "yare yare\n\nJOIN GROUP OSIS DULU BUJANK"
     }
     return client.replyMessage(event.replyToken, echo);
   }
 } 
   
  if (msg.includes("n!p")) {
  if (event.source.groupId === grup || (event.source.userId === userid && event.source.type === 'user')) {
  var key = msg.replace(/n!p /, '');
  //var key = n_id.replace(/\s/gm, '');
  api.search(key, "popular").then(info => {
   var result = []
   for (var i = 0; i < info.results.length; i++) {
    var title = info.results[i].title
    var bhsa = info.results[i].language
    var thumb = info.results[i].thumbnail.s
    var stripHere = 57;
    var fix = info.results[i].title
    var shortText = fix.substring(0, stripHere) + (fix.length > stripHere ? '...' : '');
    var json = {
     "thumbnailImageUrl": thumb,
     "text": shortText,
     "actions": [{
       "type": "message",
      "label": "read me",
      "text": "n!read " + info.results[i].id
     },{
      "type": "message",
      "label": "detail",
      "text": "n!id " + info.results[i].id
     }]
    }
    result.push(json)
   }
   var undef;
   for (var i = 0; i < result.length; i++) {
    if (result[i] === undef) {
     result.splice(i, 1);
     i--;
    }
   }
   var chunk_size = 10;
   var groups = result.map(function(e, i) {
    return i % chunk_size === 0 ? result.slice(i, i + chunk_size) : null;
   }).filter(function(e) {
    return e;
   });
   for (var j = 0; j < groups.length; j++) {
    const echo = {
     "type": "template",
     "altText": "this is a carousel template",
     "template": {
      "type": "carousel",
      "actions": [],
      "columns": groups[j]
     }
    }
    setTimeout(function() {
      client.replyMessage(client.pushMessage(event.source.groupId, echo));
    }, 3000 * j);
   }
  })
}else{
     const echo = {
      "type": "text",
      "text": "yare yare\n\nJOIN GROUP OSIS DULU BUJANK"
     }
     return client.replyMessage(event.replyToken, echo);
   }
  }

 //================

 if (msg.includes("n!id")) {
  var n_id = msg.replace(/n!id/, '');
  var n_id1 = n_id.replace(/\s/gm, '');
  api.g(n_id1).then(gallery => {
   var tag = ""
   for (var i = 0; i < gallery.tags.length; i++) {
    tag = tag + (gallery.tags[i].name) + ", "
   }
   var tags = tag.replace(/,\s*$/, "");
   const echo = [{
    "type": "text",
    "text": "Tittle : " + gallery.title.english + "\n\nTags : " + tags + "\n\nPages : " + gallery.num_pages + "\n\nLink : https://nhentai.net/g/" + n_id1
   }, {
    "type": "image",
    "originalContentUrl": gallery.getCover(),
    "previewImageUrl": gallery.getCover()
   }]
   return client.replyMessage(event.replyToken, echo);
  })
 }

 //==================

 if (msg.includes("n!read")) {
  var read1 = msg.replace(/n!read/, '');
  var read = read1.replace(/\s/gm, '');
   const echo = {
    "type": "text",
    "text": "Sent\ncek CHAT\n\nNOTE: Jangan lupa ADD BOTnya, biar chat masuk"
   };
   client.replyMessage(event.replyToken, echo);
  api.g(read).then(gallery => {
   var page = gallery.getPages()
   var thumb = gallery.getPagesThumbnail()
   var result = []
   for (var i = 0; i < page.length; i++) {
    var json = {
     "imageUrl": thumb[i],
     "action": {
      "type": "uri",
      "label": "full img",
      "uri": page[i]
     }
    }
    result.push(json)
   }

   var chunk_size = 10;
   var groups = result.map(function(e, i) {
    return i % chunk_size === 0 ? result.slice(i, i + chunk_size) : null;
   }).filter(function(e) {
    return e;
   });

   for (var j = 0; j < groups.length; j++) {
    const echo = {
     "type": "template",
     "altText": "this is a image carousel template",
     "template": {
      "type": "image_carousel",
      "columns": groups[j]
     }
    }
    setTimeout(function() {
     client.replyMessage(client.pushMessage(event.source.userId, echo))
    }, 5000 * j);
   }
  })
 }

 if (event.message.text == "nHentai") {
  const echo = {
   "type": "text",
   "text": 'COMMAND BOT nHentai\n\n\n➡ n!s "tag/judul" = search doujin (sort by date)\n➡ n!p "tag/judul" = search doujin (sort by populer)\n➡ n!id "id ajaib = info detail doujin"\n➡ n!read "id ajaib" = baca doujin\n\n\nNOTE: detail/read doujin bisa diklik dari command n!s/p'
  };
  return client.replyMessage(event.replyToken, echo);
 }

 // MAL
 if (msg.includes("mal_id")) {
  var n_id = msg.replace(/mal_id/, '');
  var value = n_id.replace(/\s/gm, '');
  mal.findAnime(value).then(info => {
    var genre = ""
    for (var i = 0; i < info.genres.length; i++) {
     genre = genre + (info.genres[i].name) + ", "
    }
    var genres = genre.replace(/,\s*$/, "");
    const echo = [{
     "type": "text",
     "text": "Title : " + info.title + "\n\nType : " + info.type + "\n\nSource : " + info.source + "\n\nEpisodes : " + info.episodes + "\n\nStatus : " + info.status + "\n\nAired : " + info.aired.string + "\n\nRating : " + info.rating + "\n\nScore : " + info.score + "\n\nSynopsis : " + info.synopsis + "\n\nStudio : " + info.studios[0].name + "\n\nGenre : " + genres + "\n\n\nSource : " + info.url
    }, {
     "type": "image",
     "originalContentUrl": info.image_url,
     "previewImageUrl": info.image_url
    }]
    return client.replyMessage(event.replyToken, echo);
   })
 }

 //==================================================

 if (msg.startsWith("MAL ")) {
  var value = msg.replace(/MAL /gm, '');
  //var value = n_id.replace(/\s/gm, '');
  mal.search('anime', value)
   .then(info => {
    var result = []
    //result = result.filter(function( element ) {
    //return element !== undefined;
    //});
    for (var i = 0; i < 10; i++) {
     var stripHere = 57;
     var fix = info.results[i].title
     var shortText = fix.substring(0, stripHere) + (fix.length > stripHere ? '...' : '');
     var json = {
      "thumbnailImageUrl": info.results[i].image_url,
      "text": shortText,
      "actions": [{
       "type": "message",
       "label": "detail",
       "text": "mal_id " + info.results[i].mal_id
      }]
     }
     result.push(json)
    }
    //var groups = result.slice(0,10)
    var undef;
    //var arr = [1,2, undef, 3, 4, undef];
    for (var i = 0; i < result.length; i++) {
     if (result[i] === undef) {
      result.splice(i, 1);
      i--;
     }
    }
    const echo = {
     "type": "template",
     "altText": "this is a carousel template",
     "template": {
      "type": "carousel",
      "actions": [],
      "columns": result
     }
    }
    return client.replyMessage(event.replyToken, echo);
   }).catch(err => {
    const echo = {
     "type": "text",
     "text": err
    };
    return client.replyMessage(event.replyToken, echo);
   });
 }

 //===========================
 //saucenao
 //=================

 if (msg.includes("!sauce")) {
  var ks = msg.replace(/!sauce/, '');
  var valu = ks.replace(/\s/gm, '');
  handler.getSauce(valu).then(info => {
   var jes = info[0].original.data
   var isi = JSON.stringify(jes, null, " ").replace(/""/g, "-").replace(/ /g, "").replace(/":/g, " : ").replace(/{|}|\[|],|"/g, "")
   //console.log("Result:\n\n"+"similarity : "+info[0].similarity+isi)//.replace(/,"/g, "-"));
   const echo = [{
    "type": "text",
    "text": "input :"
   }, {
    "type": "image",
    "originalContentUrl": valu,
    "previewImageUrl": valu
   }, {
    "type": "text",
    "text": "Result:\n\n" + "similarity : " + info[0].similarity + isi
   }, {
    "type": "image",
    "originalContentUrl": info[0].thumbnail,
    "previewImageUrl": info[0].thumbnail
   }];
   //return client.replyMessage(event.replyToken, echo);
   return client.replyMessage(event.replyToken, echo);
  })
 }

 // YANDERE
 if (msg.includes("y!10q")) {
  if (event.source.groupId === grup || (event.source.userId === userid && event.source.type === 'user')) {
    var ks = msg.replace(/y!10q/, '');
    var tag = ks.replace(/\s/gm, '');
    axios.get('https://yande.re/post.json?limit=10&tags='+tag+'+order%3Ascore+rating%3Aquestionable+order%3Arandom')
     .then(function(response) {
      var result = [];
      for (var i = 0; i < response.data.length; i++) {
       var obj = response.data[i];
       var json_file = {
        "imageUrl": obj.preview_url,
        "action": {
         "type": "uri",
         "label": "SOURCE HERE!",
         "uri": obj.file_url
        }
       }
       result.push(json_file)
      }
      var jason = {
        "type": "template",
        "altText": "konachan",
        "template": {
         "type": "image_carousel",
         "columns": result
        }
       }
      return client.replyMessage(event.replyToken, jason);
     })
   }else{
     const echo = {
      "type": "text",
      "text": "yare yare\n\nJOIN GROUP OSIS DULU BUJANK"
     }
     return client.replyMessage(event.replyToken, echo);
   }
 }
  
  
  //Nekopoi
  
  
  request('https://nekopoi.care/', (error, response, html) => {
  if (event.message.text == "!neko") {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);

    var titles = []
    var links = []
    $('.eroinfo').each((i, el) => {
      var title = $(el)
        .find('h2')
        .text()
      titles.push(title)
        //.replace(/\s\s+/g, '');
     var link = $(el)
        .find('a')
        .attr('href')
     links.push(link)
     })
     var imgs = []
        $('.limitero').each((i, el) => {
      const img = $(el)
        .find('img')
        .attr('src');
          imgs.push(img)
        })
          //bot
  var result = []
   for (var i = 0; i < 10; i++) {
    //var title = info.results[i].title
    //var bhsa = info.results[i].language
    //var thumb = info.results[i].thumbnail.s
    var stripHere = 57;
    //var fix = info.results[i].title
    var shortText = titles[i].substring(0, stripHere) + (titles[i].length > stripHere ? '...' : '');
    var json = {
     "thumbnailImageUrl": "https://nekopoi.care"+imgs[i],
     "text": shortText,
     "actions": [{
         "type": "uri",
         "label": "download",
         "uri": "https://nekopoi.care"+links[i]
     }]
    }
    result.push(json)
   }

    var chat = {
     "type": "template",
     "altText": "this is a carousel template",
     "template": {
      "type": "carousel",
      "actions": [],
      "columns": result
     }
    }
    client.replyMessage(event.replyToken, chat);
   
}}})
  
  
  //animu
  if (event.message.text == "!animu") {
  request('https://nanime.tv/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);

    var titles = []
    $('.post-title').each((i, el) => {
      var title = $(el)
      .text()
      titles.push(title)
      })

      var imgs = []
      $('.poster').each((i, el) => {
      var img = $(el).find('img')
        .attr('src') 
      imgs.push(img)
      })

var links = []
    $('.col-md-3').each((i, el) => {   
     var link = $(el).find('a')
        .attr('href')
     links.push(link)
    })
    var result = []
   for (var i = 0; i < 10; i++) {
    var stripHere = 57;
    var shortText = titles[i].substring(0, stripHere) + (titles[i].length > stripHere ? '...' : '');
    var json = {
     "thumbnailImageUrl": imgs[i],
     "text": shortText,
     "actions": [{
         "type": "uri",
         "label": "download",
         "uri": "https://nanime.tv"+links[i]
     }]
    }
    result.push(json)
   }

    var chat = {
     "type": "template",
     "altText": "this is a carousel template",
     "template": {
      "type": "carousel",
      "actions": [],
      "columns": result
     }
    }
    client.replyMessage(event.replyToken, chat);
  
  }})}
  
  
  if (event.message.text == "!jojo") {
    request('https://nanime.tv/anime/jojo-no-kimyou-na-bouken-ougon-no-kaze-episode-034', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
var imgs = ''
var links = ''
    $('.light-off-box').each((i, el) => {   
     var link = $(el).find('div')
        .attr('data-src')
     links = link
     var img = $(el).find('img')
        .attr('src')
     imgs = img
     /*const echo = {
   "type": "video",
   "originalContentUrl": 'https://uservideo.xyz/file/nanime.jojo5.34.id.480p.mp4?embed=true&autoplay=true',
   "previewImageUrl": img
    };
  return client.replyMessage(event.replyToken, echo);*/
     //links.push(img)
    })
    
    var jud = ''
    $('.judul-post').each((i, el) => {   
     var judul = $(el).text()
     jud = judul
    })
    //https://uservideo.xyz/file/nanime.jojo5.34.id.480p.mp4
    axios.get('https://script.google.com/a/student.sbccd.edu/macros/s/AKfycbwAcHbNg-pU3KwHJIitjYvy5xedCdpCn8y29FPbpQ/exec?title='+jud+'&vid='+links+'&img='+imgs)
    //https://script.google.com/a/student.sbccd.edu/macros/s/AKfycbwAcHbNg-pU3KwHJIitjYvy5xedCdpCn8y29FPbpQ/exec?title=Nonton JoJo no Kimyou na Bouken: Ougon no Kaze Episode 34 Sub Indo&vid=https://uservideo.xyz/file/nanime.jojo5.34.id.480p.mp4?embed=true&autoplay=true&img=https://image.tmdb.org/t/p/w780/AeKV8Lgr3rux1wbzPD3tD70UvP6.jpg
  }})
  
  }
  
  
//IG
  
  if (msg.startsWith('!ig ')) {
  var id = msg.replace(/!ig /, '');
    axios.get('https://rest.farzain.com/api/ig_profile.php?id='+id+'&apikey=PpRs6D7zVpD6MSKwNHAXhTOm2')
     .then(function(response) {
      var i = response.data.info
      var j = response.data.count
  const echo = [{
     "type": "text",
     "text": "Username : "+i.username+"\nFull name : "+i.full_name+"\nBio : "+i.bio+"\n\nPost : "+j.post+"\nFollowers : "+j.followers+"\nFollowing : "+j.following
    },{
    "type": "image",
    "originalContentUrl": i.profile_pict,
    "previewImageUrl": i.profile_pict
   }];
  client.replyMessage(event.replyToken, echo)
})}
  
  if (msg.startsWith('!ig_post ')) {
  var id = msg.replace(/!ig_post /, '');
    axios.get('https://script.google.com/a/student.sbccd.edu/macros/s/AKfycbx0nYwgaLO4udyUwP2t5M_JzD-xXrTiIxozWdxSRw/exec?url='+id)}
  
  
  if (msg.startsWith('!ig_detail')){
    var value = msg.replace(/!ig_detail /, '');
    axios.get('https://rest.farzain.com/api/ig_post.php?id='+value+'?_a=1&apikey=PpRs6D7zVpD6MSKwNHAXhTOm2').then(function(response){
   var obj = response.data
   const echo = [{
     "type": "text",
     "text": obj.caption
   },{
    "type": "image",
    "originalContentUrl": obj.first_pict,
    "previewImageUrl": obj.first_pict
   }];
      
      //console.log(obj.first_pict)
  client.replyMessage(event.replyToken, echo)
    
  })}
  //https://script.google.com/a/student.sbccd.edu/macros/s/AKfycbx0nYwgaLO4udyUwP2t5M_JzD-xXrTiIxozWdxSRw/exec
  
  //https://rest.farzain.com/api/ig_profile.php?id=f.ahmad480&apikey=PpRs6D7zVpD6MSKwNHAXhTOm2
  
  
  //test
if (msg.startsWith('rand ')) {
  var ks = msg.replace(/rand /, '');
  const echo = {
     "type": "text",
     "text": "Random "+ks+" angka\n\n"+"Result = "+(Math.floor(Math.random() * ks)+1)
    };
  return client.replyMessage(event.replyToken, echo);
}
  
  


 //post
 //post video
 //https://script.google.com/macros/s/AKfycbznfrNGFp8lX0OAIsbbNR7NET4zKL7ZWrslwHpaUGmxaP2F1qo/exec
 //https://script.google.com/macros/s/AKfycbznfrNGFp8lX0OAIsbbNR7NET4zKL7ZWrslwHpaUGmxaP2F1qo/exec

 if (msg.startsWith("!video")) {
  var valu = msg.replace(/!video /, '');
  //var valu = ks.replace(/\s/gm, '');
  axios.get('https://script.google.com/macros/s/AKfycbznfrNGFp8lX0OAIsbbNR7NET4zKL7ZWrslwHpaUGmxaP2F1qo/exec?url=' + valu);
 };

 if (msg.startsWith("!img")) {
  var valu = msg.replace(/!img /, '');
  //var valu = ks.replace(/\s/gm, '');
  const echo = {
   "type": "image",
   "originalContentUrl": valu,
   "previewImageUrl": valu
  }
  return client.replyMessage(event.replyToken, echo);
 };
  
  
  //test
  
  
if (msg =="!add" ) {
  if(event.source.userId === userid){
  //var valu = msg.replace(/!add /, '');
  //var valu = ks.replace(/\s/gm, '');
/*fs.writeFile('/id.txt', event.source.userId, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});*/
    
    var fs = require("fs");

var data = "New File Contents";

fs.writeFile("/tmp/test.txt", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
 }};

  
  
  
  
}

app.get('/api', function (req, res) {
  request('https://nekopoi.care/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);

    var titles = []
    var links = []
    $('.eroinfo').each((i, el) => {
      var title = $(el)
        .find('h2')
        .text()
      titles.push(title)
        //.replace(/\s\s+/g, '');
     var link = $(el)
        .find('a')
        .attr('href')
     links.push(link)
     })
     var imgs = []
        $('.limitero').each((i, el) => {
      const img = $(el)
        .find('img')
        .attr('src');
          imgs.push(img)
        })
    res.header("Content-Type",'application/json');
        res.send(JSON.stringify(titles, null, 4));
  }})})
/*app.get('/ifttt/', (req, res) => {
 var valu = req.query.url
 handler.getSauce(valu).then(info => {
  var jes = info[0].original.data
  var isi = JSON.stringify(jes, null, " ").replace(/""/g, "-").replace(/ /g, "").replace(/":/g, " : ").replace(/{|}|\[|],|"/g, "")
  //console.log("Result:\n\n"+"similarity : "+info[0].similarity+isi)//.replace(/,"/g, "-"));
  const echo = [{
   "type": "text",
   "text": "Result:\n\n" + "similarity : " + info[0].similarity + isi
  }, {
   "type": "image",
   "originalContentUrl": valu,
   "previewImageUrl": valu
  }];
  client.replyMessage(client.pushMessage('C5727b219ca840dbae9c22ca214b549b6', echo))
  res.set('Content-Type', 'text/html');
  return res.send(new Buffer('<h2>Test String</h2>'));
 })
})*/

// listen on port
const port = 3000;
app.listen(port, () => {
 console.log(`listening on ${port}`);
});