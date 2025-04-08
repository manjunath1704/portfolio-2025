//const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmQ0M2QwMmI1OGY5MTU1NDJlNmM0M2Y4NDAzNTcxYyIsIm5iZiI6MTYyNzkzMjQ3My44ODksInN1YiI6IjYxMDg0NzM5Zjk2YTM5MDAzMDMwYTE4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SeZQyQ6fY-80U1qic8XHR7fxQa9-gl177-AAJAFQOTE";
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {User} from "lucide-react"

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmQ0M2QwMmI1OGY5MTU1NDJlNmM0M2Y4NDAzNTcxYyIsIm5iZiI6MTYyNzkzMjQ3My44ODksInN1YiI6IjYxMDg0NzM5Zjk2YTM5MDAzMDMwYTE4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SeZQyQ6fY-80U1qic8XHR7fxQa9-gl177-AAJAFQOTE";
const BASE_URL = "https://api.themoviedb.org/3";

export default function Home() {
    const [movies, setMovies] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [input, setInput] = useState("");
    const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
    const [cast, setCast] = useState<any[]>([]);
    const [crew, setCrew] = useState<any[]>([]);
    const [related, setRelated] = useState<any[]>([]);
  
    useEffect(() => {
      const fetchMovies = async () => {
        const url = query
          ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}`
          : `${BASE_URL}/movie/popular?page=${page}`;
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const data = await res.json();
        setMovies(data.results || []);
      };
  
      fetchMovies();
    }, [page, query]);
  
    const handleSearch = () => {
      setQuery(input);
      setPage(1);
    };
  
    const openMovie = async (movie: any) => {
      setSelectedMovie(movie);
  
      const resCredits = await fetch(`${BASE_URL}/movie/${movie.id}/credits`, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      });
      const credits = await resCredits.json();
      setCast(credits.cast.slice(0, 5));
      setCrew(credits.crew.filter((c: any) => c.job === "Director"));
  
      const resRelated = await fetch(`${BASE_URL}/movie/${movie.id}/similar`, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      });
      const relatedData = await resRelated.json();
      setRelated(relatedData.results.slice(0, 4));
    };
  

  return (
    <div>
      <div className="p-4 mt-20 pt-10">
      <div
        className="relative h-[350px] w-full rounded-xl overflow-hidden mb-8"
        style={{
          backgroundImage:
            "url('/movies-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">
          Your Gateway to the World of Movies          </h1>
        
        </div>
      </div>
      <div className="max-w-xl mx-auto mb-10">

        <div className="flex gap-2 mb-6">
          <Input
            placeholder="Search movies..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="bg-white text-black"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
              onClick={() => openMovie(movie)}
            >
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={500}
                  height={750}
                  className="w-full h-72 object-cover"
                />
              ) : (
                <div className="w-full h-72 bg-gray-700 flex items-center justify-center text-sm">No Image</div>
              )}
              <div className="p-3">
                <h2 className="text-lg font-semibold truncate text-[#fff]">{movie.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <Button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Previous</Button>
          <span>Page {page}</span>
          <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
        </div>
      </div>

      <Dialog open={!!selectedMovie} onOpenChange={() => setSelectedMovie(null)} >
        <DialogContent className="max-w-3xl bg-white text-black overflow-scroll h-[85vh]">
          {selectedMovie && (
            <>
              <DialogTitle className="text-2xl font-bold mb-2">
                {selectedMovie.title}
              </DialogTitle>
              <DialogDescription className="text-gray-600 mb-4">
                Released: {selectedMovie.release_date}
              </DialogDescription>
              <div className="flex gap-4 mb-4">
                {selectedMovie.poster_path && (
                  <Image
                    src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`}
                    alt={selectedMovie.title}
                    width={200}
                    height={300}
                    className="rounded"
                  />
                )}
                <p>{selectedMovie.overview}</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">Cast</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cast.map((member) => (
                    <div key={member.id} className="text-sm text-center flex flex-col items-center">
                      {member.profile_path ? (
                        <div className="h-[100px] w-[100px] overflow-hidden rounded-full">
                            <Image
                          src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                          alt={member.name}
                          width={100}
                          height={100}
                          className="rounded mx-auto object-cover object-top"
                        />
                        </div>
                      ) : (
                        <div className="h-[100px] w-[100px] overflow-hidden rounded-full bg-gray-300 flex items-center justify-center" >
                            <User className="w-10 h-10"/> 
                            </div>
                      )}
                      <p className="font-medium mt-1">{member.name}</p>
                      <p className="text-xs text-gray-600">{member.character}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                
                {
                    related.length > 0 ? <h3 className="font-semibold text-lg mb-2">Related Movies</h3> : ""
                }
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {related.map((movie) => (
                    <div key={movie.id} className="text-sm text-center">
                      {movie.poster_path ? (
                        <Image
                          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                          alt={movie.title}
                          width={100}
                          height={150}
                          className="rounded mx-auto"
                        />
                      ) : (
                        <div className="w-[100px] h-[150px] bg-gray-300 mx-auto" />
                      )}
                      <p className="font-medium mt-1 truncate">{movie.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
