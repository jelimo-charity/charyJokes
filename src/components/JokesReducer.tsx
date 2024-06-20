export type IAction = { type: 'addRate' } | { type: 'decreaseRate' };

export const rateCount = (state: number, action: IAction): number => {
  switch (action.type) {
    case 'addRate':
      return state + 1;
    case 'decreaseRate':
      return state - 1;
    default:
      return state;
  }
};
