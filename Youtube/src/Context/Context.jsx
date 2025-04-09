import React, { createContext, useState } from 'react';

export const Menudata = createContext();

function Context({ children }) {
  const [menu, setmenu] = useState();
  return (
    <>
      {/* <h1>Context</h1> */}
      <Menudata.Provider value={{ menu, setmenu }}>
        {children}
      </Menudata.Provider>
    </>
  );
}

export default Context;
