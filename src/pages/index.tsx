import { NextPage } from "next";
import ReactPaginate from "react-paginate";

import { FetchProviders } from "../hooks/FetchProvider";
import useCharactersStore from "../store/characters";

const Home: NextPage = () => {
  const { characters, info } = useCharactersStore(state => state);

  const pages: number = info?.pages;
  const { handlePaginationCharacters } = FetchProviders();

  return (
    <main className={`flex flex-col`}>
      <section className={`flex flex-wrap items-center justify-center gap-6`}>
        {characters.map((character, index) => (
          <div key={index} className={`flex flex-col`}>
            <span className={`text-lg`}>{character.name}</span>
            <img
              src={character.image}
              alt={character.name}
              className={`h-[200px] w-[200px]`}
            />
          </div>
        ))}
      </section>
      {pages > 1 ? (
        <div className={`mt-4`}>
          <ReactPaginate
            breakLabel="..."
            nextLabel={">"}
            previousLabel={"<"}
            onPageChange={handlePaginationCharacters}
            pageRangeDisplayed={2}
            pageCount={pages}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName={"page-num"}
            nextLinkClassName={"page-num"}
            disabledClassName={"disabled"}
            activeLinkClassName="active"
          />
        </div>
      ) : (
        ""
      )}
    </main>
  );
};
export default Home;
