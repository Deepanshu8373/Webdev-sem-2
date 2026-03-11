<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <pre><script>
let n = 5;
for(let i = 1; i <= n; i++){
    let ch = String.fromCharCode(64 + i);
    for(let j = 1; j <= i; j++){
        document.write(ch + " ");
    }
    document.write("\n");
}
</script></pre>
</body>
</html>
