export type Creator = { name?: string; niche: string; style: string; goals: string; followers: number };
export function matchCreators<T extends Creator>(me: Creator, others: T[]): (T & { score: number })[];
