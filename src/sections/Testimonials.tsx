import { SectionHeader } from "@/components/SectionHeader";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Shivflix",
    position:
      "React, Hooks, Redux Toolkit, Material UI, Alan AI, TMBD API, Netlify",
    text: "Built a Netflix-like platform with IMDb features for movie and TV show info and ratings. Utilized Alan AI for voice control and used React, Hooks, and Redux Toolkit for a seamless and interactive user experience",
    link: "https://shivflix.netlify.app/",
  },
  {
    name: "Portfolio Website",
    position:
      "React, Tailwind CSS, TypeScript, Vercel",
    text: "Portfolio website showcasing my projects and skills. Built using React, Tailwind CSS, and TypeScript for a modern and responsive design",
    link: "https://www.shivanandasai.xyz/",
  },
  {
    name: "Interview AI",
    position:
      "Next.js, Typescript, Firebase, shadcn/ui, Tailwind CSS, Google Gemini, Vapi AI, React Hook Form",
    text: "AI-powered interview preparation tool. It generates interview questions based on the job title and provides AI-generated answers. Built using Next.js, Firebase, and shadcn/ui for a modern and responsive design",
    link: "https://interview-prep-ai-beta.vercel.app/",
  },
  {
    name: "Image to Text",
    position: "NextJs, Cloudflare, Hono",
    text: "Image to text generation. Upload your image and it will generate instagram post captions related to the picture you uploaded. Utilized Cloudflare and Hono for APIs",
    link: "https://c053d302.frontend-nextjs-dto.pages.dev/",
  },
  {
    name: "Auto Commit AI",
    position: "Javascript, Ollama",
    text: "AI-powered commit message generator. It generates commit messages based on the code you wrote. Built using Javascript and Ollama for a modern and responsive design",
    link: "https://github.com/ssk090/ai-commit-gen",
  },
  {
    name: "Web3 Wallet",
    position: "NextJs",
    text: "Built a web3 wallet for users. It also generates mnemonics for users to use for their wallet. Utilized NextJs for the frontend",
    link: "https://mnemonic-generator-murex.vercel.app/",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        {/* <div className="size-14 bg-gray-800 rounded-full inline-flex items-center justify-center flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}  
                            className="max-h-full"
                          />
                        </div> */}
                        <div className="">
                          <div className="flex justify-between items-center">
                            <div className="font-semibold">
                              {testimonial.name}
                            </div>
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                      <a
                        href={testimonial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                          <span>Visit</span>
                          <ArrowUpRight className="size-5" />
                        </button>
                      </a>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
