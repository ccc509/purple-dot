import { ACTIVE, COMPLETED, DELECTED } from "../../utils/constants";

export type Status = typeof ACTIVE | typeof COMPLETED | typeof DELECTED;
