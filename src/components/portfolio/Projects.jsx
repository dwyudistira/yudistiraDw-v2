import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  const isPublic = data?.status === "public";
  
  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 flex flex-col h-full">
      {/* Gambar dengan ukuran tetap */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={data?.image} 
          alt={`${data?.title} image`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4 xs:p-8 flex flex-col flex-grow">
        <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3 line-clamp-2">
          {data?.title}
        </p>
        
        {data?.tech && (
          <span
            className={`inline-block mb-3 rounded-full px-3 py-1 text-xs font-medium
              ${
                data?.status === "public"
                  ? "bg-green-100 text-green-700"
                  : data?.status === "private"
                  ? "bg-red-100 text-red-700"
                  : data?.status === "on-going"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-100 text-gray-600"
              }
            `}
          >
            Tech: {data.tech}
          </span>
        )}
        
        {/* Deskripsi dengan tinggi tetap */}
        <div className="flex-grow mb-4 min-h-[80px]">
          <p
            style={{ lineHeight: "20px", letterSpacing: "0%" }}
            className="text-gray-600 text-xs xxs:text-[14px] text-wrap line-clamp-4"
          >
            {data?.description}
          </p>
        </div>
        
        {/* Tombol yang selalu di bagian bawah */}
        <a
          target="_blank"
          href={data?.status === "private" ? undefined : data?.link}
          rel="noopener noreferrer"
          onClick={(e) => {
            if (data?.status === "private") {
              e.preventDefault(); // BIKIN DIAM
            }
          }}
          className={`btn bg-white text-sm xs:text-[16px] font-semibold
            py-3 px-6 w-full text-center border rounded-md
            transition-all duration-300
            ${
              data?.status === "private"
                ? "opacity-50 cursor-not-allowed pointer-events-none"
                : "border-gray-300 hover:border-picto-primary hover:text-picto-primary hover:gap-3 xs:hover:gap-4"
            }
          `}
        >
          Source Code
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" />
          </span>
        </a>

      </div>
    </div>
  );
};

export default Projects;