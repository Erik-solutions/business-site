# business-site
personal sites

# step one
create server and backend folders 
npm init -y initialise the project

# step two install dendencies 

npm install express


npm install --save-dev typescript @types/node @types/express


npx tsc --init   initialising type script

npm install --save-dev ts-node-dev

# step three making updates to parkages 

  tsconfig.json   :
   {"rootDir": "src",
"outDir": "dist",}


package.json{

    "scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}

}

# step four back end design \\

 Backend Goals:
Use Prisma with PostgreSQL

    npm install prisma --save-dev
    npx prisma init
    npm install @prisma/client

Save Contact Form Submissions

Save Booking Appointments

Send Email Confirmations to:

The user (form submitter)

You (admin)

# write schema 

contact form table 
bookings table 

npx prisma migrate dev --name firstMigration // for developments 
npx prisma generate   //for deployments 