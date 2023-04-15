import { PrismaClient } from '@prisma/client'
import { log } from 'console';
const express = require('express')
const prisma = new PrismaClient()
const app = express();

app.use(express.json());

app.get('/customers', async (req, res) => {
  const customer = await prisma.customers.findMany({
    include: {
      orders: true
    },
    where: {
      customerNumber: 114
    }
  })
  res.json(customer);
  //console.log(customer);
  //res.send('halo')
})


async function main() {
  const allcustomers = await prisma.customers.findMany({
     include: {
         orders: true
     },
    
   });
   //console.log(res);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  app.listen(3000, () => console.log('hi')
  );
