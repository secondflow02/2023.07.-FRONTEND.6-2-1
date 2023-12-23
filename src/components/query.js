import { useState } from 'react';
export const useSearchQuery = () => {
    const [query, setQuery] = useState('');

    return { query, setQuery };
};
