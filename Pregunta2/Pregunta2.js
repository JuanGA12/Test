function permutation(input){
    if (input.length <= 1) return input;
    else{
        let answer = []; 
        for (let i = 0; i < input.length; ++i){
            if (input.indexOf(input[i]) == i){
                let rest_string = input.substring(0,i) + input.substring(i+1, input.length);
                aux_permutation = permutation(rest_string);
                for (let j = 0; j < aux_permutation.length; ++j) answer.push(input[i] + aux_permutation[j]);
            }
            else{
                continue;
            }
        }
        return answer;
    }    
}
function main(){
    let my_map = new Map;
    let array_input = ["a","ab","aabb"];
    for (let i  = 0; i < array_input.length; ++i) my_map.set(array_input[i],permutation(array_input[i]));
    my_map.forEach((value,key)=>{
        console.log(key + " : " + value);
    })
}

main();