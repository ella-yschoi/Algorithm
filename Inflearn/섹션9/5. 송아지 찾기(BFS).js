// 다른 풀이 1
function solution(s, e){  
  let answer=0;
  let ch=Array.from({length:10001}, ()=>0);
  let dis=Array.from({length:10001}, ()=>0);
  let queue=[];

  queue.push(s);
  ch[s]=1;
  dis[s]=0;

  while(queue.length){
    let x=queue.shift();
    for(let nx of [x-1, x+1, x+5]){
      if(nx===e) return dis[x]+1;
      if(nx>0 && nx<=10000 && ch[nx]===0){
        ch[nx]=1;
        queue.push(nx);
        dis[nx]=dis[x]+1;
      }
    }
  }
  return answer;
}

console.log(solution(8, 3));

// 다른 풀이 2
function solution(s, e){  
  let answer=0;
  let ch=Array.from({length:10001}, ()=>0);
  let queue=[];

  queue.push(s);
  ch[s]=1;
  let L=0;

  while(queue.length){
    let len=queue.length;
    for(let i=0; i<len; i++){
      let x=queue.shift();
      for(let nx of [x-1, x+1, x+5]){
        if(nx===e) return L+1;
        if(nx>0 && nx<=10000 && ch[nx]===0){
          ch[nx]=1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
}

console.log(solution(5, 14));
