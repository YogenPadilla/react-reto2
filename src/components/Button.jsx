const Button = ({ children, variant }) => {
  return (
    <>
      {variant === "primary" && (
        <button className=" bg-[#0c51d6] px-[24px] py-[8px] text-[#c2ff5f] text-[20px] font-[Antonio] uppercase leading-6 font-semibold border border-[#0c51d6] hover:scale-125 active:scale-100">
          {" "}
          {children}{" "}
        </button>
      )}
      {variant === "secondary" && (
        <button className=" bg-transparent px-[24px] py-[8px] text-[#0c51d6] text-[20px] font-[Antonio] uppercase leading-6 font-semibold border border-[#0c51d6] hover:scale-125 active:scale-100">
          {" "}
          {children}{" "}
        </button>
      )}
      {variant === "soft" && (
        <button className="w-[166px] h-[63px] bg-[#3d74de] text-[#ccf243] text-[24px] font-[Antonio] uppercase leading-normal font-semibold border border-[#3d74de] hover:scale-125 active:scale-100">
          {" "}
          {children}{" "}
        </button>
      )}
    </>
  );
};

export default Button;
