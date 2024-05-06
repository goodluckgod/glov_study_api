/* This script deploys all the functions in the modules folder to Google Cloud Functions. */
require("dotenv").config();
const { execSync } = require("child_process");

const RUNTIME = process.env.RUNTIME;
const GCP_REGION = process.env.GCP_REGION;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const modules = require("./dist/modules/index.js").default;

Object.entries(modules).forEach(([moduleName, module]) => {
  Object.keys(module).forEach((functionName) => {
    const name = `${moduleName}-${functionName}`;
    execSync(
      `gcloud functions deploy ${name} --source . --gen2 --region ${GCP_REGION} --entry-point ${name} --runtime ${RUNTIME} --trigger-http --allow-unauthenticated --set-env-vars OPENAI_API_KEY=${OPENAI_API_KEY}`
    );

    console.log(`Deployed ${name} function`);
  });

  console.log(`Deployed ${moduleName} module`);
});
