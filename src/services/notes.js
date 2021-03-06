import request from '@/utils/request';
import { baseApi } from './baseApi';

const { notesApi } = baseApi;

export async function fetchNotesList(params) {
  return request(`${notesApi}/list`, {
    params,
  });
}

export async function fetchNoteDetail(params) {
  const { noteId } = params;
  return request(`${notesApi}/${noteId}`);
}

export async function deleteNote(params) {
  const { noteId } = params;
  return request(`${notesApi}/${noteId}`, {
    method: 'DELETE',
  });
}

export async function submitNote(params) {
  return request(notesApi, {
    method: 'POST',
    data: params,
  });
}
