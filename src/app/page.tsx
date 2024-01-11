"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { NextPage } from "next";
import Image from "next/image";
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
          <Card className={`flex flex-col items-center p-3`} key={index}>
            <CardHeader>
              <figure className={`relative w-[200px] h-[200px]`}>
                <Image
                  src={character.image}
                  alt={character.name}
                  objectFit="contain"
                  layout="fill"
                  className={`rounded-xl`}
                />
              </figure>
              <CardTitle>{character.name}</CardTitle>
            </CardHeader>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Card>
        ))}
      </section>
      {/* {pages > 1 ? (
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
      )} */}
    </main>
  );
};
export default Home;
