

export default function endsWithOperation(string){
    if(string.endsWith('+') || string.endsWith('-')
        || string.endsWith('*') || string.endsWith('/')){
        return true
    }else{
        return false
    }
}