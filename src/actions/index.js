
import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  SET_ACTIVE_NOTE,
  TOGGLE_FAVORITE
} from '../constants'

// const state = {
//   notes: [], // 所有笔记
//   activeNote: {} // 当前笔记
// }

// note = { id: 1, text: 'Add a new note!', favorite: false }
export const addNote = () => ({ type: ADD_NOTE })

export const editNote = (text) => {
  return {
    type: EDIT_NOTE,
    text
  }
}

export const deleteNote = () => ({ type: DELETE_NOTE })

export const setActiveNote = (activeNote) => {
  return {
    type: SET_ACTIVE_NOTE,
    activeNote
  }
}

export const toggleFavorite = () => { type: TOGGLE_FAVORITE }