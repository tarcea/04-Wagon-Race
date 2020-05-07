// TODO: write your code here
const selector1 = document.querySelector('#player1_race');
const selector2 = document.querySelector('#player2_race');
document.addEventListener("keyup", (event) => {
  const pl1 = selector1.querySelector('.active');
  const pl2 = selector2.querySelector('.active');
  console.log(event.key);
  if (event.key === 'a') {
    // const selector = document.querySelector('.active');
    pl1.classList.remove('active');
    pl1.nextElementSibling.classList.add('active');
    console.log(selector1);
    console.log(pl1);
  } else if (event.key === 'p') {
    // const selector = document.querySelector('.active');
    pl2.classList.remove('active');
    pl2.nextElementSibling.classList.add('active');
  }
  if (pl1.nextElementSibling.classList.contains('finish')) {
    alert("player1 won");
    window.location.reload();
  } else if (pl2.nextElementSibling.classList.contains('finish')) {
    alert("player2 won");
    window.location.reload();
  }
});
