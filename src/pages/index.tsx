import Image from "next/image"; // Importe o componente Image do Next.js

const HomePage: FC = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <header className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Thiago!</h1>
        <p className="text-lg mb-4">
          I'm a Full Stack Developer with expertise in React Native, Node and DevOps. I build mobile apps for Android and iOS.
        </p>
        <div className="flex gap-4">
          <a href="projects" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition duration-300">
            See My Projects
          </a>
          <a href="contact" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition duration-300">
            Contact Me
          </a>
        </div>
      </header>

      {/* Technologies Section */}
      <section id="technologies" className="w-full flex justify-center mb-12">
        <div className="grid grid-cols-2 md:grid-cols-10 gap-8">
          <div className="flex flex-col items-center">
            <a href="https://www.vivaolinux.com.br/linux">
              <Image
                alt="Thiago-Linux"
                src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
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
                width={64}
                height={64}
                className="mb-2"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
