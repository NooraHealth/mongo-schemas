
import { Curriculums as CurriculumSchema } from "./schemas/curriculums.js";
import { Lessons as LessonsSchema } from "./schemas/lessons.js";
import { Modules as ModulesSchema } from "./schemas/modules.js";
import { OfflineFiles as OfflineFilesSchema } from "./schemas/offline_files.js";

export const name = 'mongo-schemas';
export const Curriculums = CurriculumSchema;
export const Lessons = LessonsSchema;
export const Modules = ModulesSchema;
export const OfflineFiles = OfflineFilesSchema;
