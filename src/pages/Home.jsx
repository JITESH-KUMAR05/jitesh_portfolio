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
            href=""
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem] "
          >
            My Resume
          </a>
          <a
            href="https://www.linkedin.com/in/jitesh-kumar-5190ba240/"
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Linkedin
          </a>
          <a
            href=""
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Github
          </a>
          <a
            href=""
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Discord
          </a>
          <a
            href=""
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Twitter
          </a>
          <a
            href=""
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Instagram
          </a>
          <a
            href=""
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Follow me on Stack Overflow
          </a>

          <a
            href=""
            className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
