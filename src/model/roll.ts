export interface RollResponse {
  totalDiceRolled: number;
  keptRawRoll: RawRoll;
  rerolledRawRolls?: RawRoll;
  successes: number;
}

export interface RawRoll {
  [face: number]: number;
}
