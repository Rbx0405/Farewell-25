
const Quote = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute -top-10 left-0 text-8xl font-serif text-golden-orange/20">"</div>
        <blockquote className="relative z-10">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed mb-8">
            In these golden moments, time seems to stand still, allowing us to cherish what was and dream of what will be.
          </p>
          <footer className="font-medium text-muted-foreground">
            <cite>Farewell25 Journal</cite>
          </footer>
        </blockquote>
        <div className="absolute -bottom-20 right-0 text-8xl font-serif text-golden-orange/20">"</div>
      </div>
    </section>
  );
};

export default Quote;
