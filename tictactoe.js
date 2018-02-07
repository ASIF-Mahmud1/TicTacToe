var turn=false;
function play(event)
{
  if(! event.target.innerText)
  {	
  console.log(event);
  event.target.innerText= turn ? "0": "X";
  turn= !turn;
  }
}
