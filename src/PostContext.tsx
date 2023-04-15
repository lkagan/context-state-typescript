import React, { createContext, useState } from "react";
const postContext = createContext([]);

function PostContextProvider({ children }: any) {
    const postState = useState({ title: 'Context Title' });

    return <postContext.Provider value={postState}>
        {children}
    </postContext.Provider>
}

export { postContext, PostContextProvider }