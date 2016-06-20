
import { Curriculums as CurriculumSchema } from "./schemas/curriculums/curriculums.js";
import { Lessons as LessonsSchema } from "./schemas/curriculums/lessons.js";
import { Modules as ModulesSchema } from "./schemas/curriculums/modules.js";
import { OfflineFiles as OfflineFilesSchema } from "./schemas/offline_files.js";
import { Facilities as FacilitiesSchema } from "./schemas/facilities.js";
import { Conditions as ConditionsSchema } from "./schemas/conditions.js";

export const name = 'mongo-schemas';
export const Curriculums = CurriculumSchema;
export const Lessons = LessonsSchema;
export const Modules = ModulesSchema;
export const OfflineFiles = OfflineFilesSchema;
export const Facilities = FacilitiesSchema;
export const Conditions = ConditionsSchema;
