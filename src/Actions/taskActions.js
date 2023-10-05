import { setData } from '../redux/userSlice';

export const fetchTasks = async (dispatch) => {
  try {
    //fetch all the data from the given API
    const response = await fetch(
      'https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    dispatch(setData({ type: 'FETCH_TODOS_SUCCESS', data: data }));
  } catch (error) {
    dispatch(setData({ type: 'FETCH_TODOS_FAILURE', payload: error.message }));
  }
};
