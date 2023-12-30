
let l = [['', '', ''], ['', '', ''], ['', '', '']];
let cnt = 0;

function check() {
    for (let i = 0; i < 3; i++) {
        if ((l[i][0] === l[i][1] && l[i][1] === l[i][2]) && (l[i][0] === 'X' || l[i][0] === 'O')) {
         
            return l[i][0];
        }
    }

    for (let j = 0; j < 3; j++) {
        if ((l[0][j] === l[1][j] && l[1][j] === l[2][j]) && (l[0][j] === 'X' || l[0][j] === 'O')) {
           
            return l[0][j];
        }
    }

    if ((l[0][0] === l[1][1] && l[1][1] === l[2][2]) && (l[0][0] === 'X' || l[0][0] === 'O')) {
       
        return l[0][0];
    }

    if ((l[0][2] === l[1][1] && l[1][1] === l[2][0]) && (l[0][2] === 'X' || l[0][2] === 'O')) {
     
        return l[0][2];
    }

    let c = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (l[i][j] == 'O' || l[i][j] == 'X') {
                c += 1;
            }
        }
    }

    if (c === 9) {
        return 'TIE';
    }

    return '';
}

function mark(name, a, b) {
    console.log(a, b);
    if (cnt % 2 === 0) {
        if (l[a][b] === '') {
            l[a][b] = 'X';
            cnt += 1;
            z = name.id
            console.log(z)
            document.getElementById(name.id).innerHTML = "X";

        } else {
            window.alert('Taken already');
        }
    } else {
        if (l[a][b] === '') {
            l[a][b] = 'O';
            cnt += 1;
            document.getElementById(name.id).innerHTML = "O";
        } else {
            window.alert('Taken already');
        }
    }

    let result = check();
    console.log(result);
    console.log(l);

    if (result === 'X') {
        empty()
        window.alert("X Win");

    } else if (result === 'O') {
        empty()
        window.alert("O Win");

    } else if (result === 'tie') {
        empty()
        window.alert(result);

    }
}
function empty() {
    l = [['', '', ''], ['', '', ''], ['', '', '']];
    cnt = 0;
    document.getElementById(11).innerHTML = "";
    document.getElementById(12).innerHTML = "";
    document.getElementById(13).innerHTML = "";
    document.getElementById(21).innerHTML = "";
    document.getElementById(22).innerHTML = "";
    document.getElementById(23).innerHTML = "";
    document.getElementById(31).innerHTML = "";
    document.getElementById(32).innerHTML = "";
    document.getElementById(33).innerHTML = "";

}







