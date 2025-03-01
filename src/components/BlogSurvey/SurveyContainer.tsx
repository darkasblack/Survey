import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import SurveyArticle from "./SurveyArticle";

const SurveyContainer: React.FC = () => {
  const surveyArticles = [
    {
      id: "1",
      title:
        "Occidental Mindoro Congressional Race Heats Up: Nene Sato Leads Early Polls",
      imageUrl: "/src/Images/Congress.png",
      content:
        "The race for the lone congressional seat of Occidental Mindoro is becoming increasingly competitive, with former Congresswoman Nene Sato currently leading the pack. A survey conducted from February 15-22, 2025, in the municipalities of Mamburao, Sta. Cruz, Sablayan, Paluan, and Abra de Ilog shows Sato with a commanding 54% of the vote, ahead of the incumbent Congressman Odie Tarriela, who trails with 42%. Four percent of respondents remain undecided.\n\nThis political showdown sees two prominent leaders vying for the seat: Sato, with her long-standing track record in public service, and Tarriela, who is seeking a second term. The final decision will be made on May 12, 2025, but if the election were held today, the results in the MAPSA area might already favor Sato.\n\nSato, who made headlines after her loss in the 2022 gubernatorial race to Governor Ed Gadiano, is making a strong comeback. Her grassroots approach has resonated with the local population, helping her build a substantial lead over Tarriela, who is facing challenges amid recent controversies. Notably, the survey did not include the municipalities of Looc and Lubang, where Tarriela hails from, which could potentially impact his numbers.\n\nThe incumbent congressman's stance against the impeachment of Vice President Sara Duterte has drawn criticism, further hurting his popularity. Additionally, rumors of irregularities in the distribution of government financial aid have added fuel to the fire, particularly in more remote areas.\n\nDespite trailing, Tarriela still has time to make adjustments, but with Sato gaining momentum, the battle for Occidental Mindoro's congressional seat promises to be a tense one, with Sato likely to push hard for a strong finish come May 12, 2025.",
      imageFirst: true,
    },
    {
      id: "2",
      title:
        "Race for Vice Governor in Occidental Mindoro: Diana Apigo-Tayag Holds Half Lead",
      imageUrl: "/src/Images/Vice-Gubernatorial.png",
      content:
        "The vice-gubernatorial race in Occidental Mindoro is tilting heavily in favor of incumbent Vice Governor Diana Apigo-Tayag, who now commands a significant lead over challenger Aj Rebong. A recent survey conducted between February 15-22, 2025, across the municipalities of Mamburao, Sta. Cruz, Sablayan, Paluan, and Abra de Ilog shows Tayag securing 61% of the vote, while Rebong trails far behind with only 36%. The remaining 3% of voters remain undecided.\n\nTayag's overwhelming lead reflects her strong presence and deep engagement with communities throughout her tenure. Her continued visibility in key areas, coupled with impactful local programs, has cemented her advantage in the province. In contrast, Rebong, despite his political background, has struggled to gain traction, lacking the same level of grassroots engagement.\n\nWith just weeks to go before election day, Tayag's momentum shows no signs of slowing down. Even if the undecided voters break in Rebong's favor, it would be mathematically difficult for him to close the gap. Additionally, Tayag's stronghold in SaMaRiCa—an area not included in the survey—could further increase her lead, making her path to victory even clearer.\n\nBarring any major shifts, Diana Apigo-Tayag appears well-positioned to secure re-election as the next Vice Governor of Occidental Mindoro.",
      imageFirst: false,
    },
    {
      id: "3",
      title:
        "Ryan Sioson Leads Early Survey for 1st District Board Member in Occidental Mindoro",
      imageUrl: "/src/Images/Board Members.png",
      content:
        'The race for the 1st District Board Member seat in Occidental Mindoro is shaping up to be highly competitive, with incumbent Ryan Sioson holding a narrow lead, according to a recent survey. Conducted from February 15-22, 2025, in the municipalities of Mamburao, Sta. Cruz, Sablayan, Paluan, and Abra de Ilog, the survey gathered responses from 2,000 individuals aged 18 to 65. Sioson, the current board member and nephew of the unopposed Governor Ed Gadiano, topped the survey with 52%. He is closely followed by fellow incumbent Eddie Masangkay, who garnered 49%. Masangkay\'s popularity has been buoyed by his efforts to distribute free tents and videoke machines, which have earned him significant support from the local "masa."\n\nA surprising third-place finisher is Atty. Jill Espejo, a newcomer to the political scene. With his professional background, aggressive campaign strategy, and slogan Serbisyong Piho, Espejo has gained momentum and is quickly becoming a recognizable name. Not far behind is former Vice Governor Peter Alfaro, who placed fourth. Despite a shift from his longtime local party and a failed congressional bid in the previous election, Alfaro remains a significant contender. His standing may improve in future surveys as the gap between him and Espejo narrows.\n\nJoel Panaligan, a long-time politician from Mamburao, secured the fifth spot despite a recent loss in the vice-mayoralty race. His well-established political track record continues to earn him support.\n\nAtty. Jun Tejoso, another incumbent board member who finished second in the 2022 election, has dropped to sixth place. His decision to leave the Dream Team after his election victory may have impacted his chances, according to observers.\n\nAt the seventh and eighth spots are party-mates Jun Abeleda and Miko Medalla. Although both are well-known at the local provincial level, their relatively late start in campaigning may have affected their standing. Former board member Nestor Tria sits in ninth, with many voters citing his decision to align with a new local party as a factor in his decline in popularity.\n\nThe remaining candidates, including Fe Torreliza Chua, Boy Alvarez, and Pastor Toti Ramos, are trailing at the bottom, with their lack of visible campaign materials such as posters and virtual ads contributing to their limited recognition among voters.\n\nWith the election still months away, the race remains fluid, and further shifts in voter sentiment are expected as candidates intensify their campaigns.',
      imageFirst: true,
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <Header
        title="Occidental Mindoro 2025 Election Poll Survey"
        caption="Latest poll results for the upcoming 2025 elections in Occidental Mindoro province"
      />

      {/* Sticky header with logo */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Latest Poll Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our comprehensive survey conducted from February 15-22, 2025, across
            key municipalities in Occidental Mindoro reveals the current
            standing of candidates for various positions in the upcoming May 12,
            2025 elections.
          </p>
        </motion.div>

        {surveyArticles.map((article) => (
          <SurveyArticle
            key={article.id}
            title={article.title}
            imageUrl={article.imageUrl}
            content={article.content}
            imageFirst={article.imageFirst}
          />
        ))}

        {/* Call to action */}
        <div className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 rounded-2xl shadow-xl overflow-hidden my-16">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated on Poll Results
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Subscribe to receive the latest updates on election polls and
                candidate standings in Occidental Mindoro.
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
                  <span className="text-sm">Detailed Analysis</span>
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
                  This survey was conducted to gather public opinion on key
                  candidates for the upcoming 2025 elections in Occidental
                  Mindoro province.
                </p>
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
              <p>
                © 2025 Occidental Mindoro Election Survey. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SurveyContainer;
