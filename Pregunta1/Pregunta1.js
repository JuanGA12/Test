function empty(stack){
    return (stack.length==0) ? true : false;
}
function is_left_parentheses(i){
    return (i == '(') ? true : false;
}
function is_right_parentheses(i){
    return (i == ')') ? true : false;
}
var my_map = new Map;
function validate_parentheses(input){
    let stack = [];
    if (0 <= input.length && input.length <= 100){
        for (i of input){
            if(is_left_parentheses(i)){
                stack.push('(');
            }else{
                if (empty(stack)){
                    my_map.set(input,false);
                    return;
                }
                let x = stack[stack.length];
                stack.pop();
                if (is_right_parentheses(x)){
                    my_map.set(input,false);
                    return;
                }
            }
        }
        my_map.set(input, empty(stack));
    }else{
        my_map.set(input, "Viola las restricciones");
    }    
    return;
}
function main(){
    let array_input = ["()",")(()))","(","(())((()())())"];
    array_input.forEach(validate_parentheses);
    my_map.forEach((value,key)=>{
        console.log(key + " : " + value);
    })
}

main();