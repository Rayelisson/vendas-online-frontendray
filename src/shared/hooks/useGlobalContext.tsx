/* eslint-disable prettier/prettier */

import { createContext, useContext,useState } from 'react';

import { UserType } from '../../models/login/types/UserTypes';


type NotificationType = 'success' | 'info' | 'warning' | 'error'

interface NotificationProps {
      message: string
      type: NotificationType,
      description?: string
}

interface GlobalData {
  notification?: NotificationProps
  user?: UserType
}

interface GlabalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

 const GlobalContext = createContext({} as GlabalContextProps);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
    const { globalData, setGlobalData} = useContext(GlobalContext)

        const setNotification = (message: string, type: NotificationType, description?: string) => {
            setGlobalData({
              ...globalData,
                notification: {
                  message,
                  type, 
                  description
                },
            })
        }
        const setUser = (user?: UserType) => {
          setGlobalData({
            ...globalData,
              user,
          })
      }

        return {
           notification: globalData?.notification,
           user: globalData?.user,
           setUser,
           setNotification,
        }
  }
