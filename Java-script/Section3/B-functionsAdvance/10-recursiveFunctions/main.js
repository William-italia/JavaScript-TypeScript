function recursive(max) {
    console.log(max);
    if(max >= 50000) return;
    max++;
    recursive(max);
}

recursive(0)