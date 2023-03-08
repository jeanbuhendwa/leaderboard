const renderList = (item) => {
  let dataList = '';
  const list = document.getElementById('list-score');

  const dataSorted = item.sort((a, b) => b.score - a.score);
  dataSorted.forEach((element) => {
    const { user, score } = element;

    dataList += `
        <li class="list">
            <span class="list-name">${user}</span>
            <span class="score">${score}</span>
        </li>
    `;
  });
  list.innerHTML = dataList;
};

export default renderList;
