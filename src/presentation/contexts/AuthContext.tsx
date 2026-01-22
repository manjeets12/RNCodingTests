import React, { createContext, useContext, type PropsWithChildren } from 'react';
import { useStorageState } from '../../shared/hooks/useStorageState';

interface AuthContextType {
    signIn: (token: string) => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    signIn: (token: string) => null,
    signOut: () => null,
    session: null,
    isLoading: false,
});

export function useSession() {
    const value = useContext(AuthContext);
    if (!value) throw new Error('useSession must be wrapped in a <SessionProvider />');
    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session');

    return (
        <AuthContext.Provider
            value={{
                signIn: (token: string) => setSession(token),
                signOut: () => setSession(null),
                session,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
