import Wrapper from '@/shares/Wrapper';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const processSteps = [
  {
    title: 'Discovery',
    content:
      'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
  },
  {
    title: 'Design',
    content:
      'After we have a comprehensive understanding of your brand, we’ll be ready to move onto design. Each page or UI will be reviewed, approved, and refined by you.',
  },
  {
    title: 'Strategy',
    content:
      'Every end-to-end project begins with a bespoke pre-build strategy. From brand ID consultation to deep CX reviews, we’re here to set the stage for success.',
    highlight: true,
  },
  {
    title: 'Build',
    content:
      'Whether we’ve just finished designing or you’re handing off finished designs, we’re here to apply our trusted development process to your project.',
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-black text-white py-24 rounded-t-[40px]">
      <Wrapper>
        <div className="flex flex-col gap-12">
          {/* Title */}
          <div className="text-center space-y-2">
            <span className="inline-block border border-white px-4 py-1 rounded-full text-sm">
              ● Work Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold">My Work Process</h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-6 space-y-4 ${
                  step.highlight
                    ? 'bg-lime-300 text-black rotate-[-3deg]'
                    : 'bg-[#111] text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      step.highlight ? 'bg-black text-white' : 'bg-lime-300 text-black'
                    }`}
                  >
                    {step.title}
                  </span>
                  <div className="flex items-center text-sm gap-1 hover:underline cursor-pointer">
                    → Read More
                  </div>
                </div>
                <p className="text-sm leading-relaxed">{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default WorkProcess;
