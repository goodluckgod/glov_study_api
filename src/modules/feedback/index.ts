/* This module created for showing how can we handle multiple modules in a single project.
Have no real usage. */
import { HttpFunction } from "@google-cloud/functions-framework";

import { TModuleExport } from "../../common/types";

const provideFeedback: HttpFunction = async (req, res) => {
  res.json({ success: true });
};

export default {
  provide_feedback: provideFeedback,
} as TModuleExport;
