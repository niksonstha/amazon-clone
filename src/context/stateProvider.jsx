import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// eslint-disable-next-line react-refresh/only-export-components
export const useStateValue = () => useContext(StateContext);

StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired, // Should be of type 'function'
  initialState: PropTypes.object.isRequired, // Should be of type 'object'
  children: PropTypes.node.isRequired, // You can use 'node' for children to allow any valid React nodes.
};
