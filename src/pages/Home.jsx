import { Link } from "react-router-dom";
import pic from "../assets/DP.jpg";

function Home() {
  return (
    <div className="home-container w-[70vw] mt-[5rem] mx-auto ">
      <div className="w-[100%]">
        <img
          src={pic}
          className="w-[10rem] h-[11rem] object-cover rounded-[50%] "
          alt="jitesh here..."
        />
      </div>
      <div className="w-[100% mt-5">
        <h2 className="font-black text-2xl text-black ">
          Hey I am Jitesh Kumar
        </h2>
        <p className="mt-2">
          {" "}
          I am a front end developer and a first year student at Anurag
          University{" "}
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          iste aut eum nesciunt, ut obcaecati earum vero, expedita possimus
          harum quis deleniti odio. Nihil, tenetur at. Repellendus odio aut
          dolor nobis nulla ratione rem quaerat, ea repudiandae expedita porro
          obcaecati.
        </p>

        <div className="flex gap-4 w-[100%] mt-2 flex-wrap">
          <a
          target="_blank"
            href="https://docs.google.com/document/d/126pcwz5J_ICrMP8bJe4updkxSvv8aI68/edit?usp=sharing&ouid=102716288857617305271&rtpof=true&sd=true"
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem] "
          >
            My Resume
          </a>
          <a
          target="_blank"
            href="https://www.linkedin.com/in/jitesh-kumar-5190ba240/"
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Linkedin
          </a>
          <a
          target="_blank"
            href="https://github.com/JITESH-KUMAR05"
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Github
          </a>
          <a
          target="_blank"
            href="https://discordapp.com/users/jk05_/"
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Discord
          </a>
          <a
          target="_blank"
            href="https://twitter.com/Jitesh_Kumar05"
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Twitter
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/techvedas.dev/"
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Instagram
          </a>
          <a
          target="_blank"
            href="https://stackoverflow.com/users/23510505/jitesh-kumar"
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Stack Overflow
          </a>

          <Link
            to={"/letstalk"}
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
