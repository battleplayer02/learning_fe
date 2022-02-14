const initialState = 0;
const ChangeNum = (state = initialState, action) => {
    switch (action.type) {
        case "increment": state + 1;
        default: state;
    }
}
export default ChangeNum;