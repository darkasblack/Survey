import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import PollArticle from "./PollArticle";
import Header from "./Header";

interface PollItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageFirst: boolean;
}

interface PollContainerProps {
  items?: PollItem[];
}

const PollContainer: React.FC<PollContainerProps> = ({
  items = [
    {
      id: "1",
      title:
        "Occidental Mindoro Congressional Race Heats Up: Nene Sato Leads Early Polls",
      description:
        "The race for the lone congressional seat of Occidental Mindoro is becoming increasingly competitive, with former Congresswoman Nene Sato currently leading the pack. A survey conducted from February 15-22, 2025, in the municipalities of Mamburao, Sta. Cruz, Sablayan, Paluan, and Abra de Ilog shows Sato with a commanding 54% of the vote, ahead of the incumbent Congressman Odie Tarriela, who trails with 42%. Four percent of respondents remain undecided.\n\nThis political showdown sees two prominent leaders vying for the seat: Sato, with her long-standing track record in public service, and Tarriela, who is seeking a second term. The final decision will be made on May 12, 2025, but if the election were held today, the results in the MAPSA area might already favor Sato.\n\nSato, who made headlines after her loss in the 2022 gubernatorial race to Governor Ed Gadiano, is making a strong comeback. Her grassroots approach has resonated with the local population, helping her build a substantial lead over Tarriela, who is facing challenges amid recent controversies. Notably, the survey did not include the municipalities of Looc and Lubang, where Tarriela hails from, which could potentially impact his numbers.\n\nThe incumbent congressman's stance against the impeachment of Vice President Sara Duterte has drawn criticism, further hurting his popularity. Additionally, rumors of irregularities in the distribution of government financial aid have added fuel to the fire, particularly in more remote areas.\n\nDespite trailing, Tarriela still has time to make adjustments, but with Sato gaining momentum, the battle for Occidental Mindoro's congressional seat promises to be a tense one, with Sato likely to push hard for a strong finish come May 12, 2025.",
      imageUrl: "./assets/Congress.png",
      imageFirst: true,
    },
    {
      id: "2",
      title:
        "Race for Vice Governor in Occidental Mindoro: Diana Apigo-Tayag Holds Half Lead",
      description:
        "The vice-gubernatorial race in Occidental Mindoro is tilting heavily in favor of incumbent Vice Governor Diana Apigo-Tayag, who now commands a significant lead over challenger Aj Rebong. A recent survey conducted between February 15-22, 2025, across the municipalities of Mamburao, Sta. Cruz, Sablayan, Paluan, and Abra de Ilog shows Tayag securing 61% of the vote, while Rebong trails far behind with only 36%. The remaining 3% of voters remain undecided.\n\nTayag's overwhelming lead reflects her strong presence and deep engagement with communities throughout her tenure. Her continued visibility in key areas, coupled with impactful local programs, has cemented her advantage in the province. In contrast, Rebong, despite his political background, has struggled to gain traction, lacking the same level of grassroots engagement.\n\nWith just weeks to go before election day, Tayag's momentum shows no signs of slowing down. Even if the undecided voters break in Rebong's favor, it would be mathematically difficult for him to close the gap. Additionally, Tayag's stronghold in SaMaRiCa—an area not included in the survey—could further increase her lead, making her path to victory even clearer.\n\nBarring any major shifts, Diana Apigo-Tayag appears well-positioned to secure re-election as the next Vice Governor of Occidental Mindoro.",
      imageUrl: "./assets/Vice-Gubernatorial.png",
      imageFirst: false,
    },
    {
      id: "3",
      title:
        "Ryan Sioson Leads Early Survey for 1st District Board Member in Occidental Mindoro",
      description:
        'The race for the 1st District Board Member seat in Occidental Mindoro is shaping up to be highly competitive, with incumbent Ryan Sioson holding a narrow lead, according to a recent survey. Conducted from February 15-22, 2025, in the municipalities of Mamburao, Sta. Cruz, Sablayan, Paluan, and Abra de Ilog, the survey gathered responses from 2,000 individuals aged 18 to 65.\n\nSioson, the current board member and nephew of the unopposed Governor Ed Gadiano, topped the survey with 52%. He is closely followed by fellow incumbent Eddie Masangkay, who garnered 49%. Masangkay\'s popularity has been buoyed by his efforts to distribute free tents and videoke machines, which have earned him significant support from the local "masa."\n\nA surprising third-place finisher is Atty. Jill Espejo, a newcomer to the political scene. With his professional background, aggressive campaign strategy, and slogan Serbisyong Piho, Espejo has gained momentum and is quickly becoming a recognizable name. Not far behind is former Vice Governor Peter Alfaro, who placed fourth. Despite a shift from his longtime local party and a failed congressional bid in the previous election, Alfaro remains a significant contender. His standing may improve in future surveys as the gap between him and Espejo narrows.\n\nJoel Panaligan, a long-time politician from Mamburao, secured the fifth spot despite a recent loss in the vice-mayoralty race. His well-established political track record continues to earn him support.\n\nAtty. Jun Tejoso, another incumbent board member who finished second in the 2022 election, has dropped to sixth place. His decision to leave the Dream Team after his election victory may have impacted his chances, according to observers.\n\nAt the seventh and eighth spots are party-mates Jun Abeleda and Miko Medalla. Although both are well-known at the local provincial level, their relatively late start in campaigning may have affected their standing. Former board member Nestor Tria sits in ninth, with many voters citing his decision to align with a new local party as a factor in his decline in popularity.\n\nThe remaining candidates, including Fe Torreliza Chua, Boy Alvarez, and Pastor Toti Ramos, are trailing at the bottom, with their lack of visible campaign materials such as posters and virtual ads contributing to their limited recognition among voters.\n\nWith the election still months away, the race remains fluid, and further shifts in voter sentiment are expected as candidates intensify their campaigns.',
      imageUrl: "./assets/Board-Members.png",
      imageFirst: true,
    },
  ],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <Header
        title="Occidental Mindoro 2025 Election Poll Survey"
        caption="Latest poll results for the upcoming 2025 elections in Occidental Mindoro province"
      />

      {/* Header indicator */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                P
              </div>
              <span className="text-sm font-medium">
                Occidental Mindoro 2025 Poll Survey
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Congressional Race</h3>
                <p className="text-sm text-gray-500">
                  Nene Sato leads with 54%
                </p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Former Congresswoman Nene Sato leads incumbent Odie Tarriela in
              the latest polls.
            </p>
            <a
              href="#poll-1"
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
            >
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  Vice-Gubernatorial Race
                </h3>
                <p className="text-sm text-gray-500">
                  Diana Apigo-Tayag at 61%
                </p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Incumbent Vice Governor Diana Apigo-Tayag holds a commanding lead
              over challenger Aj Rebong.
            </p>
            <a
              href="#poll-2"
              className="text-red-600 font-medium hover:text-red-800 transition-colors flex items-center"
            >
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Board Member Race</h3>
                <p className="text-sm text-gray-500">
                  Ryan Sioson leads with 52%
                </p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Incumbent Ryan Sioson narrowly leads the race for 1st District
              Board Member seat.
            </p>
            <a
              href="#poll-3"
              className="text-yellow-600 font-medium hover:text-yellow-800 transition-colors flex items-center"
            >
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {items.map((item, index) => (
          <div
            id={`poll-${item.id}`}
            key={item.id}
            className="mb-24 last:mb-12 bg-white rounded-xl shadow-lg overflow-hidden scroll-mt-24"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-4 px-6">
              <div className="flex items-center">
                <div className="bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 shadow-md">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {item.title.split(":")[0]}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <PollArticle
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                imageFirst={item.imageFirst}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 rounded-2xl shadow-xl overflow-hidden my-16 mx-4 sm:mx-8 lg:mx-auto lg:max-w-7xl">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0 md:max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated on Election Results
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Subscribe to receive the latest poll results and election news
              from Occidental Mindoro.
            </p>
            <div className="flex space-x-3">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1 mr-2">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm">Weekly Updates</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1 mr-2">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm">Exclusive Analysis</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1 mr-2">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm">Free Access</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg w-full md:w-auto">
            <h3 className="text-white text-xl font-bold mb-4">
              Subscribe for Updates
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-4 rounded-lg transition-colors shadow-md">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 p-2 rounded-lg mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">
                  Occidental Mindoro 2025 Poll Survey
                </h3>
              </div>
              <p className="text-gray-400">
                This survey was conducted from February 15-22, 2025, across the
                municipalities of Mamburao, Sta. Cruz, Sablayan, Paluan, and
                Abra de Ilog with 2,000 respondents aged 18-65.
              </p>
              <div className="flex mt-6 space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Important Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    About the Survey
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to receive updates on election news and survey
                results.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-4 py-3 rounded-r-lg transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>
                © 2025 Occidental Mindoro Election Survey. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors text-sm"
                >
                  Methodology
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PollContainer;
