import { createContext } from "react";
let UserContext = createContext();
export default UserContext;



// react context ==>>> createContext ---> creates a context
// Provider wrap everything to get the access
// react context ==>>> useContext    ---> use the context




// export default function MyComp() {
//   return <div>
//       {children}
//   </div>;
// }



// <MyComp>
//     <h1></h1>
//     <div></div>
// </MyComp>