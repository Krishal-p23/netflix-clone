import { useRef } from "react";
import { Dialog, DialogContent } from "../ui/Dialog";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Dot } from "lucide-react";

const MovieInfoModal = ({ showInfoModal, setShowInfoModal, movieData }) => {
    const videoRef = useRef(null);

    const handlePlayButtonClick = () => {
        if (videoRef.current) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <Dialog open={showInfoModal} onOpenChange={() => setShowInfoModal(false)}>
            <DialogContent className="bg-[#181818] border-none min-w-175 p-0">
                <div className="flex flex-col gap-4 w-full">
                    <div className="relative">
                        <video
                            src={movieData?.videoUrl}
                            poster={movieData?.thumbnailUrl}
                            className="w-full h-87.5 object-cover"
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline />
                        <div className="absolute bottom-4 left-6 flex flex-col gap-5 items-center">
                            <h1 className="text-4xl text-white font-bold self-start">
                                {movieData?.title}
                            </h1>
                            <div className="flex self-start gap-3">
                                <button
                                    className="flex gap-2 bg-white p-2 px-3.5 rounded-sm self-start cursor-pointer font-bold"
                                    onClick={handlePlayButtonClick}>
                                    <Image
                                        src={assets.play_icon}
                                        alt="play"
                                        width={20}
                                        height={20} />
                                    <span>Play</span>
                                </button>
                                <button
                                    className="bg-transparent border-2 p-2 border-white rounded-full cursor-pointer">
                                    <Image
                                        src={assets.plus_icon}
                                        alt="add"
                                        width={20}
                                        height={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 p-10">
                        <div className="flex gap-2 items-center">
                            <span className="px-2 uppercase whitespace-nowrap text-[#bcbcbc] text-sm font-medium border border-[#fff6]">
                                U/A 13+
                            </span>
                            <span className="text-base text-[#bcbcbc]">
                                {movieData?.duration}
                            </span>
                            <span className="text-xs border border-[#fff6] px-1.5 rounded-[3px] text-[#bcbcbc]">
                                HD
                            </span>
                        </div>
                        <p className="text-white text-base leading-6.5">
                            {movieData?.description}
                        </p>
                        <div className="flex">
                            <p className="textShadow text-base text-white">
                                {movieData?.genre}
                            </p>
                            <Dot className="text-[#646464]" />
                            <p className="textShadow text-base text-white">{movieData?.mood}</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MovieInfoModal;