import {create} from 'zustand';
import {Board} from '../../interface';

interface BoardState {
  boards: Board[];
  addBoard: (newBoard: Board) => void;
  deleteBoard: (id: string) => void;
}

const BoardStore = create<BoardState>(set => ({
  boards: [],
  addBoard: newBoard =>
    set(prev => ({
      boards: [...prev.boards, newBoard],
    })),
  deleteBoard: id =>
    set(prev => ({
      boards: prev.boards.filter(board => id !== board.id),
    })),
}));

export default BoardStore;
