class Board{
  constructor(){
    // w:後手 b:先手
    // 持ち駒　ひよこ、ぞう、きりん
    this.nowBoard = [
                    [wk,wl,wz],
                    [ee,wh,ee],
                    [ee,bh,ee],
                    [bz,bl,bk],
                    [0,0,0],
                    [0,0,0]
                    ];
    this.nowTeban = b;
  }
}

const b = new Board;

function hello(){
  console.log("hello");
}