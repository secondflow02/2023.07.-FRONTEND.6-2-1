import { useSearchQuery } from './query';

const Search = () => {
    const { query, setQuery } = useSearchQuery();
    return (
        <>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
            ></input>
        </>
    );
};
export default Search;
//각 컴포넌트마다 style변경된다고 생각
