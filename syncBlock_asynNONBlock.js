// sysn
alert(1);
alert(2);
alert(3);
const fs=require('fs');
const data=fs.readFileSync('file.md');

// async

alert(1);
setTimeout(()=> alert(2),0)
alert(3);

const fs=require('fs');
fs.readFile('file.md',(err,data)=>{
    if(err) throw err
    console.log(data)
})

// Dangers of Mixing Blocking and Non-Blocking Code
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.unlinkSync('/file.md');


const fs = require('fs');
fs.readFile('/file.md', (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  fs.unlink('/file.md', (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
  });
});

