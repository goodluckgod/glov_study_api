/* This module created for showing how can we handle multiple modules in a single project.
Have no real usage. */
import { HttpFunction } from "@google-cloud/functions-framework";

import { TModuleExport } from "../../common/types";

const provideFeedback: HttpFunction = async (req, res) => {
  const isPositive = req.body.isPositive;

  if (isPositive === undefined) {
    res.status(400);
    res.json({ error: "Feedback is required", status: 400 });
    return;
  }

  res.json({ success: true });
};

export default {
  provide_feedback: provideFeedback,
} as TModuleExport;
