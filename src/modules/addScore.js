const gameId = 'Z8IOxWKd6iEb76wlxtYB';
const urlBase = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

export const addScore = async (user, score) => {
  await fetch(urlBase, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ user, score }),
  });
};

export const getData = async () => {
  const send = await fetch(urlBase);
  const response = await send.json();
  return response;
};
