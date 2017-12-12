var evalRPN = function(tokens) {
    var stack = [];
    for (var i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) {
            stack.push(Number(tokens[i]));
            continue;
        }

        var a = stack.pop();
        var b = stack.pop();
        var c;
      
        switch (tokens[i]) {
        case '+':
            c = b + a;
            break;
        case '-':
            c = b - a;
            break;
        case '*':
            c = b * a;
            break;
        case '/':
            c = b / a;
            break;
        }
      
        stack.push(c | 0);
    }

    return stack[0];
};
