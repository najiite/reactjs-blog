
import { useContext, useState, createContext} from "react";

export const ModeContext = createContext()
export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState('light')

    let bg
    let text
    let border
    if (mode === 'light') {
      bg = 'bg-white'
      text = 'text-gray-800'
      border = 'border-slate-300'

    } else {
       bg = 'bg-gray-800'
       text = 'text-slate-300'
       border = 'border-slate-600'
    }
    const value = {
        setMode,
        mode,
        bg,
        text,
        border,
      }
    return (
        <ModeContext.Provider value={value}>
          {children}
        </ModeContext.Provider>
      )
    }
export function useMode() {
        return useContext(ModeContext)
    }