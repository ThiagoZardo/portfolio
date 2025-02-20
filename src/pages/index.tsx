import Image from "next/image"; // Importe o componente Image do Next.js

const HomePage: FC = () => {
  return (
    <div className="bg-[#1e2a47] text-white min-h-screen flex flex-col items-center justify-center">
      <header className="flex flex-col items-center mb-12">
        <h1 className="text-5xl font-extrabold text-center mb-4 text-[#1e3a8a]">
          Hi, I'm Thiago – Full Stack Developer & Mobile App Expert!
        </h1>
        <p className="text-lg mb-6 text-center text-[#4b5563] max-w-3xl">
          I specialize in building high-performance web and mobile applications with <strong>React</strong>, <strong>Node.js</strong>, <strong>React Native</strong>, and <strong>DevOps</strong>. 
          From crafting seamless user experiences to scaling enterprise-grade solutions, I am passionate about creating innovative solutions that drive business growth.
          <br /> 
          Whether you need a <strong>cross-platform mobile app</strong> for <strong>Android and iOS</strong> or a <strong>powerful web solution</strong>, I’ve got you covered.
        </p>
        <div className="flex gap-6">
          <a
            href="projects"
            className="px-6 py-3 bg-[#2563eb] text-white rounded-lg text-xl font-semibold hover:bg-[#1d4ed8] transition duration-300"
          >
            Explore My Projects
          </a>
          <a
            href="contact"
            className="px-6 py-3 bg-[#10b981] text-white rounded-lg text-xl font-semibold hover:bg-[#059669] transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </header>


      {/* Technologies Section */}
      <section id="technologies" className="w-full flex justify-center mb-12">
        <div className="overflow-hidden w-full">
          {/* Aplicação da animação infinita */}
          <div className="flex gap-8 animate-marquee">
            {/* Repetindo os badges para garantir o loop contínuo */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <a href="https://www.vivaolinux.com.br/linux">
                  <Image
                    alt="Thiago-Linux"
                    src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://git-scm.com/">
                  <Image
                    alt="Thiago-Git"
                    src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://devdocs.io/">
                  <Image
                    alt="Thiago-Bash"
                    src="https://img.shields.io/badge/GNU%20Bash-4EAA25?style=for-the-badge&logo=GNU%20Bash&logoColor=white"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
                  <Image
                    alt="Thiago-HTML"
                    src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://www.w3schools.com/css/">
                  <Image
                    alt="Thiago-CSS"
                    src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
                  <Image
                    alt="Thiago-Js"
                    src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://jestjs.io">
                  <Image
                    alt="Thiago-Jest"
                    src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://testing-library.com/">
                  <Image
                    alt="Thiago-RTL"
                    src="https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://mochajs.org/">
                  <Image
                    alt="Thiago-Mocha"
                    src="https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://www.chaijs.com/">
                  <Image
                    alt="Thiago-Chai"
                    src="https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://sinonjs.org/">
                  <Image
                    alt="Thiago-Sinon"
                    src="https://img.shields.io/badge/sinon.js-323330?style=for-the-badge&logo=sinon"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://reactjs.org/">
                  <Image
                    alt="Thiago-React"
                    src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://vuejs.org/">
                  <Image
                    alt="Thiago-Vue"
                    src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://reactnative.dev/">
                  <Image
                    alt="Thiago-React-Native"
                    src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://reactrouter.com/">
                  <Image
                    alt="Thiago-React-Router"
                    src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://redux.js.org/">
                  <Image
                    alt="Thiago-Redux"
                    src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://docs.docker.com/">
                  <Image
                    alt="Thiago-Docker"
                    src="https://user-images.githubusercontent.com/66880417/184455784-1d6ad612-ab91-48b6-ab41-1d08cbba8962.png"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="https://nodejs.org/en/">
                  <Image
                    alt="Thiago-Node.Js"
                    src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>

              <div className="flex flex-col items-center">
                <a href="http://expressjs.com/pt-br/">
                  <Image
                    alt="Thiago-Express"
                    src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
                    width={100}
                    height={64}
                    className="mb-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
