import React, { useCallback, useEffect, useState } from 'react';

 const UseCallback: React.FC = props => {
     const [URL, setURL] = useState(null);
     const [result, setResult] = useState(null);
     const someAsyncOperation = useCallback(async () => {
        return await fetch("");
     }, [URL]);

     useEffect(() => {
        someAsyncOperation().then(res => {
            setResult(null);
        });
     }, [someAsyncOperation]);

     return null;
};

export default UseCallback;