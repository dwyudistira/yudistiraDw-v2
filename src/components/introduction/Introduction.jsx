import "./introduction.css";
import InformationSummary from "./InformationSummary";

const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "2 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "10+",
  },
  {
    id: 3,
    title: "Fresh Graduate",
    description: "2025",
  },
];

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="
        flex justify-center
        pt-16 lg:pt-32
        px-4
      "
    >
      <div
        className="
          w-full
          max-w-4xl
          flex flex-col
          items-center
          text-center
        "
      >
        {/* TEXT CONTENT */}
        <div className="transition-all duration-500">
          <h1 className="text-3xl xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight">
            Hello, I’m
            <span className="block mt-2">
              Yudistira Dharma Wardana
            </span>
          </h1>

          <p className="text-sm xxs:text-lg lg:text-[18px] text-gray-700 my-6">
            I'm a <span className="bg-highlight">Backend Web Developer</span> based in
            West Java, Indonesia. I specialize in building scalable, secure, and
            efficient web applications with clean architecture and
            well-structured APIs.
          </p>
        </div>

        {/* INFORMATION SUMMARY */}
        <div className="mt-12">
          <div className="grid grid-cols-3 gap-2">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
