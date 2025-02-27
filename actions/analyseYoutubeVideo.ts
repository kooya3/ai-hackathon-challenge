"use server"

/* import { getVideoIdfromUrl } from "@/lib/youtube/getVideoIdFromUrl"; */
import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
    const url = formData.get("url")?.toString();
    if (!url) return;

    const videoId = 'abc12'; // TODO: 
    if (!videoId) return;
    
    // Redirect to the new post
    redirect(`/video/${videoId}/analysis`);
}

export default analyseYoutubeVideo