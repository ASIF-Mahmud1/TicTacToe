var turn=false;
var block=[9];
var Xpos=[9];
var Ypos=[9];
var counter_x=0;
var counter_y=0;
var test1 =false;
var test2= false;
var how_many_moves=0;
var x_win=0;
var y_win=0;

const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]
function flush()
{
	turn=false;
	counter_x=0;
	counter_y=0;
	test1=false;
	test2=false;
	how_many_moves=0;
	for(var i=0;i<9;i++)
	{
		Xpos[i]=-1;
		Ypos[i]=-1;
		block[i]	=-1;
	}
}


flush();
function play(event,id)
{

  if(! event.target.innerText)
  {
  console.log(event);
  if(! turn)
  {
    event.target.innerText= "X";


  }
  else {
    event.target.innerText=  "0";

  }
	document.getElementById("justsee").textContent="Game in Progress!";

  //event.target.innerText= turn ? "0": "X";
	  how_many_moves++;
    turn= !turn;

    var input; var index;
    input= document.getElementById(id).innerText;
		index= parseInt(id);

		block[index]= input;

		if(input=="X")
		{
			Xpos[index]=index;
			 test1 = checkWin(Xpos, counter_x);
			if(test1 )
			{ x_win++;
				document.getElementById("player1W").textContent=x_win;
				document.getElementById("player2L").textContent=x_win;
				console.log("Player 1 won");
				//update_score(player1, x_win);
				//alert("Player 1 won");
				document.getElementById("justsee").textContent="Player 1 won";

				flush();
				return ;
			}
			if(!test1 && how_many_moves==9)
			{
				console.log("Its a Draw!");
				//alert("Its a Draw!");
				document.getElementById("justsee").textContent="Draw";
				flush();
				return ;
			}
		}
		else
		{
			Ypos[index]=index;
			 test2= checkWin(Ypos, counter_y);
			if(test2)
			{
				y_win++;
				document.getElementById("player2W").textContent=y_win;
				document.getElementById("player1L").textContent=y_win;
				console.log("Player 2 won");
				//alert("Player 2 won");
				document.getElementById("justsee").textContent="Player 2 won";
				flush();
				return ;
			}

		}

  }

function checkWin(checkWinner , whatif)
{
			for(var j =0; j<8; j++)
			{
				for(var k=0; k<3; k++)
				{
					for(var i=0; i<9; i++)
					{
						if(checkWinner[i] != -1)
						{
							if(checkWinner[i]==winCombos[j][k])
							{
							  whatif =whatif+1;
								console.log("matched "+ whatif);
							}
							if(whatif==3)
							{
								return true;
							}
						}
					}
				}
				whatif=0;
			}
}






  console.log(index + " " + block[id]);

	console.log(Xpos);
	console.log(Ypos);



}
//console.log(block);
function GameReset()
{
	flush();
	for(var i=0;i<9; i++)
	{
		document.getElementById(i).innerHTML="";
	}
}
