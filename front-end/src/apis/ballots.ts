import { Server } from "./setting";

export const getBallotListContent = async (status: string) => {
    const result = await Server.get(`/voting/ballots?status=${status}`);
    console.log(status)
    console.log(result.data.content)
    return result.data.content;
}

export const getBallotListData = async (status: string, field: string) => {
    const result = await Server.get(`/voting/ballots?status=${status}`);
    return result.data.content.map((item: any) => item[field]);
}

export const getBallotList = async (status: string, field: string) => {
    const result = await Server.get(`/voting/ballots?status=${status}`);
    return result.data[field];
}

export const getBallotData = async (ballotID: number, field: string) => {
    const result = await Server.get(`/voting/ballots/${ballotID}`);
    return result.data[field];
};