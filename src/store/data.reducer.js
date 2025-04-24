const initialState = [
    {
        name:"prasad",
        num:8686808286,
        village:"rudraram"
    },
    {
        name:"jai",
        num:8143808286,
        village:"sdpt   "
    }
]


export const dataReducer = (state = initialState, action) => {

    switch (action.type) {
        case "change":
          return state.map((item, index ) =>
            index === action.payload ? { ...item, name: action.name } : item
          ); // Returns a new array with updated name only for the matched index
          case "changenum":{
           
            return state.map((item, index ) =>
              index === action.payload ? { ...item, num: action.num } : item
            );}
        default:
          return state;
      }

  };
