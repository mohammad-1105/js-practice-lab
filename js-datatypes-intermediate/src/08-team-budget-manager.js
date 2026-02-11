/**
 * Team Budget Manager
 *
 * You are building a pro-sports roster budget dashboard.
 *
 * Rules:
 *   - team format: { name: "BOS", budget: 9000 }
 *   - players format: [{ name: "Player", role: "offense", price: 1200 }, ...]
 *   - Compute:
 *     - totalSpent: sum of all player prices
 *     - remaining: budget - totalSpent
 *     - playerCount: number of players
 *     - costliestPlayer: player object with max price
 *     - cheapestPlayer: player object with min price
 *     - averagePrice: Math.round(totalSpent / playerCount)
 *     - byRole: counts per role
 *     - isOverBudget: totalSpent > budget
 *
 * Validation:
 *   - If team is not an object, return null
 *   - If team.budget is not a positive number, return null
 *   - If players is not an array or is empty, return null
 *
 * @param {{ name: string, budget: number }} team
 * @param {Array<{ name: string, role: string, price: number }>} players
 * @returns {{ teamName: string, totalSpent: number, remaining: number, playerCount: number, costliestPlayer: object, cheapestPlayer: object, averagePrice: number, byRole: object, isOverBudget: boolean } | null}
 */
export function summarizeTeamBudget(team, players) {
  // TODO: implement
}
