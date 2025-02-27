"use server"

import { getVideoIdfromUrl } from "@/lib/youtube/getVideoIdFromUrl";
import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
    const url = formData.get("url")?.toString();
    if (!url) return;

    const videoId = getVideoIdfromUrl(url);
    if (!videoId) return;
    
    // Redirect to the new post
    redirect(`/video/${videoId}/analysis`);
}

export default analyseYoutubeVideo