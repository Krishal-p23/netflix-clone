"use client";

import { assets } from "@/assets/assets";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Billboard = () => {

    const [randomMovie, setRandomMovie] = useState(null);
    const videoRef = useRef(null);

    const fetchMovies = async () => {
        try {
            const { data } = await axios.get("/api/movies");
            const randomNum = Math.floor(Math.random() * data.length);
            setRandomMovie(data[randomNum]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    console.log("randomMovie: ", randomMovie);

    return (
        <div className="h-screen relative">
            <video
                src={randomMovie?.videoUrl}
                poster={randomMovie?.thumbnailUrl}
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline />
        </div>
    );
};

export default Billboard;