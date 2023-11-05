import { Server } from "./setting";

export const getGenderBasedAnalysis =async (ballotID: number) => {
    const result = await Server.get(`voting/analysis/gender-based/${ballotID}`)
    return result.data;
}