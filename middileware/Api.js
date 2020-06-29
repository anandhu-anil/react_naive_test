import {FEEDLIST, COMMENTS} from '../constants/Urls';

export async function getFeedList() {
  const url = `${FEEDLIST}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export async function getCommentList() {
  const url = `${COMMENTS}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
