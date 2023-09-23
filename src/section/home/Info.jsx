import Container from "@/components/Container"


const Info = ( ) => {
    return (
        <Container variant="flexColCenter" className="debug-green w-full h-[514px] p-[64px] " >
           <div className="debug-blue w-[1200px] h-[386px] ">
            <Container variant="pInfo" className="text-end pr-[164px]"> [The Museum of Art </Container>
            <Container variant="pInfo"> presents over 2,000 years of art from around the world for everyone to </Container>
            <Container variant="pInfo" className="text-end pr-[68px] "> experience and enjoy]  </Container>
           </div>
        </Container>
    )
}
export default Info;