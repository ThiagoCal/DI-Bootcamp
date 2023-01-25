for (let i = 0; i <=6; i ++){
    console.log('*'.repeat(i));
}

for (let i=1; i<=6; i++){
    let answer = '';
    for (let times=1; times <= i; times++) {
        answer = answer + '*';
    }
    console.log(answer);
}