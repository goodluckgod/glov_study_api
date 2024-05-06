import * as functions from "@google-cloud/functions-framework";

import modules from "./modules";

import { EModules } from "./common/constants";

// Look for all modules in project and then add thrir functions to the cloud functions
Object.entries(modules).forEach(([moduleName, module]) => {
  Object.entries(module).forEach(([functionName, functionHandler]) => {
    functions.http(`${moduleName}-${functionName}`, functionHandler);
  });
});

// This functions is used for testing the cloud functions locally
functions.http("TEST", (req, res) => {
  // get module name and function name from the url (/moduleName/functionName)
  const [moduleName, functionName] = req.url
    .split("/")
    .filter((x) => x !== "") as [EModules, string];

  if (modules[moduleName] && modules[moduleName][functionName]) {
    return modules[moduleName][functionName](req, res);
  } else {
    res.status(404);
    res.json({ error: "Not found", status: 404 });
  }
});
