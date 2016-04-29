
import { Curriculums as CurriculumSchema } from "./schemas/curriculums.coffee";
import { Lessons as LessonsSchema } from "./schemas/lessons.coffee";
import { Modules as ModulesSchema } from "./schemas/modules.coffee";
import { OfflineFiles as OfflineFilesSchema } from "./schemas/offline_files.coffee";

export const name = 'mongo-schemas';
export const Curriculums = CurriculumSchema;
console.log("CURRICULUMS", Curriculums);
export const Lessons = LessonsSchema;
export const Modules = ModulesSchema;
export const OfflineFiles = OfflineFilesSchema;
