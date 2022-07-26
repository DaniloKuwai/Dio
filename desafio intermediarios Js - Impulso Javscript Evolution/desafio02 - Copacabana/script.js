let T = parseInt(gets());
let N;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

    	while(T !== 0) {
    		for (let i = 1; i <= T; i++) {
                N = parseInt(gets());
                if (N % 2 !== 0)
                 print( (N -1)* 2 + 1);
                else 
                print((N - 2) * 2 + 2);
            }
            T = parseInt(gets());
    	}