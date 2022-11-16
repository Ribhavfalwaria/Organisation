const express = require('express');
const cors = require('cors');
const app = express();
const admin = require('firebase-admin');
const key = require('./key.json');
const fs = require('fs')
app.use(express.json());
app.use(cors());
admin.initializeApp({
    credential:admin.credential.cert(key)
})
const db = admin.firestore();
let user =  db.collection('user');
let create_user=db.collection('users');

app.post('/create',async(req,res)=>{
    try {
        const newuser = req.body;
        console.log(newuser);
        const id =req.body.id;
        await fs.writeFileSync("foo.txt", JSON.stringify(newuser))
        const response = await db.collection('user').doc(id).set(newuser);
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})
app.post('/createuser',async(req,res)=>{
  try {
      const newuser = req.body;
      const id =req.body.id;
      const response = await create_user.doc(id).set(newuser);
      res.send(response);
  } catch (error) {
      res.send(error)
  }
})

app.delete('/delete/:id',async(req,res)=>{
    try {
        
        const id = req.params.id;
      const partner = user.doc( id);
      const respa = await partner.delete();
      console.log(respa);
      res.send(respa)
    
     
    } catch (err) {
      res.send("Error");
    }
})

app.patch("/update/:id", async (req, res) => {
    try {
        
        const id = req.params.id;
        const neworganisations = req.body;
      const partner = user.doc( req.params.id);
      const respa = await partner.update({
        organisations:neworganisations
      });
      console.log(respa);
      res.send(respa)
    
     
    } catch (err) {
      res.send("Error");
    }
  });

  app.get('/read',async(req,res)=>{
    try {
        const resp = await user.get();
        let respArr = [];
        resp.forEach((doc)=>{
            respArr.push(doc.data());

        })
        res.send(respArr)
    } catch (error) {
        console.log(error);
    }
  })
  app.get('/read/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const newuser = req.body;
        let resp ;
      const partner = user.doc( req.params.id);
      const respa = await partner.get();
      
      resp = respa.data()


      console.log(resp);
      res.send(resp)
    } catch (error) {
        console.log(error.message);
    }
  })
  app.get('/createuser/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const newuser = req.body;
        let resp ;
      const partner = create_user.doc(req.params.id);
      const respa = await partner.get();
      console.log(respa);
      resp = respa.data()
      console.log(resp);
      res.send(resp)
    } catch (error) {
        console.log(error.message);
    }
  })


app.listen(1234,()=>{console.log('server up and running');})