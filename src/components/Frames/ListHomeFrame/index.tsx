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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

export const ListHomeFrame = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character",
      );
      return data.results;
    },
  });

  return (
    <section className={`min-h-screen`}>
      <h1>List Home Frame</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {isLoading
          ? "loading..."
          : data.map((character: any, index: number) => (
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
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
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
      </div>
    </section>
  );
};
