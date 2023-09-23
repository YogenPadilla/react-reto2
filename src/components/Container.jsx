import { cx } from "class-variance-authority";
import Link from "next/link";

const Container = ({ children, variant, className }) => {
  return (
    <>
      {variant === "flexCenter" && (
        <div className={cx("flex items-center justify-center", className)}>
          {" "}
          {children}{" "}
        </div>
      )}

      {variant === "flexCenterBetween" && (
        <div className={cx("flex items-center justify-between", className)}>
          {" "}
          {children}{" "}
        </div>
      )}

      {variant === "flexColCenter" && (
        <div className={cx("flex flex-col items-center", className)}>
          {" "}
          {children}{" "}
        </div>
      )}

      {variant === "iconNav" && (
        <div className={cx("flex items-center justify-center hover:scale-125 active:scale-100 cursor-pointer", className)}>
          {" "}
          {children}{" "}
        </div>
      )}

      {variant === "flexColStart" && (
        <div className={cx("flex flex-col items-start", className)}>
          {""}
          {children}
          {""}
        </div>
      )}

      {variant === "flexStartCenter" && (
        <div className={cx("flex items-start justify-center", className)}>
          {""}
          {children}
          {""}
        </div>
      )}

      {variant === "h1Hero" && (        
        <h1 className={cx("h-[376px] text-[#ccf243] font-[Antonio] text-[408px] font-[700] leading-[320px] tracking-[-8px] uppercase", className)}>
          {" "}
          {children}{" "}
        </h1>
      )}

      {variant === "linkNav" && (
          <Link href="" className={cx("px-[12px] py-[8px] uppercase text-[#0c51d6] text-[20px] leading-6 font-[Antonio] hover:scale-125 active:scale-100", className)} >
              {" "}
          {children}{" "}
          </Link>
      )}

      {variant === "pHero" && (
          <p href="" className={cx("text-[#0c51d6] font-[inter] text-[18px] font-normal leading-[21.6px] uppercase", className)}>
          {" "}
          {children}{" "}
          </p>
      )}

      {variant === "h1Stats" && (        
         <h1 className={cx("text-[#ccf243] font-[Antonio] text-[200px] font-[700] leading-[259px] tracking-[4px] uppercase", className)}>
         {" "}
         {children}{" "}
         </h1>
       )}

      {variant === "pStats" && (        
        <p className={cx("text-[#0c51d6] font-[Inter] text-[18px] font-[400] text-center leading-[21.6px]", className)}>
          {" "}
          {children}{" "}
        </p>
      )}

      {variant === "exStats" && (        
         <div className="absolute pl-[396px] pt-[41px] ">
           <h1 className={cx("text-[#ccf243] font-[Antonio] text-[64px] font-[600] leading-[83px]", className)}>
             {" "}
             {children}{" "}
           </h1>
         </div>
      )}

      {variant === "pInfo" && (        
        <p className={cx("text-[#0c51d6] font-[Antonio] text-[88px] font-[400] leading-[88px] tracking-[-1.76px] uppercase ", className)}>
          {" "}
          {children}{" "}
        </p>
      )}

    </>
  );
};

export default Container;
