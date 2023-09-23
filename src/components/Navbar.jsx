import { Icon } from "@iconify/react";
import Container from "./Container";
import Button from "./Button";

const Navbar = () => {
    return (
        <Container variant="flexCenterBetween" className="w-full h-[80px] top-0 px-[32px] py-[16px] border-b border-b-pink-300">
            <Container variant="iconNav" className="">
                <Icon className="w-[45px] h-[45px] " href="" icon="logos:visual-studio-code" />
            </Container>
            <Container variant="flexCenter" className="w-[354px] h-[40px] gap-[16px]">
                <Container variant="linkNav"> Home </Container>
                <Container variant="linkNav"> Products </Container>
                <Container variant="linkNav"> About </Container>
                <Container variant="linkNav"> Contact </Container>
            </Container>
                <Container variant="flexCenter" className="gap-[24px]">
                    <Button variant="secondary"> Login </Button>
                    <Button variant="primary"> Sign up </Button>
                </Container>
        </Container>
    )
}

export default Navbar;  