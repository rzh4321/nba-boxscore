'use server';
import getScoreboards from "./getScoreboards";
import { GAME_STATUS } from "@/constants";

export default async function getGameIds(date?: string) {
    let gameIds;
    let games;
    if (date) {
        games = await getScoreboards(date);
    } else {
        games = await getScoreboards();
    }
    const shouldRefreshStats = games.some(game => game.gameStatus !== GAME_STATUS.ENDED);
    gameIds = games.map(game => game.gameId);
    return {gameIds, shouldRefreshStats};
}