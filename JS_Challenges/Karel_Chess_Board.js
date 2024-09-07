/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   putBeeper();
   putChessBeeper2();
   putChessBeeper2();
   moveChessleft();
   moveChessRight();
   moveChessleft();
   moveChessRight();
   
}

function putChessBeeper1() {
   
   move();
   putBeeper();
   move();
}

function putChessBeeper2(){
   
   move();
   move();
   putBeeper();
}
function moveChessleft(){
   
  turnLeft();
  move();
  turnLeft();
  putChessBeeper1();
  putChessBeeper1();
  
}

function moveChessRight(){
   
  turnRight();
  move();
  turnRight();
  putBeeper();
  putChessBeeper2();
  putChessBeeper2();
   
}

