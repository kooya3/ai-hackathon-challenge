import AgentPulse from "@/components/AgentPulse";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { Agent } from "http";
import { Brain, ImageIcon, MailPlus, MessageSquare, MessageSquareCode, Sparkles, Video } from "lucide-react";

const steps = [
  {
    title: "1. Upload Your Content",
    description: "Upload your video content and let your agent get to work",
    icon: Video,
  },
  {
    title: "2. AI Agent Analysis",
    description: "Your personal agent analyzes every aspect of your content",
    icon: Brain,
  },
  {
    title: "3. Receive Intelligence",
    description: "Get actionable insights and strategic recommendations",
    icon: MessageSquareCode,
  },
];

const features = [
  {
    title: "AI-Powered Analysis",
    description: "Get AI-Powered insights to help you create better content faster. Understand viewer engagement and content quality",
    icon: Brain,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "Smart Transcription",
    description: "Transcribe your video content in minutes. Perfect for creating subtitles, blog posts, or repurposing content.",
    icon: MessageSquare,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    title: "Thumbnail Generation",
    description: "Create engaging thumbnails for your videos in minutes. AI-Powered image generation to help you stand out.",
    icon: ImageIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Title Generation",
    description: "Generate engaging titles for your videos in minutes. SEO optimized titles for your content using AI. Maximise views with titles that resonate with your audience.",
    icon: MailPlus,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Shot Script Generation",
    description: "Generate shot scripts for your videos in minutes. Perfect for planning your video content and creating engaging videos.",
    icon: Video,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Discuss with Your Agent",
    description: "Discuss your content with your AI Content Agent. Get feedback, suggestions, and ideas to help you create better content.",
    icon: Sparkles,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <AgentPulse size="large" color="blue" />

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Meet your personal{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> AI Content Agent</span></h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your Video content with AI. Our AI Content Agent will help you create engaging video content in minutes. AI-Powered analysis, transcription, and insights to help you create better content faster.
            </p>

            {/* Youtube Video upload section */}
           <YoutubeVideoForm /> 
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="py-20 bg-white ">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Powerful Features For Content Creators</h2>
            {/* <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our AI Content Agent comes with a range of features to help you create better content faster.
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* feature cards */}

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.iconBg}`}>
                      <Icon />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 ">
                      {feature.description}
                    </p>

                  </div>

                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / how it works section*/}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="constainer mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Your AI Agent in 3 Simple Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-gradient-to-r  from-blue-600 to-blue-400 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 ">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* Footer */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Meet Your AI Content Agent?
            <p className="text-lg text-blue-50">
              Join creators leveraging AI to unlock content insights
            </p>
          </h2>
        </div>
      </section>

    </div>
  );
}
