const initialState = 10;
const ChangeNum = (state = initialState, action) => {
    switch (action.type) {
        case "increment": return state + 1;
        default: return state;
    }
    // if (action.type == "increment") {
    //     return state + 1;
    // } else {
    //     return state;
    // }
}
export default ChangeNum;