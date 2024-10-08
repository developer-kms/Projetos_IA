export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[];
export declare const fillBoard: () => Board;
