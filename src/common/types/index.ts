import { HttpFunction } from "@google-cloud/functions-framework";

import { EModules } from "../constants";

type TModuleExport = Record<string, HttpFunction>;
type TModules = Record<EModules, TModuleExport>;

export type { TModuleExport, TModules };
