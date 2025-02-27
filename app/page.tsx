import AgentPulse from "@/components/AgentPulse";
import { Agent } from "http";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <AgentPulse size="large" color="blue" />

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Meet your personal{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> AI Content Agent</span></h1>
          </div>
        </div>
      </section>


      {/* Features */}

      {/* CTA / how it works section*/}

      {/* Footer */}

    </div>
  );
}
