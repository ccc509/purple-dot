import { ACTIVE, COMPLETED, DELETED } from "../../utils/constants";

export type Status = typeof ACTIVE | typeof COMPLETED | typeof DELETED;
