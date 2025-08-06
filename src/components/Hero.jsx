const Hero = ({
  title = "Become a React Dev",
  subtext = "Find the React Job that fits your skill set",
}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div>
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="text-white my-4 text-xl">{subtext}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
